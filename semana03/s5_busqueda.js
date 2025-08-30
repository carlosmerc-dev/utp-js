document.getElementById('btnFind').addEventListener('click',()=>{
  const t = document.getElementById('txt').value;
  const q = document.getElementById('q').value;
  const a = t.indexOf(q);
  const b = t.lastIndexOf(q);
  const c = t.includes(q);
  const r = `indexOf("${q}")=${a} | lastIndexOf("${q}")=${b} | includes("${q}")=${c}`;
  log(r,'ok'); document.getElementById('out').textContent = r;
});
