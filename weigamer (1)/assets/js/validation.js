
// Validations per assignment rules
const ALLOWED_DOMAINS = ['duoc.cl','profesor.duoc.cl','gmail.com'];

function emailDomainOk(email){
  if(!email) return false;
  const re = /^[^\s@]+@([^\s@]+)$/;
  const m = email.match(re);
  if(!m) return false;
  const domain = m[1].toLowerCase();
  return ALLOWED_DOMAINS.some(d => domain.endsWith(d));
}
function lenBetween(str, min, max){ return typeof str === 'string' && str.length >= min && str.length <= max; }
function required(v){ return v != null && String(v).trim().length > 0; }
function isInt(v){ return /^-?\d+$/.test(String(v)); }
function isDecimal(v){ return /^\d+(?:[\.,]\d+)?$/.test(String(v)); }

// RUT/RUN validation (Chile) - expects formats without dots nor hyphen, e.g., 19011022K
function validarRUN(runRaw){
  if(!runRaw) return false;
  const run = runRaw.replace(/\.|-/g,'').toUpperCase();
  if(run.length < 7 || run.length > 9) return false;
  const cuerpo = run.slice(0, -1);
  const dv = run.slice(-1);
  if(!/^\d+$/.test(cuerpo)) return false;
  let suma = 0, multiplo = 2;
  for(let i=cuerpo.length-1; i>=0; i--){
    suma += parseInt(cuerpo[i],10) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }
  const res = 11 - (suma % 11);
  let dvCalc = (res === 11) ? '0' : (res === 10 ? 'K' : String(res));
  return dv === dvCalc;
}

function showError(el, msg){
  let err = el.parentElement.querySelector('.error');
  if(!err){ err = document.createElement('div'); err.className='error'; el.parentElement.appendChild(err); }
  err.textContent = msg || '';
}

function clearErrors(form){ form.querySelectorAll('.error').forEach(e=>e.remove()); }

// Attach generic form handlers by data-validate attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      clearErrors(form);
      let ok = true;

      form.querySelectorAll('[data-rule]').forEach(input => {
        const rules = input.getAttribute('data-rule').split('|');
        for(const r of rules){
          const [rule, param] = r.split(':');
          const val = input.value.trim();
          if(rule==='required' && !required(val)){ showError(input, 'Este campo es requerido'); ok=false; break; }
          if(rule==='email-domain' && !emailDomainOk(val)){ showError(input, 'Dominio no permitido'); ok=false; break; }
          if(rule==='len' ){
            const [a,b] = param.split(',').map(Number);
            if(!lenBetween(val, a,b)){ showError(input, `Debe tener entre ${a} y ${b} caracteres`); ok=false; break; }
          }
          if(rule==='int' && !isInt(val)){ showError(input, 'Debe ser un número entero'); ok=false; break; }
          if(rule==='decimal' && !isDecimal(val)){ showError(input, 'Debe ser un número'); ok=false; break; }
          if(rule==='min'){
            const m = Number(param); if(Number(val) < m){ showError(input, `Debe ser ≥ ${m}`); ok=false; break; }
          }
          if(rule==='maxlen'){
            const m = Number(param); if(val.length > m){ showError(input, `Máximo ${m} caracteres`); ok=false; break; }
          }
          if(rule==='run' && !validarRUN(val)){ showError(input, 'RUN inválido (sin puntos ni guion)'); ok=false; break; }
        }
      });

      if(!ok){ e.preventDefault(); }
      else{
        // For demo, persist forms where needed
        if(form.id==='login-form'){
          localStorage.setItem('weigamer_last_email', form.email.value);
          // simple session role simulation
          localStorage.setItem('weigamer_role', 'Cliente');
        }
        if(form.id==='contact-form'){
          const box = JSON.parse(localStorage.getItem('weigamer_messages')||'[]');
          box.push({nombre: form.nombre.value, correo: form.correo.value, comentario: form.comentario.value, at: new Date().toISOString()});
          localStorage.setItem('weigamer_messages', JSON.stringify(box));
          alert('Mensaje enviado (simulado).');
        }
      }
    });
  });
});
