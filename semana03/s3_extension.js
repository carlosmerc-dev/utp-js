document.getElementById('btnExt').addEventListener('click',()=>{
  const v = document.getElementById('txt').value;
  const out = [
    `length=${v.length}`,
    `upper=${v.toUpperCase()}`,
    `lower=${v.toLowerCase()}`,
    `trim="${v.trim()}"`,
    `trimStart="${v.trimStart()}"`,
    `trimEnd="${v.trimEnd()}"`,
    `replace(/Universidad/gi,'UTP')="${v.replace(/Universidad/gi,'UTP')}"`
  ].join(' | ');
  log(out,'ok');
  document.getElementById('out').textContent = out;
});