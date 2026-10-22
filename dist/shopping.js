/* Recipe plans share pantry stock once. Manual items remain independent. */
const Shopping = (() => {
  function plan(notebook, selected, servings, recipes, pantry) {
    notebook.plans ||= {};
    for (const r of selected) notebook.plans[r.id] = servings;
    // Retire the old per-recipe snapshot when this recipe is planned again.
    const selectedIds = selected.map(r => r.id);
    for (const item of notebook.groceries) {
      item.manual ??= !item.sources.length && !item.planned;
      item.sources = item.sources.filter(id => !selectedIds.includes(id));
    }
    return refresh(notebook, recipes, pantry);
  }
  function refresh(notebook, recipes, pantry) {
    const planned = recipes.filter(r => notebook.plans?.[r.id]);
    const requirements = planned.map(r => ({...r, items:r.items.map(i => ({...i,quantity:i.quantity*notebook.plans[r.id]/r.servings})),servings:1}));
    const checks = Kitchen.assess(Kitchen.combine(requirements,1),pantry);
    const previous = new Map(notebook.groceries.map(i => [i.name,{...i}]));
    notebook.groceries = notebook.groceries.filter(i => i.manual || i.sources.length);
    for (const item of notebook.groceries) delete item.planned;
    for (const need of checks.filter(i => ['missing','short'].includes(i.status))) {
      let item = notebook.groceries.find(i => i.name === need.id);
      if (!item) {item={name:need.id,checked:false,sources:[],sourceAmounts:{}};notebook.groceries.push(item);}
      const old=previous.get(need.id);
      item.planned={quantity:need.shortage,unit:need.unit};
      item.checked=!!old?.checked && old.planned?.quantity===need.shortage && old.planned?.unit===need.unit;
    }
    return {unknown:checks.filter(i=>i.status==='unknown').map(i=>i.id),planned};
  }
  return {plan,refresh};
})();
if(typeof module!=='undefined')module.exports=Shopping;
