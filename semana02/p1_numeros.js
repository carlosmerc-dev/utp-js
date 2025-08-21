
function approxEqual(a,b){ return Math.abs(a-b) < Number.EPSILON * 10; }
document.getElementById('btnParse').addEventListener('click', ()=>{
  const raw = document.getElementById('numRaw').value;
  let val;
  try{ val = Function('return ('+raw+')')(); }catch{ val = Number(raw); }
  const info = [
    `Entrada: ${raw}`,
    `Number(): ${Number(val)}`,
    `typeof: ${typeof val}`,
    `isNaN: ${Number.isNaN(val)}`,
    `isFinite: ${Number.isFinite(val)}`,
    `toFixed(3): ${Number.isNaN(Number(val)) ? 'N/A' : Number(val).toFixed(3)}`
  ].join(' | ');
  document.getElementById('numInfo').textContent = info;
  log('Análisis → '+info, Number.isNaN(Number(val))?'warn':'ok');
});
document.getElementById('btnBig').addEventListener('click', ()=>{
  const raw = document.getElementById('bigRaw').value.trim();
  const num = Number(raw);
  const a = num + 1;
  const b = num + 2;
  const big = BigInt(raw) + 2n;
  const msg = `Number(${raw})+1=${a}, +2=${b} | ¿a===b? ${a===b} | BigInt(${raw})+2n=${big}n`;
  document.getElementById('bigInfo').textContent = msg;
  log(msg, 'ok');
});
