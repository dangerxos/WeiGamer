document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('home-products');
  const products = getProducts();

  wrap.innerHTML = products.slice(0, 6).map(p => `
    <article class="card product">
      <img src="${p.img}" alt="${p.name}"/>
      <h3>${p.name}</h3>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="badge">${p.category}</span>
        <b>${p.price.toFixed(2)} USD</b>
      </div>
      <div class="actions">
        <button class="btn" data-add="${p.id}">Añadir</button>
        <a class="btn secondary" href="product.html?id=${encodeURIComponent(p.id)}">Ver</a>
      </div>
    </article>
  `).join('');

  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add]');
    if (btn) addToCart(btn.getAttribute('data-add'), 1);
  });
});
