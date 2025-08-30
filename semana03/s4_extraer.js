document.getElementById('btnEx').addEventListener('click',()=>{
  const t = document.getElementById('t').value;
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  const r = [
    `charAt(0) → ${t.charAt(0)}`,
    `slice(${a},${b}) → ${t.slice(a,b)}`,
    `substring(${a},${b}) → ${t.substring(a,b)}`,
    `slice(-3) → ${t.slice(-3)}`
  ].join(' | ');
  log(r,'ok');
  document.getElementById('out').textContent = r;
});
