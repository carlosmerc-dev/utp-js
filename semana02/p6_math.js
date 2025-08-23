
document.getElementById('btnRound').addEventListener('click', ()=>{
  const x = Number(document.getElementById('mx').value);
  const msg = `floor=${Math.floor(x)}, ceil=${Math.ceil(x)}, round=${Math.round(x)}`;
  document.getElementById('mOut1').textContent = msg;
  log('Round → '+msg,'ok');
});
function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }
document.getElementById('btnRand').addEventListener('click', ()=>{
  const min = Number(document.getElementById('rMin').value);
  const max = Number(document.getElementById('rMax').value);
  const val = randInt(min,max);
  const msg = `random [${min},${max}] → ${val}`;
  document.getElementById('mOut2').textContent = msg;
  log('Random → '+msg,'ok');
});
document.getElementById('btnTrig').addEventListener('click', ()=>{
  const d = Number(document.getElementById('deg').value);
  const rad = d * Math.PI / 180;
  const msg = `sin=${Math.sin(rad).toFixed(4)}, cos=${Math.cos(rad).toFixed(4)}, tan=${Math.tan(rad).toFixed(4)} (rad=${rad.toFixed(4)})`;
  document.getElementById('mOut3').textContent = msg;
  log('Trig → '+msg,'ok');
});
document.getElementById('btnMinMax').addEventListener('click', ()=>{
  const arr = document.getElementById('mList').value.split(',').map(s=>Number(s.trim())).filter(n=>!Number.isNaN(n));
  const mn = Math.min(...arr), mx = Math.max(...arr);
  const sumsq = arr.reduce((a,c)=>a + c*c, 0);
  const msg = `min=${mn}, max=${mx}, sqrt(sum^2)=${Math.sqrt(sumsq).toFixed(3)}`;
  document.getElementById('mOut4').textContent = msg;
  log('Min/Max → '+msg,'ok');
});
