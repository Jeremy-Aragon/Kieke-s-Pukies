/* ---------------- ICONS ---------------- */
const icons = {
  fish: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 50c14-14 46-14 60 0-14 14-46 14-60 0z" stroke="var(--soil)" stroke-width="2"/><path d="M78 50l14-11v22L78 50z" stroke="var(--soil)" stroke-width="2" stroke-linejoin="round"/><circle cx="34" cy="46" r="2.4" fill="var(--soil)"/><path d="M28 55c6 4 14 5 20 5" stroke="var(--clay)" stroke-width="1.6"/></svg>`,
  shellfish: `<svg viewBox="0 0 100 100" fill="none"><path d="M24 62c0-20 12-34 26-34s26 14 26 34" stroke="var(--soil)" stroke-width="2"/><path d="M24 62h52M30 62c4-16 4-24 0-34M70 62c-4-16-4-24 0-34" stroke="var(--soil)" stroke-width="1.6"/><path d="M50 28V16M44 20l-4-8M56 20l4-8" stroke="var(--clay)" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  steak: `<svg viewBox="0 0 100 100" fill="none"><path d="M22 44c6-14 22-20 40-16 16 4 22 16 16 30-6 12-24 18-40 12-14-6-20-16-16-26z" stroke="var(--soil)" stroke-width="2"/><path d="M34 40c8 6 8 18 0 26M50 34c6 8 6 24-2 32M64 34c6 6 8 20 2 30" stroke="var(--clay)" stroke-width="1.3"/></svg>`,
  mince: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="36" width="60" height="36" rx="6" stroke="var(--soil)" stroke-width="2"/><path d="M20 46h60M20 62h60" stroke="var(--line)" stroke-width="1.4"/><circle cx="34" cy="54" r="2.6" fill="var(--clay)"/><circle cx="50" cy="58" r="2.6" fill="var(--clay)"/><circle cx="66" cy="53" r="2.6" fill="var(--clay)"/></svg>`,
  chicken: `<svg viewBox="0 0 100 100" fill="none"><path d="M32 70c-4-20 6-38 24-38 16 0 26 16 22 34-2 10-12 16-24 16-12 0-20-4-22-12z" stroke="var(--soil)" stroke-width="2"/><path d="M52 32c2-8 10-10 14-6-4 2-8 4-9 8" stroke="var(--clay)" stroke-width="1.8" stroke-linecap="round"/><circle cx="62" cy="36" r="2" fill="var(--soil)"/></svg>`,
  duck: `<svg viewBox="0 0 100 100" fill="none"><path d="M30 34c14-6 30-4 36 8 6 12 0 26-14 30-12 4-24-2-26-14-2-10 0-20 4-24z" stroke="var(--soil)" stroke-width="2"/><path d="M30 34c12 4 14 16 8 24" stroke="var(--clay)" stroke-width="1.4"/></svg>`,
  tomato: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="56" r="26" stroke="var(--soil)" stroke-width="2"/><path d="M50 30c-4-8 2-14 10-12-2 6-4 10-10 12z" stroke="var(--clay)" stroke-width="1.8" stroke-linejoin="round"/><path d="M40 28c0-6 6-10 10-8" stroke="var(--clay)" stroke-width="1.6"/></svg>`,
  greens: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 76c-16-4-24-18-20-34 12 2 20 10 22 22 2-14 12-22 24-24 2 16-8 32-26 36z" stroke="var(--soil)" stroke-width="2"/><path d="M50 76V50" stroke="var(--clay)" stroke-width="1.6"/></svg>`,
  fruit: `<svg viewBox="0 0 100 100" fill="none"><rect x="18" y="46" width="64" height="30" rx="4" stroke="var(--soil)" stroke-width="2"/><path d="M18 56h64M18 66h64" stroke="var(--line)" stroke-width="1.4"/><circle cx="34" cy="42" r="10" stroke="var(--clay)" stroke-width="1.8"/><circle cx="58" cy="38" r="12" stroke="var(--clay)" stroke-width="1.8"/><path d="M58 26v-6M34 32v-5" stroke="var(--soil)" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

/* ---------------- DATA ---------------- */
const products = [
  {id:1, name:"Wild King Salmon Fillet", cat:"Seafood", price:28, icon:"fish", desc:"Line-caught king salmon, filleted the morning it's sold. Rich, firm and never previously frozen."},
  {id:2, name:"Jumbo Gulf Shrimp, 1lb", cat:"Seafood", price:19, icon:"shellfish", desc:"Head-on shrimp from a single Gulf boat, sized large for grilling or a proper shrimp cocktail."},
  {id:3, name:"Dry-Aged Ribeye Steak", cat:"Meat", price:34, icon:"steak", desc:"28-day dry-aged ribeye from grass-fed cattle, cut to your preferred thickness when you order."},
  {id:4, name:"Grass-Fed Ground Beef, 1lb", cat:"Meat", price:12, icon:"mince", desc:"Coarse-ground from whole cuts, no fillers — from a single regenerative-pasture farm."},
  {id:5, name:"Free-Range Whole Chicken", cat:"Poultry", price:22, icon:"chicken", desc:"Pasture-raised, air-chilled whole bird from a farm we've bought from for over a decade."},
  {id:6, name:"Duck Breast, Pair", cat:"Poultry", price:24, icon:"duck", desc:"Two skin-on duck breasts from a small upstate farm, ready to sear."},
  {id:7, name:"Heirloom Tomatoes, 1lb", cat:"Vegetables", price:6, icon:"tomato", desc:"A mix of heirloom varieties, vine-ripened and picked within two days of delivery."},
  {id:8, name:"Baby Spinach, Bunch", cat:"Vegetables", price:4, icon:"greens", desc:"Tender young spinach from a regional grower, harvested to order in small batches."},
  {id:9, name:"Stone Fruit Basket", cat:"Fruit", price:9, icon:"fruit", desc:"A hand-picked mix of peaches, plums and apricots, chosen for ripeness that day."}
];

let cart = []; // {id, qty}
let loggedInUser = null;
let lastOrder = null;
let currentModalProduct = null;
let modalQty = 1;
let activeFilter = "All";

/* ---------------- HELPERS ---------------- */
function findProduct(id){ return products.find(p => p.id === id); }
function cartCount(){ return cart.reduce((s,i)=>s+i.qty,0); }
function cartTotal(){ return cart.reduce((s,i)=> s + findProduct(i.id).price * i.qty, 0); }
function money(n){ return "$" + n.toFixed(2); }
const FREE_SHIPPING_THRESHOLD = 40;
const SHIPPING_COST = 5;
function calcShipping(subtotal){ return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST; }

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._h);
  showToast._h = setTimeout(()=> t.classList.remove('show'), 2200);
}

/* ---------------- RENDER: product cards ---------------- */
function productCard(p){
  return `<div class="card" data-open="${p.id}">
    <div class="card-art">${icons[p.icon]}</div>
    <div class="card-body">
      <div class="card-cat">${p.cat}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-price">${money(p.price)}</div>
    </div>
  </div>`;
}

function renderHomeFeatured(){
  document.getElementById('homeFeatured').innerHTML =
    products.slice(0,4).map(productCard).join('');
}

function renderFilters(){
  const cats = ["All", ...new Set(products.map(p=>p.cat))];
  document.getElementById('filterBar').innerHTML = cats.map(c =>
    `<button data-filter="${c}" class="${c===activeFilter?'active':''}">${c}</button>`
  ).join('');
}

function renderShopGrid(){
  const list = activeFilter === "All" ? products : products.filter(p=>p.cat===activeFilter);
  document.getElementById('shopGrid').innerHTML = list.map(productCard).join('');
  document.getElementById('resultCount').textContent = `${list.length} product${list.length!==1?'s':''}`;
}

/* ---------------- MODAL ---------------- */
function openModal(id){
  currentModalProduct = findProduct(id);
  modalQty = 1;
  document.getElementById('modalArt').innerHTML = icons[currentModalProduct.icon];
  document.getElementById('modalCat').textContent = currentModalProduct.cat;
  document.getElementById('modalName').textContent = currentModalProduct.name;
  document.getElementById('modalPrice').textContent = money(currentModalProduct.price);
  document.getElementById('modalDesc').textContent = currentModalProduct.desc;
  document.getElementById('qtyValue').textContent = modalQty;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){ document.getElementById('modalOverlay').classList.remove('open'); }

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if(e.target.id==='modalOverlay') closeModal(); });
document.getElementById('qtyMinus').addEventListener('click', ()=>{ modalQty = Math.max(1, modalQty-1); document.getElementById('qtyValue').textContent = modalQty; });
document.getElementById('qtyPlus').addEventListener('click', ()=>{ modalQty = Math.min(20, modalQty+1); document.getElementById('qtyValue').textContent = modalQty; });
document.getElementById('addToCartBtn').addEventListener('click', ()=>{
  const existing = cart.find(i=>i.id===currentModalProduct.id);
  if(existing){ existing.qty += modalQty; } else { cart.push({id:currentModalProduct.id, qty:modalQty}); }
  updateCartCount();
  closeModal();
  showToast(`Added ${modalQty} × ${currentModalProduct.name} to cart`);
});

/* delegate product card clicks */
document.addEventListener('click', e => {
  const card = e.target.closest('[data-open]');
  if(card){ openModal(parseInt(card.dataset.open)); }
});

/* ---------------- CART PAGE ---------------- */
function updateCartCount(){
  const n = cartCount();
  const el = document.getElementById('cartCount');
  el.textContent = n;
  el.classList.toggle('zero', n === 0);
}

function renderCartPage(){
  const el = document.getElementById('cartContent');
  if(cart.length === 0){
    el.innerHTML = `<div class="empty-state">
      <svg class="glyph" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2A2 2 0 0 0 9.36 18h7.5a2 2 0 0 0 1.96-1.6L20.5 8H6" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="21" r="1.2" fill="currentColor"/><circle cx="17" cy="21" r="1.2" fill="currentColor"/></svg>
      <h3 style="font-size:20px;margin-bottom:8px;">Your bag is empty</h3>
      <p style="color:var(--ink-soft);margin-bottom:24px;">Browse today's counter and add something fresh.</p>
      <button class="btn btn-primary" data-nav="shop">Browse products</button>
    </div>`;
    return;
  }
  const rows = cart.map(item=>{
    const p = findProduct(item.id);
    return `<div class="cart-row" data-id="${p.id}">
      <div class="thumb">${icons[p.icon]}</div>
      <div>
        <div class="name">${p.name}</div>
        <div class="cat">${p.cat} · ${money(p.price)} each</div>
        <button class="remove" data-remove="${p.id}">Remove</button>
      </div>
      <div class="qty-stepper">
        <button data-dec="${p.id}">−</button>
        <span>${item.qty}</span>
        <button data-inc="${p.id}">+</button>
      </div>
      <div class="line-total">${money(p.price*item.qty)}</div>
    </div>`;
  }).join('');

  const subtotal = cartTotal();
  const shipping = calcShipping(subtotal);
  const total = subtotal + shipping;

  el.innerHTML = `<div class="cart-layout">
    <div>${rows}</div>
    <div class="summary-box">
      <h3 style="margin-bottom:16px;">Order summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping===0?'Free':money(shipping)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${money(total)}</span></div>
      <button class="btn btn-primary btn-full" style="margin-top:18px;" data-nav="checkout">Proceed to checkout</button>
      ${subtotal<FREE_SHIPPING_THRESHOLD ? `<p style="font-size:12.5px;color:var(--ink-soft);margin-top:12px;">Add ${money(FREE_SHIPPING_THRESHOLD-subtotal)} more for free shipping.</p>` : ''}
    </div>
  </div>`;
}

document.addEventListener('click', e=>{
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  const rem = e.target.closest('[data-remove]');
  if(inc){ const item = cart.find(i=>i.id===parseInt(inc.dataset.inc)); item.qty++; renderCartPage(); updateCartCount(); }
  if(dec){ const item = cart.find(i=>i.id===parseInt(dec.dataset.dec)); item.qty--; if(item.qty<=0) cart = cart.filter(i=>i!==item); renderCartPage(); updateCartCount(); }
  if(rem){ cart = cart.filter(i=>i.id!==parseInt(rem.dataset.remove)); renderCartPage(); updateCartCount(); }
});

/* ---------------- CHECKOUT ---------------- */
function renderCheckoutSummary(){
  const subtotal = cartTotal();
  const shipping = calcShipping(subtotal);
  const total = subtotal + shipping;
  const lines = cart.map(item=>{
    const p = findProduct(item.id);
    return `<div class="mini-line"><span>${item.qty} × ${p.name}</span><span>${money(p.price*item.qty)}</span></div>`;
  }).join('');
  document.getElementById('checkoutSummary').innerHTML = `
    <h3 style="margin-bottom:14px;">Order summary</h3>
    ${lines || '<p style="color:var(--ink-soft);font-size:14px;">Your cart is empty.</p>'}
    <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shipping===0?'Free':money(shipping)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${money(total)}</span></div>
  `;
}

document.getElementById('checkoutForm').addEventListener('submit', e=>{
  e.preventDefault();
  if(cart.length === 0){ showToast("Your cart is empty"); return; }
  const subtotal = cartTotal();
  const shipping = calcShipping(subtotal);
  lastOrder = {
    id: "HK-" + Math.floor(100000 + Math.random()*899999),
    items: cart.map(i=>({...findProduct(i.id), qty:i.qty})),
    subtotal, shipping, total: subtotal+shipping,
    name: document.getElementById('chName').value,
    address: document.getElementById('chAddr').value,
    city: document.getElementById('chCity').value
  };
  cart = [];
  updateCartCount();
  goTo('confirmation');
  showToast("Order placed");
});

function renderConfirmation(){
  if(!lastOrder){
    document.getElementById('orderSummary').innerHTML = `<p style="color:var(--ink-soft);">No recent order found.</p>`;
    return;
  }
  const lines = lastOrder.items.map(p=>
    `<div class="mini-line"><span>${p.qty} × ${p.name}</span><span>${money(p.price*p.qty)}</span></div>`
  ).join('');
  document.getElementById('orderSummary').innerHTML = `
    <div class="order-id">${lastOrder.id}</div>
    <p style="font-size:13.5px;color:var(--ink-soft);margin-bottom:16px;">Shipping to ${lastOrder.name}, ${lastOrder.address}, ${lastOrder.city}</p>
    ${lines}
    <div class="summary-row"><span>Subtotal</span><span>${money(lastOrder.subtotal)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${lastOrder.shipping===0?'Free':money(lastOrder.shipping)}</span></div>
    <div class="summary-row total"><span>Total paid</span><span>${money(lastOrder.total)}</span></div>
  `;
}

/* ---------------- LOGIN / CONTACT forms ---------------- */
document.getElementById('loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('lEmail').value;
  loggedInUser = email.split('@')[0];
  document.getElementById('loginNavLabel').textContent = loggedInUser;
  showToast(`Welcome back, ${loggedInUser}`);
  goTo('home');
});
document.getElementById('guestContinue').addEventListener('click', e=>{
  e.preventDefault();
  goTo('home');
  showToast("Continuing as guest");
});
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  showToast("Message sent — we'll reply within a day");
  e.target.reset();
});

/* ---------------- FILTER BAR ---------------- */
document.addEventListener('click', e=>{
  const f = e.target.closest('[data-filter]');
  if(f){ activeFilter = f.dataset.filter; renderFilters(); renderShopGrid(); }
});

/* ---------------- ROUTER ---------------- */
const validPages = Array.from(document.querySelectorAll('section[data-page]')).map(s => s.dataset.page);
const cartFlowPages = ['cart','checkout','confirmation'];
const pageTitles = {
  home:"Home", shop:"Shop", about:"About Us", how:"How It Works",
  sustainability:"Sustainability", contact:"Contact Us", cart:"Your Cart",
  login:"Log In", checkout:"Checkout", confirmation:"Order Placed"
};

function renderPage(page){
  if(!validPages.includes(page)) page = 'home';

  document.querySelectorAll('section[data-page]').forEach(s=>{
    s.classList.toggle('active', s.dataset.page === page);
  });
  document.querySelectorAll('nav.links button[data-nav]').forEach(b=>{
    const isActive = b.dataset.nav === page;
    b.classList.toggle('active', isActive);
    if(isActive) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  document.getElementById('cartNavBtn').classList.toggle('active', cartFlowPages.includes(page));
  document.getElementById('loginNavBtn').classList.toggle('active', page === 'login');

  closeMobileMenu();
  window.scrollTo({top:0, behavior:'instant' in document.documentElement.style ? 'instant' : 'auto'});
  document.title = pageTitles[page] ? `${pageTitles[page]} — Kieke's Pukies` : "Kieke's Pukies";

  if(page === 'shop'){ renderFilters(); renderShopGrid(); }
  if(page === 'cart'){ renderCartPage(); }
  if(page === 'checkout'){ renderCheckoutSummary(); }
  if(page === 'confirmation'){ renderConfirmation(); }
}

/* goTo updates the URL hash (so browser back/forward and bookmarks work);
   the hashchange listener is what actually renders the page. */
function goTo(page){
  if(!validPages.includes(page)) page = 'home';
  if(location.hash.slice(1) === page){
    renderPage(page);
  } else {
    location.hash = page;
  }
}

window.addEventListener('hashchange', ()=>{
  renderPage(location.hash.slice(1) || 'home');
});

document.addEventListener('click', e=>{
  const nav = e.target.closest('[data-nav]');
  if(nav){ e.preventDefault(); goTo(nav.dataset.nav); }
});

/* ---------------- MOBILE MENU ---------------- */
const hamburgerBtn = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

function openMobileMenu(){
  navLinksEl.classList.add('open');
  hamburgerBtn.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded','true');
  hamburgerBtn.setAttribute('aria-label','Close menu');
  document.body.classList.add('nav-open');
}
function closeMobileMenu(){
  navLinksEl.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded','false');
  hamburgerBtn.setAttribute('aria-label','Open menu');
  document.body.classList.remove('nav-open');
}
hamburgerBtn.addEventListener('click', ()=>{
  navLinksEl.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});
document.getElementById('navBackdrop').addEventListener('click', closeMobileMenu);
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && navLinksEl.classList.contains('open')){
    closeMobileMenu();
    hamburgerBtn.focus();
  }
});

/* ---------------- INIT ---------------- */
renderHomeFeatured();
renderPage(location.hash.slice(1) || 'home');