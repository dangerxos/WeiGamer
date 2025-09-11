
// Common app utilities for Weigamer
const CART_KEY = 'weigamer_cart';
const PRODUCTS_KEY = 'weigamer_products';
const USERS_KEY = 'weigamer_users';
const ROLE_KEY = 'weigamer_role';

function $(q, root=document){ return root.querySelector(q); }
function $all(q, root=document){ return [...root.querySelectorAll(q)]; }

function getCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return []} }
function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartBadge(); }
function addToCart(id, qty=1){
  const cart = getCart();
  const idx = cart.findIndex(i=>i.id===id);
  if(idx>-1){ cart[idx].qty += qty; }
  else { cart.push({id, qty}); }
  setCart(cart);
  toast('Producto añadido al carrito');
}
function removeFromCart(id){
  setCart(getCart().filter(i=>i.id!==id));
}
function updateQty(id, qty){
  const c = getCart().map(i=> i.id===id ? {...i, qty: Math.max(1, qty)} : i);
  setCart(c);
}
function getProducts(){ return JSON.parse(localStorage.getItem(PRODUCTS_KEY))||seedProducts(); }
function setProducts(p){ localStorage.setItem(PRODUCTS_KEY, JSON.stringify(p)); }


function getUsers(){ return JSON.parse(localStorage.getItem(USERS_KEY))||seedUsers(); }
function setUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function seedUsers(){
  const u = [
    {run:'19011022K', nombre:'Admin', apellidos:'Weigamer', correo:'admin@gmail.cl', tipo:'Administrador', region:'RM', comuna:'Santiago', direccion:'Av. Siempre Viva 123'},
    {run:'20456789-0', nombre:'Vendedor', apellidos:'Local', correo:'seller@gmail.com', tipo:'Vendedor', region:'RM', comuna:'Providencia', direccion:'Calle Falsa 742'}
  ];
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
  return u;
}

function productById(id){ return getProducts().find(p=>p.id===id); }
function cartTotal(){
  const cart = getCart();
  const products = getProducts();
  return cart.reduce((acc, item)=>{
    const p = products.find(pp=>pp.id===item.id);
    if(!p) return acc;
    return acc + p.price * item.qty;
  },0);
}

function mountNav(){
  const nav = document.createElement('div');
  nav.className = 'nav';
  nav.innerHTML = `
    <div class="container nav-inner">
      <a class="logo" href="index.html">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB4Mj0iMSIgeTE9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzExMTgyNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxZjI5MzciLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIKICAgICAgICBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2U1ZTdlYiI+VzwvdGV4dD4KPC9zdmc+" alt="Weigamer"/>
        <span>Weigamer</span>
      </a>
      <div class="menu">
        <a href="products.html">Productos</a>
        <a href="about.html">Nosotros</a>
        <a href="contact.html">Contacto</a>
        <a href="login.html">Iniciar sesión</a>
        <a href="register.html">Registrarse</a>
        <a class="header-cta" href="carrito.html">🛒 <span class="cart-badge" id="cart-badge">0</span></a>
      </div>
    </div>`;
  document.body.prepend(nav);
  updateCartBadge();
}
function mountFooter(){
  const f = document.createElement('footer');
  f.className = 'footer';
  f.innerHTML = '<div class="container">© 2025 Weigamer • Consolas retro y actuales • Hecho para el ramo DSY1104</div>';
  document.body.appendChild(f);
}
function updateCartBadge(){
  const c = getCart();
  const count = c.reduce((a,i)=>a+i.qty,0);
  const el = document.getElementById('cart-badge');
  if(el) el.textContent = String(count);
}
function toast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed'; t.style.right='1rem'; t.style.bottom='1rem';
  t.style.background='#10b981'; t.style.color='#062015'; t.style.padding='.6rem 1rem'; t.style.borderRadius='.75rem';
  t.style.boxShadow='0 8px 24px rgba(0,0,0,.35)';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 1600);
}

document.addEventListener('DOMContentLoaded', ()=>{
  mountNav(); mountFooter();
});
