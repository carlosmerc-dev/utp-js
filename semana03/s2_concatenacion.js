document.getElementById('btnConcat').addEventListener('click',()=>{
  const n = document.getElementById('nombre').value.trim();
  const a = document.getElementById('apellido').value.trim();
  const plus = n + ' ' + a;
  let m = 'Hola'; m += ' ' + n;
  const tl = `Bienvenida ${n} ${a} a la UTP`;
  log(`+  → ${plus}`,'ok');
  log(`+= → ${m}`,'ok');
  log(`TL → ${tl}`,'ok');
  document.getElementById('out').textContent = `${plus} | ${m} | ${tl}`;
});
