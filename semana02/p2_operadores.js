
document.getElementById('btnCalc').addEventListener('click', ()=>{
  const a = Number(document.getElementById('opA').value);
  const b = Number(document.getElementById('opB').value);
  const op = document.getElementById('opSelect').value;
  let r;
  if(op==='+') r=a+b;
  else if(op==='-') r=a-b;
  else if(op==='*') r=a*b;
  else if(op==='/') r=a/b;
  else if(op==='%') r=a%b;
  else r=a**b;
  const msg = `a ${op} b = ${r}`;
  document.getElementById('opOut').textContent = msg;
  log('Calculadora → '+msg,'ok');
});
let x = Number(document.getElementById('idVal').value);
function refresh(){ document.getElementById('idVal').value=x; }
document.getElementById('postInc').addEventListener('click', ()=>{ const y=x++; document.getElementById('idOut').textContent=`y=x++ → y=${y}, x=${x}`; log(`postInc: y=${y}, x=${x}`,'warn'); refresh(); });
document.getElementById('preInc').addEventListener('click',  ()=>{ const y=++x; document.getElementById('idOut').textContent=`y=++x → y=${y}, x=${x}`; log(`preInc: y=${y}, x=${x}`,'ok'); refresh(); });
document.getElementById('postDec').addEventListener('click', ()=>{ const y=x--; document.getElementById('idOut').textContent=`y=x-- → y=${y}, x=${x}`; log(`postDec: y=${y}, x=${x}`,'warn'); refresh(); });
document.getElementById('preDec').addEventListener('click',  ()=>{ const y=--x; document.getElementById('idOut').textContent=`y=--x → y=${y}, x=${x}`; log(`preDec: y=${y}, x=${x}`,'ok'); refresh(); });
