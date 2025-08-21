
function evalExpr(code){
  try{ return Function('return ('+code+')')(); }catch(e){ return e.toString(); }
}
document.getElementById('btnLogicEval').addEventListener('click', ()=>{
  const A = document.getElementById('vA').value;
  const B = document.getElementById('vB').value;
  const and = evalExpr(`${A} && ${B}`);
  const or  = evalExpr(`${A} || ${B}`);
  const msg = `A=${A}, B=${B} → A&&B = ${and} | A||B = ${or}`;
  document.getElementById('lgOut').textContent = msg;
  log('Lógicos → '+msg,'ok');
});
let base = Number(document.getElementById('asBase').value);
document.getElementById('btnAs').addEventListener('click', ()=>{
  const op = document.getElementById('asOp').value;
  const v  = Number(document.getElementById('asVal').value);
  let before = base;
  switch(op){ case '+=': base+=v; break; case '-=': base-=v; break; case '*=': base*=v; break; case '/=': base/=v; break; case '%=': base%=v; break; case '**=': base**=v; break; }
  document.getElementById('asOut').textContent = `Antes: ${before} | ${op} ${v} → Ahora: ${base}`;
  log('Asignación → '+document.getElementById('asOut').textContent,'warn');
});
document.getElementById('btnReset').addEventListener('click', ()=>{
  base = Number(document.getElementById('asBase').value);
  document.getElementById('asOut').textContent = 'Reiniciado a ' + base;
  log('Reset asignación compuesta','ok');
});
