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

// 2) document.write() / writeln() (en nueva ventana)
document.getElementById('btnWrite').addEventListener('click', () => {
  const w = window.open('', '_blank', 'width=520,height=420');
  w.document.open();
  w.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>document.write demo</title></head><body>');
  w.document.writeln('<h1 style="font-family:system-ui">Documento generado con <code>document.write</code></h1>');
  w.document.writeln('<p>Hora: ' + new Date().toLocaleTimeString() + '</p>');
  w.document.writeln('<p>Este contenido fue escrito desde la página principal usando <b>write</b> y <b>writeln</b>.</p>');
  w.document.writeln('<button onclick="window.close()">Cerrar</button>');
  w.document.writeln('</body></html>');
  w.document.close();
  log('Se abrió nueva ventana y se escribió contenido con write/writeln', 'ok');
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
