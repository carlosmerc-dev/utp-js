const $log = document.getElementById('log');
function log(msg, cls='') {
  const el = document.createElement('div');
  el.className = 'item ' + cls;
  const time = new Date().toLocaleTimeString();
  el.textContent = '[' + time + '] ' + msg;
  $log.appendChild(el);
  $log.scrollTop = $log.scrollHeight;
  console.log(msg);
}
document.getElementById('btnClear').addEventListener('click', () => { $log.innerHTML = ''; });

// 1) click
const btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', () => {
  const current = getComputedStyle(btnClick).backgroundColor;
  btnClick.style.background = current === 'rgb(31, 41, 55)' ? '#134e4a' : '#1f2937';
  log('onclick: se hizo clic en el botón', 'ok');
});

// 2) change
document.getElementById('selColor').addEventListener('change', (e) => {
  log('onchange: opción -> ' + (e.target.value || '(sin selección)'), 'ok');
});

// 3) focus / blur
const txtFocus = document.getElementById('txtFocus');
txtFocus.addEventListener('focus', () => {
  txtFocus.style.outline = '2px solid #22d3ee';
  log('onfocus: input enfocado', 'ok');
});
txtFocus.addEventListener('blur', () => {
  txtFocus.style.outline = 'none';
  log('onblur: input desenfocado', 'warn');
});

// 4) teclado: keydown / keyup
const txtTeclas = document.getElementById('txtTeclas');
txtTeclas.addEventListener('keydown', (e) => {
  log('keydown: "' + e.key + '" (code: ' + e.code + ')', 'warn');
});
txtTeclas.addEventListener('keyup', (e) => {
  log('keyup: "' + e.key + '" (code: ' + e.code + ')', 'ok');
});

// 5) mouseover / mouseout
const boxHover = document.getElementById('boxHover');
boxHover.addEventListener('mouseover', () => {
  boxHover.style.background = 'rgba(34,211,238,.15)';
  log('mouseover: el puntero entró al recuadro', 'ok');
});
boxHover.addEventListener('mouseout', () => {
  boxHover.style.background = 'transparent';
  log('mouseout: el puntero salió del recuadro', 'warn');
});

// 6) select (selección de texto)
document.getElementById('txtSelect').addEventListener('select', (e) => {
  const el = e.target;
  const selected = el.value.substring(el.selectionStart, el.selectionEnd);
  log('onselect: "' + selected + '"', 'ok');
});

// 7) submit (validación y preventDefault)
document.getElementById('frmDemo').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  if (!nombre) {
    log('onsubmit: nombre vacío – se cancela el envío', 'err');
    alert('Por favor, escribe tu nombre.');
    return;
  }
  log('onsubmit: formulario válido. Nombre -> ' + nombre, 'ok');
  alert('Formulario validado. ¡Hola, ' + nombre + '!');
});

// 8) load
window.addEventListener('load', () => {
  log('onload: documento cargado y listo', 'ok');
});
