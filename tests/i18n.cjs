const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
function load(saved,blocked=false){
 const writes=[],events=[],select={value:'',addEventListener(){}};
 const label={dataset:{i18n:'Shopping list'},textContent:''};
 const document={documentElement:{lang:''},querySelectorAll:q=>q==='[data-i18n]'?[label]:[],querySelector:()=>select,dispatchEvent:e=>events.push(e.type)};
 const context={document,Event:class{constructor(type){this.type=type;}},localStorage:{getItem(){if(blocked)throw Error();return saved;},setItem(k,v){if(blocked)throw Error();writes.push([k,v]);}},module:{exports:{}}};
 vm.runInNewContext(fs.readFileSync('dist/i18n.js','utf8'),context);
 return {api:context.module.exports,document,label,select,writes,events};
}
test('language persists, changes document semantics and restores English without changing recipe content',()=>{
 const x=load('fil');assert.equal(x.label.textContent,'Listahan ng bibilhin');assert.equal(x.document.documentElement.lang,'fil');
 assert.equal(x.api.t('29 recipes · 2 servings'),'29 recipe · Para sa 2 tao');
 assert.equal(x.api.t('Show more recipes (21 remaining)'),'Ipakita pa (21 natitira)');
 assert.equal(x.api.t('Simmer for 20 minutes at 74°C.'),'Simmer for 20 minutes at 74°C.');
 x.api.setLanguage('en');assert.equal(x.label.textContent,'Shopping list');assert.equal(x.document.documentElement.lang,'en');assert.equal(x.select.value,'en');assert.deepEqual(x.writes,[['fridge-fork-language','en']]);assert.deepEqual(x.events,['languagechange']);
});
test('unsupported or blocked stored language falls back safely; selection still works for this visit',()=>{
 assert.equal(load('unsupported').api.language,'en');
 const x=load(null,true);assert.equal(x.api.setLanguage('fil'),false);assert.equal(x.api.language,'fil');assert.equal(x.label.textContent,'Listahan ng bibilhin');
});
test('translated cuisine options retain canonical matching values and translation is cached offline',()=>{
 const html=fs.readFileSync('dist/index.html','utf8');
 assert.match(html,/<option value="International" data-i18n="International">/);
 assert.match(html,/<option value="Filipino" selected>/);
 assert.match(fs.readFileSync('dist/sw.js','utf8'),/i18n\.js\?v=11/);
});
