(() => {
  const KEY = 'fridge-fork-notebook-v1';
  let notebook = { recipes: {}, groceries: [] }, storageFailed = false;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.recipes && Array.isArray(raw.groceries)) {
      for (const recipe of recipes) {
        const item = raw.recipes[recipe.id];
        if (item && typeof item === 'object') notebook.recipes[recipe.id] = {saved:!!item.saved,liked:!!item.liked,cooked:!!item.cooked};
      }
      notebook.groceries = raw.groceries.filter(item => item && typeof item.name === 'string' && item.name.length <= 100 && Array.isArray(item.sources)).map(item => ({name:item.name,checked:!!item.checked,sources:item.sources.filter(id=>recipes.some(r=>r.id===id)), sourceAmounts:(item.sourceAmounts && typeof item.sourceAmounts==='object')?item.sourceAmounts:{}}));
    }
  } catch { storageFailed = true; }
  const state = id => notebook.recipes[id] || {saved:false,liked:false,cooked:false};
  const el = (tag, text, className) => {const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node};
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(notebook));storageFailed=false;}catch{storageFailed=true;}$('#shopping-storage-status').textContent=$('#storage-status').textContent=storageFailed?'Your browser could not save these changes. They will last only for this visit.':'';}
  function reminder(id){const s=state(id);return [s.liked?'♥ You liked this recipe':'',s.cooked?'✓ You’ve cooked this before':''].filter(Boolean).join(' · ')}
  function refresh(){renderSaved();renderGroceries();renderResults();if($('#recipe-dialog').open){const id=$('#recipe-detail').dataset.recipeId;if(id)decorateDetail(id);}}
  function toggle(id,key){const s=state(id);s[key]=!s[key];if((key==='liked'||key==='cooked')&&s[key])s.saved=true;notebook.recipes[id]=s;persist();refresh();}
  function action(text,handler,pressed){const b=el('button',text,'notebook-button');b.type='button';if(pressed!==undefined)b.setAttribute('aria-pressed',String(pressed));b.onclick=handler;return b;}
  function controls(r){const s=state(r.id),wrap=el('div','','recipe-actions');wrap.append(action(s.saved?'✓ Saved':'Save recipe',()=>toggle(r.id,'saved'),s.saved),action(s.liked?'♥ Liked':'♡ Like',()=>toggle(r.id,'liked'),s.liked),action(s.cooked?'✓ Cooked':'Mark cooked',()=>toggle(r.id,'cooked'),s.cooked));return wrap;}
  function addGroceries(r){
    const checks=checkRecipe(r), missing=groceryNeeds(r); let added=0;
    for(const need of missing){const name=need.id;let item=notebook.groceries.find(i=>i.name===name);
      if(!item){item={name,checked:false,sources:[],sourceAmounts:{}};notebook.groceries.push(item);added++;}
      if(!item.sources.includes(r.id))item.sources.push(r.id);
      item.sourceAmounts ||= {}; item.sourceAmounts[r.id]=amountText(need.shortage,need.unit)+' needed for '+servingCount()+' servings'; item.checked=false;
    }
    persist();renderGroceries();
    const unknown=checks.some(i=>i.status==='unknown');
    const message=(missing.length?(added?`${added} grocery ${added===1?'item':'items'} added.`:'Existing recipe entries updated; no duplicates.'):'No confirmed missing quantities to add.')+(unknown?' Some quantities are unknown. Enter them in your fridge to check what else you need.':'');
    $('#grocery-status').textContent=message;const feedback=$('#recipe-grocery-feedback');if(feedback)feedback.textContent=message;
  }
  function decorateDetail(id){const root=$('#recipe-detail'),r=recipes.find(r=>r.id===id);root.dataset.recipeId=id;root.querySelector('.detail-notebook')?.remove();const block=el('div','','detail-notebook');block.append(controls(r));const note=el('p',reminder(id),'recipe-memory');block.append(note,action('Add missing ingredients to groceries',()=>addGroceries(r)));const feedback=el('p');feedback.id='recipe-grocery-feedback';feedback.setAttribute('role','status');block.append(feedback);root.querySelector('h2').after(block);}
  const originalOpen=openRecipe;openRecipe=function(id){originalOpen(id);decorateDetail(id);};
  const originalResults=renderResults;renderResults=function(){originalResults();document.querySelectorAll('#recipes .recipe-card').forEach(card=>{const r=recipes.find(r=>r.name===card.querySelector('h3').textContent);if(!r)return;const text=reminder(r.id);if(text)card.querySelector('.recipe-body').append(el('p',text,'recipe-memory'));});};
  function renderSaved(){const list=$('#saved-recipes');list.replaceChildren();const filter=$('#library-filter').value;const selected=recipes.filter(r=>{const s=state(r.id);return filter==='liked'?s.liked:filter==='cooked'?s.cooked:s.saved||s.liked||s.cooked;});if(!selected.length){list.append(el('p',filter==='all'?'Your notebook is empty. Open a recipe and save it, like it, or mark it cooked.':'No recipes in this view yet.','empty'));return;}for(const r of selected){const card=el('article','','saved-card');card.append(el('h3',r.name),el('p',reminder(r.id)||'Saved for later','recipe-memory'),controls(r));const links=el('div','','recipe-actions');links.append(action('View recipe',()=>openRecipe(r.id)),action('Add missing groceries',()=>addGroceries(r)),action('Remove from notebook',()=>{delete notebook.recipes[r.id];persist();refresh();}));card.append(links);list.append(card);}}
  function renderGroceries(){const list=$('#grocery-items');list.replaceChildren();$('#clear-bought').hidden=!notebook.groceries.some(i=>i.checked);if(!notebook.groceries.length){list.append(el('li','Your list is empty. Add ingredients from a saved recipe or type an item above.','muted'));return;}notebook.groceries.forEach((item,index)=>{const li=el('li','','grocery-row');const label=el('label');const box=el('input');box.type='checkbox';box.checked=item.checked;box.onchange=()=>{item.checked=box.checked;persist();renderGroceries();};label.append(box,el('span',item.name,item.checked?'bought':''));const remove=action('×',()=>{notebook.groceries.splice(index,1);persist();renderGroceries();});remove.setAttribute('aria-label','Remove '+item.name);li.append(label,remove);for(const id of item.sources){const r=recipes.find(r=>r.id===id),n=r.ingredients.indexOf(item.name);li.append(el('small',`${r.name}: ${typeof item.sourceAmounts?.[id]==='string'?item.sourceAmounts[id]:(r.amounts[n]||item.name)+' (original 2-serving list)'}`));}list.append(li);});}
  $('#grocery-form').onsubmit=e=>{e.preventDefault();const input=$('#grocery-input'),name=normalize(input.value).slice(0,100);if(!name)return;const item=notebook.groceries.find(i=>i.name===name);if(item)item.checked=false;else notebook.groceries.push({name,checked:false,sources:[]});input.value='';persist();renderGroceries();$('#grocery-status').textContent=item?'Item is already on your list; marked as needed.':'Item added.';};
  $('#clear-bought').onclick=()=>{notebook.groceries=notebook.groceries.filter(i=>!i.checked);persist();renderGroceries();};
  $('#library-filter').onchange=renderSaved;
  $('#ready').onchange=()=>renderResults();
  function show(view){for(const name of ['discover','saved','shopping']){$('#'+name+'-view').hidden=name!==view;$('#nav-'+name).setAttribute('aria-pressed',String(name===view));}if(view==='saved')renderSaved();if(view==='shopping')renderGroceries();}
  $('#nav-discover').onclick=()=>show('discover');$('#nav-saved').onclick=()=>show('saved');$('#nav-shopping').onclick=()=>show('shopping');
  const today=new Date();$('#shopping-date').value=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
  $('#calendar-form').onsubmit=e=>{e.preventDefault();const pending=notebook.groceries.filter(i=>!i.checked);if(!pending.length){$('#calendar-status').textContent='Add an item to buy before planning your trip.';return;}const lines=pending.map(i=>[Kitchen.label(i.name),...i.sources.map(id=>{const r=recipes.find(r=>r.id===id);return r.name+': '+(i.sourceAmounts?.[id]||'check recipe quantities');})].join(' — '));try{const url=ShoppingCalendar.url($('#shopping-date').value,$('#shopping-title').value,lines);const opened=window.open(url,'_blank');if(opened)opened.opener=null;$('#calendar-status').textContent=opened?'Review the event in Google Calendar and press Save. Your list stays here.':'Allow pop-ups for this app, then try again.';}catch(error){$('#calendar-status').textContent=error.message;}};
  $('#shopping-storage-status').textContent=$('#storage-status').textContent=storageFailed?'Saved data could not be read. Changes may last only for this visit.':'';
  refresh();
})();
