const storeAddress =
  "Domus Supermercado, Rua Monsenhor Agostinho, 1463 - Parque São José, Fortaleza - CE, 60730-275";

const products = [
  {
    id: "alface",
    name: "Alface Americana Higienizada",
    category: "Hortifruti",
    price: 3.99,
    badge: "Entrega rapida",
    icon: "🥬",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH4H3JlTjhhZXdMkzEKqADHAvNFQRBHPgbo75OK-MlBvpvkl5zYPx2fIbckxacG-1VFTtKaGWY9155UNBeKlT2GNfwaLDlb2v2kTs0BgNaut7JlitbxwzyiZDlAWUobX_OOaXDiDv6UCwKatYCWYuHY7w6hFbcB6riTUYVyhWUd3f93wfM9m7jd6GntPaRT6TLKAlV4hr2vhJVFR7n1ZP9YwjiPBlFrmIYV5rN1B3KirtJ59xD9VZthf_1bNKKX0sVHoJ5fNi4WuI",
  },
  {
    id: "leite",
    name: "Leite Integral Betania 1L",
    category: "Laticinios",
    price: 5.49,
    badge: "Gelado",
    icon: "🥛",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABDxTlRLIULphRP5Uffph_vrBEYErAKyw-wmWaXOW_N7j7lKT1L1Pcwt4X9-j1nVyR4mKrMR_jmrn40TyEdeY-fdGs9O3PJLzquUkkRM2MKYcSFgHUu04f3miKzLPDsqVDbQ1Wo--NAbS7TQ0z-b4w3F8DsuTN_vbyd-OSBAdY-rplFntLp3y1OB8oC0aHVejwKR4UQAdYDqxGYxSyHl6GpqspJfXlrq7PfZt9k8FE5slOUdmqKIijqvTVAxt0q3WDQmTBmX1NvAk",
  },
  {
    id: "cafe",
    name: "Cafe Moido Premium 250g",
    category: "Mercearia",
    price: 12.9,
    badge: "Oferta",
    icon: "☕",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgnuXjJmhmyGvObtDOLwRn6sVb880mXvIeUX-eDZsLTS86Usio81fjdTe0riWXWqfvVzqYzcxacL0TnR9HzNA_wlVc1rjWzWOmARAd-AWIKQXCdyV1qeFJU_U3uyMINcnFUPPSEznBvwEFWibT9Kxpb6getbEdknlzV3Pge0b6VSjxiyBfNOEwJzt5KOz3EPYlql4RHK5QP2xo57HFT0t2b8LFKRI20CjDJHz5sN6gj3LMRLdmQKMLgopk2TVsjGNZxn4IE-FWHmc",
  },
  {
    id: "morango",
    name: "Morango Selecionado 250g",
    category: "Hortifruti",
    price: 9.98,
    badge: "Fresco",
    icon: "🍓",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfoDrKuyh2c01eyGn4zCS8oEY2FI_y4rO6toQeWaOjcE_l6IVQBJaCIQks__phjQ5iFEDC97Id9hTtwENff0VH73dYtcZiDaoymN6h1dmeXXhb7r6L7a-DKQ2DIKfoM0ote4a5jhg_f-C_kA7cyoYl-F9sKeqLSB27eg1ZbHkJxk0SOnLG0tNWg5qT4VTZPnYho1JuEjy4zQoRItRKxu_vA86LMhPQoDRSno3vLZCPnbt7iQXX2w4PV0m3kC7YGVMVjtVaXqTPfBA",
  },
  {
    id: "suco",
    name: "Suco de Laranja Integral 900ml",
    category: "Bebidas",
    price: 13.49,
    badge: "Natural",
    icon: "🍊",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4egiUtlyZeRlw1Hg7BCUG7OLIxbnywMVlutwBFOgN0LqXITDsIod1V7Or0gxSxivSNh69jB-NjKRAR-h5_Kl2__uy6q3OCW89Lmr1vSBVJFyplnFb0nQwICY9jQUVch6_gxkHiHoxFigEHP5fu455bHES--gwQHNXjaZoOVdTlANvsPzmXCGnApqwg-nnfNnhsQeLANMkrEOyZsMpZmL0DobX83qjLdk3liAtQC_UfPnShS5hGGbfPdrXJGuNKZUxg8GcfhzmoHQ",
  },
  {
    id: "sabao",
    name: "Sabao Liquido Lavanda 3L",
    category: "Limpeza",
    price: 24.9,
    badge: "Casa",
    icon: "🧴",
    image: "",
  },
  {
    id: "pao-frances",
    name: "Pao Frances",
    category: "Padaria",
    price: 0.89,
    badge: "Assado hoje",
    icon: "🥖",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1Zw8JJGH3hyj8a_x1NLQu_F-OEtmB8o635EbQpBennlaL0fD6qZ2HjT1y8vkV0mRmhcfbrHFQjWUqscjWec69Mscs6nQ_hkXRVh98ZH5dF2HvxRopdhTjyfIttUlB-2OrxsmzHmyCTcfawFaNFIyLpCcJPnpSudn8g828TyT0qwq8ds0My--yEIxegukhGXASbE2-yAOeYoItMwfpqeYOTop-i8XT5ChIdkj6eBkfUJI4goLN43mjZRMZ_PUcal7qTjuTcFY8iA",
  },
  {
    id: "bolo-milho",
    name: "Bolo de Milho Caseiro",
    category: "Padaria",
    price: 18.9,
    badge: "Producao propria",
    icon: "🍰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7VNFgTSy1IrUd3EZ8EzEhBkC5IHDacpuXhuWm1g6425Sl6Wki2p9P04GlzFL6PD__T2J8I695iHN-Met7vifzHZ-my7B6yltzNAA8pk-XySAWcDS66G6hmV0k2HPH4vEOOb8ofegvzS3muJv5kgaPupdkawmw73pD2qUem0_0CBphqY9jDHcme-oeZFNb4AFO6I1LctxmAftU0TDIwaTfHZZ_CLyPZhzTe0QMWMIDni109O_sRQOsRDHHhZDLDXEDPCFkXBeCBDc",
  },
  {
    id: "sonho",
    name: "Sonho de Creme",
    category: "Padaria",
    price: 6.5,
    badge: "Doce",
    icon: "🍩",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2SwxDVL-nWp4PZwIapQILuZuSp00mSBYgInar-bX4ayijLk0EyyRYRu_-f14_WO4zO9cnC7T6p1SJ3bloUrO23dOJt2FKLpOliWKZF57v-syO_OL_J2oE1s-FxRVcD6aJegSFS9hNl01JkMRN9Rs1k5w0JxbVD1Q0AjZdslFQabiR_AkcnnZfY2N91rgxe-jSbOkGd3KoVvgtBP0NZgVIBVAd4G0LVuRLg7veP-lP4o_5PYN6I3OCAb2tLzMlbRtktnOwpCx0FV4",
  },
  {
    id: "pao-queijo",
    name: "Pao de Queijo Mineiro",
    category: "Padaria",
    price: 14.9,
    badge: "Quentinho",
    icon: "🧀",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHcY2CP3nY-6UGK9BoxDAwkCaSz3HqwuKqsERVvgj_ODGbgOS3aHy0I5u2tAUhw7BEAqrG3WMTnm4WMF32U88ApynJAsP52jMfI9geU3a6xh0bbhwU-BlzGPtMOYLd4I1nq7zRWYnUmXyWhgY6ClBnFlkjULKELvbjKCbJOVjI7dgD93ZUgVA3D_YAGiSV7A6lcGAaZlVFBHqE3FUjANSAT_ZKLQefkfqGV24N2XQJjuOFJzLOxSrqAdSoNCEj9PLNaCmpEPeTIXs",
  },
];

const state = {
  filter: "all",
  search: "",
  mode: "delivery",
  cart: new Map(),
};

const marketGrid = document.querySelector("#marketGrid");
const bakeryGrid = document.querySelector("#bakeryGrid");
const cartList = document.querySelector("#cartList");
const cartBadge = document.querySelector("#cartBadge");
const subtotalEl = document.querySelector("#subtotal");
const deliveryFeeEl = document.querySelector("#deliveryFee");
const totalEl = document.querySelector("#total");
const addressForm = document.querySelector("#addressForm");
const pickupBox = document.querySelector("#pickupBox");
const cityInput = document.querySelector("#cityInput");
const deliveryNote = document.querySelector("#deliveryNote");
const toast = document.querySelector("#toast");
const drawer = document.querySelector("#accountDrawer");

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function productMatches(product, area) {
  const byArea = area === "bakery" ? product.category === "Padaria" : product.category !== "Padaria";
  const byFilter = state.filter === "all" || product.category === state.filter;
  const bySearch = product.name.toLowerCase().includes(state.search.toLowerCase());
  return byArea && byFilter && bySearch;
}

function renderProduct(product) {
  const img = product.image
    ? `<img src="${product.image}" alt="${product.name}" onerror="this.remove()" />`
    : "";

  return `
    <article class="product-card">
      <div class="product-image">
        <span class="product-badge">${product.badge}</span>
        <span class="fallback-icon" aria-hidden="true">${product.icon}</span>
        ${img}
      </div>
      <div class="product-info">
        <small>${product.category}</small>
        <h3>${product.name}</h3>
        <div class="buy-row">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" type="button" data-add="${product.id}" aria-label="Adicionar ${product.name}">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  marketGrid.innerHTML = products
    .filter((product) => productMatches(product, "market"))
    .map(renderProduct)
    .join("");
  bakeryGrid.innerHTML = products
    .filter((product) => productMatches(product, "bakery"))
    .map(renderProduct)
    .join("");

  document.querySelectorAll(".product-grid [data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
}

function cartEntries() {
  return [...state.cart.entries()].map(([id, qty]) => ({
    product: products.find((item) => item.id === id),
    qty,
  }));
}

function renderCart() {
  const entries = cartEntries();
  const subtotal = entries.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const deliveryFee = state.mode === "delivery" && subtotal > 0 ? 7.9 : 0;
  const totalQty = entries.reduce((sum, item) => sum + item.qty, 0);

  cartBadge.textContent = String(totalQty);
  subtotalEl.textContent = money(subtotal);
  deliveryFeeEl.textContent = deliveryFee ? money(deliveryFee) : "Gratis";
  totalEl.textContent = money(subtotal + deliveryFee);

  if (!entries.length) {
    cartList.innerHTML = `<div class="empty-cart">Seu carrinho está vazio. Adicione produtos do mercado ou da padaria Domus.</div>`;
    return;
  }

  cartList.innerHTML = entries
    .map(({ product, qty }) => {
      const img = product.image ? `<img src="${product.image}" alt="${product.name}" onerror="this.remove()" />` : "";
      return `
        <article class="cart-item">
          <div class="cart-thumb">${img}</div>
          <div>
            <h3>${product.name}</h3>
            <p>${product.category} · ${money(product.price)} cada</p>
          </div>
          <div class="quantity-control">
            <button class="quantity-button" type="button" data-dec="${product.id}" onclick="decreaseCart('${product.id}')" aria-label="Diminuir ${product.name}">-</button>
            <strong>${qty}</strong>
            <button class="quantity-button" type="button" data-add="${product.id}" onclick="addToCart('${product.id}')" aria-label="Aumentar ${product.name}">+</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function addToCart(id) {
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  const product = products.find((item) => item.id === id);
  showToast(`${product.name} adicionado ao carrinho.`);
  renderCart();
}

function decreaseCart(id) {
  const nextQty = (state.cart.get(id) || 0) - 1;
  if (nextQty <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, nextQty);
  }
  renderCart();
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  addressForm.hidden = mode !== "delivery";
  pickupBox.hidden = mode !== "pickup";
  renderCart();
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderProducts();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function navigateTo(target) {
  const section = document.querySelector(`#${target}`);
  if (section) section.scrollIntoView({ block: "start", behavior: "auto" });
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === target);
  });
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const decButton = event.target.closest("[data-dec]");
  const modeButton = event.target.closest("[data-mode]");
  const filterButton = event.target.closest("[data-filter]");
  const navButton = event.target.closest("[data-nav]");
  const authTab = event.target.closest("[data-auth-tab]");

  if (addButton || decButton) return;
  if (modeButton) setMode(modeButton.dataset.mode);
  if (filterButton) setFilter(filterButton.dataset.filter);
  if (navButton) navigateTo(navButton.dataset.nav);

  if (event.target.closest("[data-open-account]") || event.target.closest("[data-open-menu]")) {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }

  if (event.target.closest("[data-close-account]")) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }

  if (authTab) {
    document.querySelectorAll("[data-auth-tab]").forEach((button) => {
      button.classList.toggle("active", button === authTab);
    });
    document.querySelector("#loginForm").classList.toggle("active", authTab.dataset.authTab === "login");
    document.querySelector("#signupForm").classList.toggle("active", authTab.dataset.authTab === "signup");
  }
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

cityInput.addEventListener("input", () => {
  const isFortaleza = cityInput.value.trim().toLowerCase() === "fortaleza";
  deliveryNote.classList.toggle("error", !isFortaleza);
  deliveryNote.textContent = isFortaleza
    ? "A entrega do Domus está disponível apenas dentro de Fortaleza."
    : "No momento, o Domus entrega apenas em Fortaleza. Escolha retirada na loja para continuar.";
});

document.querySelector("#checkoutButton").addEventListener("click", () => {
  if (!cartEntries().length) {
    showToast("Adicione pelo menos um produto antes de confirmar.");
    return;
  }

  if (state.mode === "delivery" && cityInput.value.trim().toLowerCase() !== "fortaleza") {
    showToast("Entrega disponível apenas em Fortaleza.");
    return;
  }

  const destination = state.mode === "delivery" ? "entrega em casa" : `retirada em ${storeAddress}`;
  showToast(`Encomenda confirmada para ${destination}.`);
});

renderProducts();
renderCart();
setMode("delivery");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // File URLs cannot register service workers; hosted builds will.
    });
  });
}
