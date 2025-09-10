
// Chile regions and a few communes (sample)
const REGIONES = {
  'Arica y Parinacota': ['Arica','Camarones','Putre'],
  'Tarapacá': ['Iquique','Alto Hospicio','Pozo Almonte'],
  'Antofagasta': ['Antofagasta','Calama','Mejillones'],
  'Atacama': ['Copiapó','Caldera','Vallenar'],
  'Coquimbo': ['La Serena','Coquimbo','Ovalle'],
  'Valparaíso': ['Valparaíso','Viña del Mar','Quilpué'],
  'Metropolitana': ['Santiago','Providencia','Las Condes','Maipú'],
  "O'Higgins": ['Rancagua','Machalí','San Fernando'],
  'Maule': ['Talca','Curicó','Linares'],
  'Ñuble': ['Chillán','Chillán Viejo','San Carlos'],
  'Biobío': ['Concepción','Talcahuano','Los Ángeles'],
  'La Araucanía': ['Temuco','Padre Las Casas','Angol'],
  'Los Ríos': ['Valdivia','La Unión','Río Bueno'],
  'Los Lagos': ['Puerto Montt','Osorno','Castro'],
  'Aysén': ['Coyhaique','Aysén','Chile Chico'],
  'Magallanes': ['Punta Arenas','Puerto Natales','Porvenir']
};

function populateRegiones(selectRegion, selectComuna, presetRegion, presetComuna){
  selectRegion.innerHTML = '<option value="">Seleccione región</option>' + Object.keys(REGIONES).map(r=>`<option value="${r}">${r}</option>`).join('');
  if(presetRegion){ selectRegion.value = presetRegion; }
  const loadComunas = ()=>{
    const r = selectRegion.value;
    const comunas = REGIONES[r] || [];
    selectComuna.innerHTML = '<option value="">Seleccione comuna</option>' + comunas.map(c=>`<option value="${c}">${c}</option>`).join('');
    if(presetComuna){ selectComuna.value = presetComuna; }
  };
  selectRegion.addEventListener('change', loadComunas);
  loadComunas();
}
