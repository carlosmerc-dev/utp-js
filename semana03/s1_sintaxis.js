document.getElementById('btnProbar').addEventListener('click', () => {
  const tipo = document.getElementById('tipo').value;
  const txt  = document.getElementById('texto').value;
  let codigo;
  if(tipo==='simples') codigo = "let s = '" + txt.replace(/'/g,"\\'") + "';";
  else if(tipo==='dobles') codigo = 'let s = "' + txt.replace(/"/g,'\\"') + '";';
  else codigo = 'let s = `'+ txt +'`; // admite ${expresiones} y multilínea';
  log(codigo,'ok');
});
