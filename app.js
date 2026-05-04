const storeAddress =
  "Domus Supermercado, Rua Monsenhor Agostinho, 1463 - Parque São José, Fortaleza - Ceará, 60730-275";

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
const accountAuth = document.querySelector("#accountAuth");
const profilePanel = document.querySelector("#profilePanel");
const profileName = document.querySelector("#profileName");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPhone = document.querySelector("#signupPhone");
const signupPassword = document.querySelector("#signupPassword");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const profileEditName = document.querySelector("#profileEditName");
const profilePhotoUrl = document.querySelector("#profilePhotoUrl");
const profilePronouns = document.querySelector("#profilePronouns");
const profileNotes = document.querySelector("#profileNotes");
const paymentDetail = document.querySelector("#paymentDetail");
const accountIntro = document.querySelector("#accountIntro");
const profileAddressName = document.querySelector("#profileAddressName");
const profileAddressStreet = document.querySelector("#profileAddressStreet");
const profileAddressDistrict = document.querySelector("#profileAddressDistrict");
const savedAddresses = document.querySelector("#savedAddresses");
const authStatus = document.querySelector("#authStatus");
const profilePhotoButton = document.querySelector(".profile-photo-placeholder");
const profilePillLabel = document.querySelector(".profile-pill span:last-child");

const supabaseSettings = window.DOMUS_SUPABASE || {};
const hasSupabaseConfig =
  Boolean(window.supabase) &&
  Boolean(supabaseSettings.url) &&
  Boolean(supabaseSettings.anonKey) &&
  !supabaseSettings.url.includes("YOUR_PROJECT_REF") &&
  !supabaseSettings.anonKey.includes("YOUR_SUPABASE_ANON_KEY");
const supabaseClient = hasSupabaseConfig
  ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.anonKey)
  : null;

const profileState = {
  userId: null,
  profile: {
    name: "",
    photoUrl: "",
    pronouns: "",
    notes: "",
  },
  selectedAddress: null,
  paymentMethod: "credit",
  selectedCard: {
    credit: null,
    debit: null,
  },
  addresses: [],
  cards: {
    credit: [],
    debit: [],
  },
};

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function productMatches(product, area) {
  const byArea = area === "bakery" ? product.category === "Padaria" : product.category !== "Padaria";
  const byFilter = state.filter === "all" || product.category === state.filter;
  return byArea && byFilter;
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

function setAuthStatus(message, type = "") {
  authStatus.textContent = message;
  authStatus.dataset.type = type;
}

function supabaseReady() {
  if (supabaseClient) return true;
  setAuthStatus("Preencha o arquivo supabase-config.js com a URL e a chave anon pública do Supabase.", "error");
  showToast("Configure o Supabase para criar contas reais.");
  return false;
}

function emptyAccountState(userId = null) {
  profileState.userId = userId;
  profileState.profile = {
    name: "",
    photoUrl: "",
    pronouns: "",
    notes: "",
  };
  profileState.selectedAddress = null;
  profileState.paymentMethod = "credit";
  profileState.selectedCard = {
    credit: null,
    debit: null,
  };
  profileState.addresses = [];
  profileState.cards = {
    credit: [],
    debit: [],
  };
}

function accountStorageKey(userId) {
  return `domus-profile-${userId}`;
}

function loadAccountState(user) {
  emptyAccountState(user.id);

  try {
    const saved = JSON.parse(localStorage.getItem(accountStorageKey(user.id)) || "{}");
    Object.assign(profileState.profile, saved.profile || {});
    profileState.selectedAddress = saved.selectedAddress || null;
    profileState.paymentMethod = saved.paymentMethod || "credit";
    profileState.selectedCard = saved.selectedCard || { credit: null, debit: null };
    profileState.addresses = Array.isArray(saved.addresses) ? saved.addresses : [];
    profileState.cards = saved.cards || { credit: [], debit: [] };
  } catch {
    emptyAccountState(user.id);
  }

  const metadata = user.user_metadata || {};
  profileState.profile.name =
    profileState.profile.name || metadata.full_name || metadata.name || signupName.value.trim() || "Perfil Domus";
  profileState.profile.photoUrl = profileState.profile.photoUrl || metadata.avatar_url || "";
  profileState.profile.pronouns = profileState.profile.pronouns || metadata.pronouns || "";
  profileState.profile.notes = profileState.profile.notes || metadata.notes || "";
}

function saveAccountState() {
  if (!profileState.userId) return;
  localStorage.setItem(
    accountStorageKey(profileState.userId),
    JSON.stringify({
      profile: profileState.profile,
      selectedAddress: profileState.selectedAddress,
      paymentMethod: profileState.paymentMethod,
      selectedCard: profileState.selectedCard,
      addresses: profileState.addresses,
      cards: profileState.cards,
    })
  );
}

function renderProfileCard() {
  const name = profileState.profile.name || "Perfil Domus";
  profileName.textContent = name;
  profileEditName.value = name === "Perfil Domus" ? "" : name;
  profilePhotoUrl.value = profileState.profile.photoUrl || "";
  profilePronouns.value = profileState.profile.pronouns || "";
  profileNotes.value = profileState.profile.notes || "";

  if (profileState.profile.photoUrl) {
    profilePhotoButton.innerHTML = `<img src="${profileState.profile.photoUrl}" alt="Foto de perfil" onerror="this.parentElement.innerHTML='<span class=&quot;material-symbols-outlined&quot;>add_a_photo</span>Foto'" />`;
  } else {
    profilePhotoButton.innerHTML = '<span class="material-symbols-outlined">add_a_photo</span>Foto';
  }
}

function showProfile(user) {
  if (user) loadAccountState(user);
  renderProfileCard();
  renderSavedAddresses();
  setPayment(profileState.paymentMethod);
  accountAuth.hidden = true;
  profilePanel.hidden = false;
  accountIntro.textContent = "Perfil aberto para cadastrar endereços e formas de pagamento.";
  profilePillLabel.textContent = "Perfil";
  setAuthStatus("");
  showToast("Perfil Domus carregado.");
}

async function loginAccount() {
  if (!supabaseReady()) return;

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  if (!email || !password) {
    setAuthStatus("Preencha e-mail e senha para entrar.", "error");
    return;
  }

  setAuthStatus("Entrando na conta Domus...");
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    setAuthStatus(error.message, "error");
    showToast("Não foi possível entrar.");
    return;
  }

  showProfile(data.user);
  showToast("Conta conectada.");
}

async function createAccount() {
  if (!supabaseReady()) return;

  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const phone = signupPhone.value.trim();
  const password = signupPassword.value.trim();

  if (!name || !email || !password) {
    setAuthStatus("Preencha nome, e-mail e senha para criar a conta.", "error");
    return;
  }

  if (password.length < 6) {
    setAuthStatus("Use uma senha com pelo menos 6 caracteres.", "error");
    return;
  }

  setAuthStatus("Criando sua conta Domus...");
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
        phone,
      },
    },
  });

  if (error) {
    setAuthStatus(error.message, "error");
    showToast("Não foi possível criar a conta.");
    return;
  }

  if (data.session && data.user) {
    showProfile(data.user);
    showToast("Conta criada.");
    return;
  }

  setAuthStatus("Conta criada. Confirme o e-mail se o Supabase pedir antes de entrar.", "success");
  showToast("Cadastro enviado.");
}

async function saveProfile() {
  const name = profileEditName.value.trim() || "Perfil Domus";
  profileState.profile = {
    name,
    photoUrl: profilePhotoUrl.value.trim(),
    pronouns: profilePronouns.value.trim(),
    notes: profileNotes.value.trim(),
  };
  saveAccountState();
  renderProfileCard();

  if (supabaseClient) {
    const { error } = await supabaseClient.auth.updateUser({
      data: {
        full_name: profileState.profile.name,
        avatar_url: profileState.profile.photoUrl,
        pronouns: profileState.profile.pronouns,
        notes: profileState.profile.notes,
      },
    });
    if (error) {
      showToast("Perfil salvo neste aparelho. Supabase não atualizou.");
      return;
    }
  }

  showToast("Perfil salvo.");
}

async function loadSupabaseSession() {
  if (!supabaseClient) {
    setAuthStatus("Supabase ainda não configurado. Adicione URL e anon key pública em supabase-config.js.", "error");
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  if (data.session?.user) showProfile(data.session.user);

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    if (session?.user) showProfile(session.user);
  });
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  emptyAccountState();
  renderSavedAddresses();
  setPayment("credit");
  profilePanel.hidden = true;
  accountAuth.hidden = false;
  accountIntro.textContent = "Entre ou crie sua conta para salvar pedidos, endereços e preferências.";
  profilePillLabel.textContent = "Entrar";
  setAuthStatus("");
  showToast("Você saiu da conta Domus.");
}

function renderSavedAddresses() {
  if (!profileState.addresses.length) {
    savedAddresses.innerHTML = "<p>Nenhum endereço cadastrado ainda.</p>";
    return;
  }

  savedAddresses.innerHTML = profileState.addresses
    .map(
      (address) => `
        <button class="${profileState.selectedAddress === address.id ? "selected" : ""}" type="button" data-select-address="${address.id}">
          <strong>${address.name}</strong>
          <span>${address.street}</span>
          <small>${address.district}</small>
        </button>
      `
    )
    .join("");
}

function saveAddress() {
  const name = profileAddressName.value.trim() || "Endereço";
  const street = profileAddressStreet.value.trim();
  const district = profileAddressDistrict.value.trim();

  if (!street || !district) {
    showToast("Preencha rua e bairro para salvar o endereço.");
    return;
  }

  const address = { id: `address-${Date.now()}`, name, street, district };
  profileState.addresses.push(address);
  profileState.selectedAddress = address.id;
  saveAccountState();
  renderSavedAddresses();
  profileAddressName.value = "";
  profileAddressStreet.value = "";
  profileAddressDistrict.value = "";
  showToast("Endereço salvo e selecionado.");
}

function selectAddress(id) {
  profileState.selectedAddress = id;
  saveAccountState();
  renderSavedAddresses();
  showToast("Endereço selecionado para os próximos pedidos.");
}

function cardLabel(type) {
  return type === "credit" ? "crédito" : "débito";
}

function renderSavedCards(type) {
  const cards = profileState.cards[type];
  const label = cardLabel(type);

  if (!cards.length) {
    return `<div class="saved-cards"><p>Nenhum cartão de ${label} salvo ainda.</p></div>`;
  }

  return `
    <div class="saved-cards" aria-label="Cartões de ${label} salvos">
      ${cards
        .map(
          (card) => `
            <button class="${profileState.selectedCard[type] === card.id ? "selected" : ""}" type="button" data-select-card="${card.id}" data-card-type="${type}">
              <strong>${card.name}</strong>
              <span>${type === "credit" ? "Crédito" : "Débito"} final ${card.lastDigits}</span>
              <small>Validade ${card.expiry}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function cardForm(type) {
  const label = cardLabel(type);
  return `
    ${renderSavedCards(type)}
    <form class="profile-form payment-form">
      <label>
        Número do cartão de ${label}
        <input data-card-number type="text" inputmode="numeric" placeholder="0000 0000 0000 0000" />
      </label>
      <label>
        Nome impresso no cartão
        <input data-card-name type="text" placeholder="Nome completo" />
      </label>
      <div class="compact-fields">
        <label>
          Segurança
          <input data-card-security type="text" inputmode="numeric" placeholder="CVV" />
        </label>
        <label>
          Validade
          <input data-card-expiry type="text" placeholder="MM/AA" />
        </label>
      </div>
      <button class="secondary-action" type="button" data-save-card="${type}">Salvar cartão de ${label}</button>
    </form>
  `;
}

function saveCard(type) {
  const number = paymentDetail.querySelector("[data-card-number]").value.trim();
  const name = paymentDetail.querySelector("[data-card-name]").value.trim();
  const security = paymentDetail.querySelector("[data-card-security]").value.trim();
  const expiry = paymentDetail.querySelector("[data-card-expiry]").value.trim();

  if (!number || !name || !security || !expiry) {
    showToast("Preencha todos os dados do cartão.");
    return;
  }

  const digits = number.replace(/\D/g, "");
  const lastDigits = digits.slice(-4) || "0000";
  const existing = profileState.cards[type].find(
    (item) => item.name === name && item.lastDigits === lastDigits && item.expiry === expiry
  );

  if (existing) {
    profileState.selectedCard[type] = existing.id;
    saveAccountState();
    setPayment(type);
    showToast(`Cartão de ${cardLabel(type)} selecionado.`);
    return;
  }

  const card = {
    id: `${type}-${Date.now()}`,
    name,
    lastDigits,
    expiry,
  };

  profileState.cards[type].push(card);
  profileState.selectedCard[type] = card.id;
  saveAccountState();
  setPayment(type);
  showToast(`Cartão de ${cardLabel(type)} salvo e selecionado.`);
}

function selectCard(type, id) {
  profileState.selectedCard[type] = id;
  saveAccountState();
  setPayment(type);
  showToast(`Cartão de ${cardLabel(type)} selecionado.`);
}

function setPayment(method) {
  profileState.paymentMethod = method;
  document.querySelectorAll("[data-payment]").forEach((button) => {
    button.classList.toggle("active", button.dataset.payment === method);
  });

  if (method === "credit" || method === "debit") {
    paymentDetail.innerHTML = cardForm(method);
    return;
  }

  if (method === "pix") {
    paymentDetail.innerHTML = `
      <div class="pix-note">
        <span class="material-symbols-outlined">qr_code_2</span>
        <div>
          <strong>Pix na finalização</strong>
          <p>O QR Code será gerado somente na hora de confirmar e pagar o pedido.</p>
        </div>
      </div>
    `;
    return;
  }

  paymentDetail.innerHTML = `
    <form class="profile-form payment-form">
      <label>
        E-mail da conta PayPal
        <input type="email" placeholder="paypal@email.com" />
      </label>
      <button class="secondary-action" type="button">Conectar PayPal</button>
    </form>
  `;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const decButton = event.target.closest("[data-dec]");
  const modeButton = event.target.closest("[data-mode]");
  const filterButton = event.target.closest("[data-filter]");
  const navButton = event.target.closest("[data-nav]");
  const authTab = event.target.closest("[data-auth-tab]");
  const loginButton = event.target.closest("[data-login-account]");
  const createAccountButton = event.target.closest("[data-create-account]");
  const saveProfileButton = event.target.closest("[data-save-profile]");
  const paymentButton = event.target.closest("[data-payment]");
  const logoutButton = event.target.closest("[data-logout]");
  const saveAddressButton = event.target.closest("[data-save-address]");
  const selectAddressButton = event.target.closest("[data-select-address]");
  const saveCardButton = event.target.closest("[data-save-card]");
  const selectCardButton = event.target.closest("[data-select-card]");

  if (addButton || decButton) return;
  if (modeButton) setMode(modeButton.dataset.mode);
  if (filterButton) setFilter(filterButton.dataset.filter);
  if (navButton) navigateTo(navButton.dataset.nav);
  if (loginButton) loginAccount();
  if (createAccountButton) createAccount();
  if (saveProfileButton) saveProfile();
  if (paymentButton) setPayment(paymentButton.dataset.payment);
  if (logoutButton) logout();
  if (saveAddressButton) saveAddress();
  if (selectAddressButton) selectAddress(selectAddressButton.dataset.selectAddress);
  if (saveCardButton) saveCard(saveCardButton.dataset.saveCard);
  if (selectCardButton) selectCard(selectCardButton.dataset.cardType, selectCardButton.dataset.selectCard);

  if (event.target.closest("[data-open-account]")) {
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

paymentDetail.addEventListener("focusout", (event) => {
  if (!event.target.matches("[data-card-expiry]")) return;
  const number = paymentDetail.querySelector("[data-card-number]")?.value.trim();
  const name = paymentDetail.querySelector("[data-card-name]")?.value.trim();
  const security = paymentDetail.querySelector("[data-card-security]")?.value.trim();
  const expiry = paymentDetail.querySelector("[data-card-expiry]")?.value.trim();
  if (number && name && security && expiry) saveCard(profileState.paymentMethod);
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
setPayment("credit");
loadSupabaseSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // File URLs cannot register service workers; hosted builds will.
    });
  });
}
