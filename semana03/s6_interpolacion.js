document.getElementById('btnTpl').addEventListener('click',()=>{
  const nombre = document.getElementById('nombre').value;
  const curso  = document.getElementById('curso').value;
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  const prom = ((n1+n2)/2).toFixed(2);
  const msg = `Hola ${nombre},
Estás matriculada en ${curso}.
Tu promedio parcial es ${prom} (${n1} y ${n2}).`;
  log(msg,'ok'); document.getElementById('out').textContent = msg;
});