(() => {
  const KEY = 'fridge-fork-notebook-v1';
  let notebook = { recipes: {}, groceries: [] }, storageFailed = false;
  function readLatest(){
    try {
      const raw=JSON.parse(localStorage.getItem(KEY));
      if(!raw || !raw.recipes || !Array.isArray(raw.groceries))return;
      notebook={recipes:{},groceries:[],plans:{}};
      for(const r of recipes){const item=raw.recipes[r.id];if(item)notebook.recipes[r.id]={saved:!!item.saved,liked:!!item.liked,cooked:!!item.cooked};const portions=raw.plans?.[r.id];if([1,2,3,4,6].includes(portions))notebook.plans[r.id]=portions;}
      notebook.groceries=raw.groceries.filter(i=>i&&typeof i.name==='string'&&i.name.length<=100&&Array.isArray(i.sources)).map(i=>({...i,sources:i.sources.filter(id=>recipes.some(r=>r.id===id)),manual:i.manual??(!i.sources.length&&!i.planned)}));
    }catch{storageFailed=true;}
  }
  readLatest();
  async function mutate(change){
    const run=()=>{readLatest();change();persist();refresh();};
    if(navigator.locks)await navigator.locks.request(KEY,run);else run();
  }
  window.addEventListener('storage',event=>{if(event.key===KEY){if(event.newValue===null)notebook={recipes:{},groceries:[],plans:{}};else readLatest();refresh();}});
  const state = id => notebook.recipes[id] || {saved:false,liked:false,cooked:false};
  const el = (tag, text, className) => {const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node};
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(notebook));storageFailed=false;}catch{storageFailed=true;}$('#shopping-storage-status').textContent=$('#storage-status').textContent=storageFailed?'Your browser could not save these changes. They will last only for this visit.':'';}
  function reminder(id){const s=state(id);return [s.liked?'You liked this recipe':'',s.cooked?'You’ve cooked this before':''].filter(Boolean).join(' · ')}
  function refresh(){renderSaved();renderGroceries();renderResults();if($('#recipe-dialog').open){const id=$('#recipe-detail').dataset.recipeId;if(id)decorateDetail(id);}}
  function toggle(id,key){return mutate(()=>{const s=state(id);s[key]=!s[key];if((key==='liked'||key==='cooked')&&s[key])s.saved=true;notebook.recipes[id]=s;});}
  function action(text,handler,pressed){const b=el('button',text,'notebook-button');b.type='button';if(pressed!==undefined)b.setAttribute('aria-pressed',String(pressed));b.onclick=handler;return b;}
  function controls(r){const s=state(r.id),wrap=el('div','','recipe-actions');wrap.append(action(s.saved?'Saved':'Save recipe',()=>toggle(r.id,'saved'),s.saved),action(s.liked?'Liked':'Like',()=>toggle(r.id,'liked'),s.liked),action(s.cooked?'Cooked':'Mark cooked',()=>toggle(r.id,'cooked'),s.cooked));return wrap;}
  async function addGroceries(selected){
    const list=Array.isArray(selected)?selected:[selected], portions=servingCount();
    let outcome;
    await mutate(()=>{outcome=Shopping.plan(notebook,list,portions,recipes,pantry);});
    const message='Shopping plan updated. Shared ingredients counted once.'+(outcome.unknown.length?' Check quantities for '+outcome.unknown.map(Kitchen.label).join(', ')+'.':'');
    $('#grocery-status').textContent=message;const feedback=$('#recipe-grocery-feedback');if(feedback)feedback.textContent=message;
    $('#plan-feedback').textContent=message;
  }
  document.addEventListener('plan-recipes',event=>addGroceries(event.detail.map(id=>recipes.find(r=>r.id===id)).filter(Boolean)));
  function decorateDetail(id){const root=$('#recipe-detail'),r=recipes.find(r=>r.id===id);root.dataset.recipeId=id;root.querySelector('.detail-notebook')?.remove();const block=el('div','','detail-notebook');block.append(controls(r));const note=el('p',reminder(id),'recipe-memory');block.append(note,action('Add missing ingredients to groceries',()=>addGroceries(r)));const feedback=el('p');feedback.id='recipe-grocery-feedback';feedback.setAttribute('role','status');block.append(feedback);root.querySelector('h2').after(block);}
  const originalOpen=openRecipe;openRecipe=function(id){originalOpen(id);decorateDetail(id);};
  const originalResults=renderResults;renderResults=function(){originalResults();document.querySelectorAll('#recipes .recipe-card').forEach(card=>{const r=recipes.find(r=>r.name===card.querySelector('h3').textContent);if(!r)return;const text=reminder(r.id);if(text)card.querySelector('.recipe-body').append(el('p',text,'recipe-memory'));});};
  function renderSaved(){const list=$('#saved-recipes');list.replaceChildren();const filter=$('#library-filter').value;const selected=recipes.filter(r=>{const s=state(r.id);return filter==='liked'?s.liked:filter==='cooked'?s.cooked:s.saved||s.liked||s.cooked;});if(!selected.length){list.append(el('p',filter==='all'?'Your notebook is empty. Open a recipe and save it, like it, or mark it cooked.':'No recipes in this view yet.','empty'));return;}for(const r of selected){const card=el('article','','saved-card');card.append(el('h3',r.name),el('p',reminder(r.id)||'Saved for later','recipe-memory'),controls(r));const links=el('div','','recipe-actions');links.append(action('View recipe',()=>openRecipe(r.id)),action('Add missing groceries',()=>addGroceries(r)),action('Remove from notebook',()=>mutate(()=>{delete notebook.recipes[r.id];})));card.append(links);list.append(card);}}
  function renderGroceries(){renderPlan();const list=$('#grocery-items');list.replaceChildren();$('#clear-bought').hidden=!notebook.groceries.some(i=>i.checked);if(!notebook.groceries.length){list.append(el('li','Your list is empty. Add ingredients from a saved recipe or type an item above.','muted'));return;}notebook.groceries.forEach((item,index)=>{const li=el('li','','grocery-row');const label=el('label');const box=el('input');box.type='checkbox';box.checked=item.checked;box.onchange=()=>{const checked=box.checked;mutate(()=>{const current=notebook.groceries.find(i=>i.name===item.name);if(current)current.checked=checked;});};label.append(box,el('span',item.name,item.checked?'bought':''));const remove=action('×',()=>mutate(()=>{notebook.groceries=notebook.groceries.filter(i=>i.name!==item.name);}));remove.setAttribute('aria-label','Remove '+item.name);li.append(label,remove);if(item.planned)li.append(el('small',amountText(item.planned.quantity,item.planned.unit)+' to buy for your planned meals'));if(item.manual&&item.planned)li.append(el('small','Also on your manual list; check whether you need extra.'));for(const id of item.sources){const r=recipes.find(r=>r.id===id),n=r.ingredients.indexOf(item.name);li.append(el('small',`${r.name}: ${typeof item.sourceAmounts?.[id]==='string'?item.sourceAmounts[id]:(r.amounts[n]||item.name)+' (original 2-serving list)'}`));}list.append(li);});}
  function renderPlan(){
    const list=$('#shopping-plan');list.replaceChildren();
    const planned=recipes.filter(r=>notebook.plans?.[r.id]);
    $('#refresh-plan').hidden=!planned.length;
    for(const r of planned){const row=el('div','','plan-row');row.append(el('span',r.name+' · '+notebook.plans[r.id]+' servings'),action('Remove',()=>mutate(()=>{delete notebook.plans[r.id];Shopping.refresh(notebook,recipes,pantry);})));list.append(row);}
    $('#shopping-count').textContent=notebook.groceries.filter(i=>!i.checked).length+' to buy';
  }
  $('#refresh-plan').onclick=()=>mutate(()=>{const result=Shopping.refresh(notebook,recipes,pantry);$('#grocery-status').textContent=result.unknown.length?'Plan updated. Some fridge quantities still need checking.':'Plan updated from your fridge.';});
  $('#grocery-form').onsubmit=e=>{e.preventDefault();const input=$('#grocery-input'),name=normalize(input.value).slice(0,100);if(!name)return;input.value='';mutate(()=>{const item=notebook.groceries.find(i=>i.name===name);if(item){item.checked=false;item.manual=true;}else notebook.groceries.push({name,checked:false,sources:[],manual:true});$('#grocery-status').textContent='Item added.';});};
  $('#clear-bought').onclick=()=>mutate(()=>{notebook.groceries=notebook.groceries.filter(i=>!i.checked);});
  $('#library-filter').onchange=renderSaved;
  $('#ready').onchange=()=>renderResults();
  function show(view){for(const name of ['discover','saved','shopping']){$('#'+name+'-view').hidden=name!==view;$('#nav-'+name).setAttribute('aria-pressed',String(name===view));}if(view==='saved')renderSaved();if(view==='shopping')renderGroceries();}
  $('#nav-discover').onclick=()=>show('discover');$('#nav-saved').onclick=()=>show('saved');$('#nav-shopping').onclick=()=>show('shopping');
  const today=new Date();$('#shopping-date').value=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
  $('#calendar-form').onsubmit=e=>{e.preventDefault();const pending=notebook.groceries.filter(i=>!i.checked);if(!pending.length){$('#calendar-status').textContent='Add an item to buy before planning your trip.';return;}const lines=pending.map(i=>[Kitchen.label(i.name)+(i.planned?' — '+amountText(i.planned.quantity,i.planned.unit)+' to buy':''),...i.sources.map(id=>{const r=recipes.find(r=>r.id===id);return r.name+': '+(i.sourceAmounts?.[id]||'check recipe quantities');})].join(' — '));try{const url=ShoppingCalendar.url($('#shopping-date').value,$('#shopping-title').value,lines);const opened=window.open(url,'_blank');if(opened)opened.opener=null;$('#calendar-status').textContent=opened?'Review the event in Google Calendar and press Save. Your list stays here.':'Allow pop-ups for this app, then try again.';}catch(error){$('#calendar-status').textContent=error.message;}};
  $('#shopping-storage-status').textContent=$('#storage-status').textContent=storageFailed?'Saved data could not be read. Changes may last only for this visit.':'';
  refresh();
})();
