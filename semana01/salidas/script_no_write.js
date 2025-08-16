// Utilidad de logging para el panel derecho
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

// 1) document.getElementById()
const target = document.getElementById('target');
document.getElementById('btnChange').addEventListener('click', () => {
  target.textContent = 'Texto cambiado con getElementById()';
  target.style.background = 'rgba(16,185,129,.18)';
  target.style.borderColor = 'rgba(16,185,129,.5)';
  log('document.getElementById("target").textContent actualizado', 'ok');
});
document.getElementById('btnReset').addEventListener('click', () => {
  target.textContent = 'Soy #target';
  target.style.background = 'rgba(34,211,238,.15)';
  target.style.borderColor = 'rgba(34,211,238,.35)';
  log('Restaurado el contenido de #target', 'warn');
});

// 2) Ventana nueva SIN document.write/writeln
document.getElementById('btnWrite').addEventListener('click', () => {
  const w = window.open('', '_blank', 'width=520,height=420');
  if (!w) {
    alert('El bloqueador de ventanas emergentes impidió abrir la demostración.');
    log('Popup bloqueado por el navegador', 'err');
    return;
  }

  // Construimos el DOM usando métodos seguras
  const doc = w.document;
  doc.title = 'Demo: Construcción de DOM';
  const body = doc.body;

  const h1 = doc.createElement('h1');
  h1.textContent = 'Documento generado sin document.write()';
  h1.style.fontFamily = 'system-ui';
  body.appendChild(h1);

  const p1 = doc.createElement('p');
  p1.textContent = 'Hora: ' + new Date().toLocaleTimeString();
  body.appendChild(p1);

  const p2 = doc.createElement('p');
  p2.innerHTML = 'Este contenido fue creado con <b>createElement</b>, <b>appendChild</b> e <b>innerHTML</b>.';
  body.appendChild(p2);

  const btnClose = doc.createElement('button');
  btnClose.textContent = 'Cerrar';
  btnClose.addEventListener('click', () => w.close());
  body.appendChild(btnClose);

  log('Se abrió nueva ventana y se creó contenido con APIs del DOM (sin document.write)', 'ok');
});

// 3) alert()
document.getElementById('btnAlert').addEventListener('click', () => {
  alert('¡Hola! Esto es un alert.');
  log('Se mostró alert()', 'ok');
});

// 4) confirm()
document.getElementById('btnConfirm').addEventListener('click', () => {
  const resp = confirm('¿Confirmas tu asistencia?');
  log('confirm() retornó -> ' + resp, resp ? 'ok' : 'warn');
  if (!resp) console.warn('Usuario canceló en confirm()');
});

// 5) prompt()
document.getElementById('btnPrompt').addEventListener('click', () => {
  const nombre = prompt('¿Cuál es tu nombre?');
  const $out = document.getElementById('promptResult');
  if (nombre === null) {
    $out.textContent = 'Entrada cancelada (null)';
    log('prompt() -> null (cancelado)', 'warn');
  } else {
    $out.textContent = 'Hola, ' + (nombre || '(vacío)');
    log('prompt() -> "' + nombre + '"', 'ok');
  }
});

// 6) console.*
document.getElementById('btnLog').addEventListener('click', () => {
  console.log('console.log: mensaje informativo');
  log('console.log llamado (ver consola)', 'ok');
});
document.getElementById('btnWarn').addEventListener('click', () => {
  console.warn('console.warn: atención, posible problema');
  log('console.warn llamado (ver consola)', 'warn');
});
document.getElementById('btnError').addEventListener('click', () => {
  console.error('console.error: ocurrió un error controlado');
  log('console.error llamado (ver consola)', 'err');
});
document.getElementById('btnInfo').addEventListener('click', () => {
  console.info('console.info: dato informativo');
  log('console.info llamado (ver consola)', 'ok');
});
