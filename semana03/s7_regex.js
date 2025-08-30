const $ = (s) => document.querySelector(s);

function buildRegex() {
  const src   = $('#patron').value;
  const flags = $('#flags').value;
  try {
    return new RegExp(src, flags);
  } catch (e) {
    log('❌ Error de patrón: ' + e.message, 'err');
    throw e;
  }
}

const getText = () => $('#texto').value;

const actions = {
  test(){
    const re = buildRegex(); const t = getText();
    log(`test → ${re.test(t)}`, 'ok');
  },
  exec(){
    const re = buildRegex(); const t = getText();
    const r = re.exec(t);
    log('exec → ' + (r ? JSON.stringify({0:r[0], index:r.index, groups:r.groups||null}, null, 2) : 'null'));
  },
  match(){
    const re = buildRegex(); const t = getText();
    log('match → ' + JSON.stringify(t.match(re), null, 2));
  },
  replace(){
    const re = buildRegex(); const t = getText();
    log('replace → ' + t.replace(re, '⟪X⟫'));
  },
  search(){
    const re = buildRegex(); const t = getText();
    log('search → ' + t.search(re));
  },
  split(){
    const re = buildRegex(); const t = getText();
    log('split → ' + JSON.stringify(t.split(re)));
  }
};

$('#btnProbar').addEventListener('click', ()=>{
  const re = buildRegex(); const t = getText();
  log(`RegExp → /${re.source}/${re.flags}`);
  log(`test → ${re.test(t)}`);
  const r = re.exec(t);
  log('exec → ' + (r ? JSON.stringify({0:r[0], index:r.index, groups:r.groups||null}, null, 2) : 'null'));
});

document.querySelectorAll('[data-action]').forEach(b=>{
  b.addEventListener('click', ()=> actions[b.dataset.action]());
});

// Snippets corregidos: data-src / data-flags
document.querySelectorAll('.bin[data-src]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    $('#patron').value = btn.dataset.src;
    $('#flags').value  = btn.dataset.flags || '';
    log(`Snippet → /${btn.dataset.src}/${btn.dataset.flags||''}`, 'ok');
  });
});

// Patrones PRO
const PRO = {
  url: {
    label: 'URL (con grupos con nombre)',
    re: /^(?<scheme>https?|ftp):\/\/(?:(?<user>[^\s:@\/]+)(?::(?<pass>[^\s:@\/]*))?@)?(?<host>(?:\[[A-Fa-f0-9:.]+\])|(?:(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,})|(?:(?:\d{1,3}\.){3}\d{1,3}))(?::(?<port>\d{2,5}))?(?<path>\/[^\s?#]*)?(?:\?(?<query>[^\s#]*))?(?:#(?<fragment>[^\s]*))?$/,
    flags: ''
  },
  iso: {
    label: 'Fecha/Hora ISO-8601 (con zona)',
    re: /^(?<date>\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))[T ](?<time>([01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,6})?)?)(?<tz>Z|[+-](?:[01]\d|2[0-3]):?[0-5]\d)$/,
    flags: ''
  },
  pwd: {
    label: 'Password fuerte (12–128; 1 min, 1 may, 1 dígito, 1 símbolo)',
    re: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,128}$/,
    flags: ''
  }
};

document.querySelectorAll('[data-pro]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const k = btn.dataset.pro;
    const { label, re, flags } = PRO[k];
    $('#patron').value = re.source;
    $('#flags').value  = flags;
    $('#proOut').textContent = `// ${label}\n/${re.source}/${flags}`;
    log('Patrón PRO cargado → ' + label, 'ok');
  });
});

log('🎯 Demo lista. Ingresa texto, patrón y flags (g, i, m). Usa Snippets o Patrones PRO.', 'ok');
