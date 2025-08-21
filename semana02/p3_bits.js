
function to32(n){ return (n>>>0).toString(2).padStart(32,'0'); }
document.getElementById('btnBit').addEventListener('click', ()=>{
  const x = Number(document.getElementById('bitX').value);
  const op = document.getElementById('bitOp').value;
  const n = Number(document.getElementById('bitN').value);
  let r;
  if(op==='<<') r = x << n;
  else if(op==='>>') r = x >> n;
  else r = x >>> n;
  const msg = `${x} ${op} ${n} = ${r}`;
  document.getElementById('bitOut').textContent = msg;
  document.getElementById('binIn').textContent = to32(x);
  document.getElementById('binOut').textContent = to32(r);
  log('Bits → '+msg,'ok');
});
