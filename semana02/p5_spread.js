
function toArray(str){ return str.split(',').map(s=>s.trim()).filter(s=>s.length).map(v=>Number(v)); }
document.getElementById('btnArrCombine').addEventListener('click', ()=>{
  const a = toArray(document.getElementById('arrA').value);
  const b = toArray(document.getElementById('arrB').value);
  const c = [...a, ...b];
  document.getElementById('arrOut').textContent = `a=[${a}] | b=[${b}] | c=[...a,...b] → [${c}]`;
  log('Spread arrays → '+document.getElementById('arrOut').textContent,'ok');
});
document.getElementById('btnArrClone').addEventListener('click', ()=>{
  const a = toArray(document.getElementById('arrA').value);
  const clone = [...a];
  document.getElementById('arrOut').textContent = `clone=[...a] → [${clone}] (modificar clone no afecta a a)`;
  log('Clone array → '+document.getElementById('arrOut').textContent,'warn');
});
document.getElementById('btnObjMerge').addEventListener('click', ()=>{
  const a = JSON.parse(document.getElementById('objA').value);
  const b = JSON.parse(document.getElementById('objB').value);
  const res = { ...a, ...b };
  document.getElementById('objOut').textContent = `A=${JSON.stringify(a)} | B=${JSON.stringify(b)} | {...A,...B} → ${JSON.stringify(res)}`;
  log('Merge objetos → '+document.getElementById('objOut').textContent,'ok');
});
document.getElementById('btnObjClone').addEventListener('click', ()=>{
  const a = JSON.parse(document.getElementById('objA').value);
  const clone = { ...a };
  document.getElementById('objOut').textContent = `clone={...A} → ${JSON.stringify(clone)} (shallow)`;
  log('Clone objeto → '+document.getElementById('objOut').textContent,'warn');
});
