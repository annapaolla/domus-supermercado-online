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
const streetInput = document.querySelector("#streetInput");
const districtInput = document.querySelector("#districtInput");
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
const profileEditForm = document.querySelector("#profileEditForm");
const profilePhotoFile = document.querySelector("#profilePhotoFile");
const profilePronouns = document.querySelector("#profilePronouns");
const profileNotes = document.querySelector("#profileNotes");
const profilePhotoFileName = document.querySelector("#profilePhotoFileName");
const profileHomeView = document.querySelector("#profileHomeView");
const profileEditView = document.querySelector("#profileEditView");
const profileEditToggle = document.querySelector("#profileEditToggle");
const paymentDetail = document.querySelector("#paymentDetail");
const accountIntro = document.querySelector("#accountIntro");
const profileAddressName = document.querySelector("#profileAddressName");
const profileAddressStreet = document.querySelector("#profileAddressStreet");
const profileAddressDistrict = document.querySelector("#profileAddressDistrict");
const savedAddresses = document.querySelector("#savedAddresses");
const checkoutSavedAddresses = document.querySelector("#checkoutSavedAddresses");
const checkoutPaymentSummary = document.querySelector("#checkoutPaymentSummary");
const saveAddressButton = document.querySelector("[data-save-address]");
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

let editingAddressId = null;

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
  renderCheckoutSavedAddresses();
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
  profilePhotoFile.value = "";
  profilePronouns.value = profileState.profile.pronouns || "";
  profileNotes.value = profileState.profile.notes || "";
  const hasProfileData = Boolean(
    (profileState.profile.name && profileState.profile.name !== "Perfil Domus") ||
      profileState.profile.photoUrl ||
      profileState.profile.pronouns ||
      profileState.profile.notes
  );
  profileEditToggle.textContent = hasProfileData
    ? "Alterar informações do perfil"
    : "Adicionar informações sobre o perfil";
  profileEditToggle.innerHTML = `
    <span class="material-symbols-outlined">edit</span>
    ${hasProfileData ? "Alterar informações do perfil" : "Adicionar informações sobre o perfil"}
  `;
  profilePhotoFileName.textContent = profileState.profile.photoUrl
    ? "Foto selecionada"
    : "Nenhuma foto escolhida";

  if (profileState.profile.photoUrl) {
    profilePhotoButton.innerHTML = `<img src="${profileState.profile.photoUrl}" alt="Foto de perfil" onerror="this.parentElement.innerHTML='<span class=&quot;material-symbols-outlined&quot;>person</span>'" />`;
  } else {
    profilePhotoButton.innerHTML = '<span class="material-symbols-outlined">person</span>';
  }
}

function showProfile(user) {
  if (user) loadAccountState(user);
  renderProfileCard();
  renderSavedAddresses();
  setPayment(profileState.paymentMethod);
  showProfileHome();
  accountAuth.hidden = true;
  profilePanel.hidden = false;
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

function showProfileHome() {
  profileHomeView.hidden = false;
  profileEditView.hidden = true;
  accountIntro.textContent = "Perfil aberto para cadastrar endereços e formas de pagamento.";
}

function showProfileEdit() {
  profileHomeView.hidden = true;
  profileEditView.hidden = false;
  accountIntro.textContent = "Atualize suas informações de perfil.";
  profileEditView.scrollIntoView({ block: "start", behavior: "smooth" });
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

function saveProfile(event) {
  event?.preventDefault();
  const name = profileEditName.value.trim() || "Perfil Domus";
  profileState.profile = {
    name,
    photoUrl: profileState.profile.photoUrl,
    pronouns: profilePronouns.value.trim(),
    notes: profileNotes.value.trim(),
  };
  saveAccountState();
  renderProfileCard();
  showProfileHome();
  showToast("Perfil salvo.");

  syncProfileToSupabase();
}

async function syncProfileToSupabase() {
  if (!supabaseClient) return;

  try {
    const { error } = await supabaseClient.auth.updateUser({
      data: {
        full_name: profileState.profile.name,
        pronouns: profileState.profile.pronouns,
        notes: profileState.profile.notes,
      },
    });
    if (error) showToast("Perfil salvo neste aparelho. Supabase não atualizou.");
  } catch {
    showToast("Perfil salvo neste aparelho. Supabase não atualizou.");
  }
}

function handleProfilePhoto(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Escolha um arquivo de imagem.");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    profileState.profile.photoUrl = reader.result;
    profilePhotoFileName.textContent = file.name;
    renderProfileCard();
    showToast("Foto selecionada. Salve o perfil para guardar.");
  });
  reader.readAsDataURL(file);
}

async function loadSupabaseSession() {
  if (!supabaseClient) {
    setAuthStatus("Supabase ainda não configurado. Adicione URL e anon key pública em supabase-config.js.", "error");
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  if (data.session?.user) {
    showProfile(data.session.user);
  } else {
    showSignedOutState();
  }

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    if (session?.user) showProfile(session.user);
    else showSignedOutState();
  });
}

function showSignedOutState(message = "") {
  emptyAccountState();
  renderSavedAddresses();
  setPayment("credit");
  showProfileHome();
  profilePanel.hidden = true;
  accountAuth.hidden = false;
  accountIntro.textContent = "Entre ou crie sua conta para salvar pedidos, endereços e preferências.";
  profilePillLabel.textContent = "Entrar";
  setAuthStatus("");
  if (message) showToast(message);
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  showSignedOutState("Você saiu da conta Domus.");
}

function renderSavedAddresses() {
  if (!profileState.addresses.length) {
    savedAddresses.innerHTML = "<p>Nenhum endereço cadastrado ainda.</p>";
    renderCheckoutSavedAddresses();
    return;
  }

  savedAddresses.innerHTML = profileState.addresses
    .map(
      (address) => `
        <article class="saved-address-card ${profileState.selectedAddress === address.id ? "selected" : ""}">
          <button class="saved-address-main" type="button" data-select-address="${address.id}">
            <strong>${address.name}</strong>
            <span>${address.street}</span>
            <small>${address.district}</small>
          </button>
          <div class="saved-address-actions" aria-label="Ações do endereço ${address.name}">
            <button type="button" data-edit-address="${address.id}">Editar</button>
            <button type="button" data-delete-address="${address.id}">Excluir</button>
          </div>
        </article>
      `
    )
    .join("");
  renderCheckoutSavedAddresses();
}

function renderCheckoutSavedAddresses() {
  if (state.mode !== "delivery" || !profileState.addresses.length) {
    checkoutSavedAddresses.hidden = true;
    checkoutSavedAddresses.innerHTML = "";
    return;
  }

  checkoutSavedAddresses.hidden = false;
  checkoutSavedAddresses.innerHTML = `
    <strong>Usar endereço salvo</strong>
    <div class="checkout-address-options">
      ${profileState.addresses
        .map(
          (address) => `
            <button class="${profileState.selectedAddress === address.id ? "selected" : ""}" type="button" data-select-address="${address.id}">
              <span>${address.name}</span>
              <small>${address.street}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function saveAddress() {
  const name = profileAddressName.value.trim() || "Endereço";
  const street = profileAddressStreet.value.trim();
  const district = profileAddressDistrict.value.trim();

  if (!street || !district) {
    showToast("Preencha rua e bairro para salvar o endereço.");
    return;
  }

  const address = { id: editingAddressId || `address-${Date.now()}`, name, street, district };
  const currentIndex = profileState.addresses.findIndex((item) => item.id === editingAddressId);

  if (currentIndex >= 0) {
    profileState.addresses[currentIndex] = address;
  } else {
    profileState.addresses.push(address);
  }

  profileState.selectedAddress = address.id;
  editingAddressId = null;
  saveAccountState();
  renderSavedAddresses();
  profileAddressName.value = "";
  profileAddressStreet.value = "";
  profileAddressDistrict.value = "";
  saveAddressButton.textContent = "Salvar endereço";
  showToast(currentIndex >= 0 ? "Endereço atualizado e selecionado." : "Endereço salvo e selecionado.");
}

function saveCheckoutAddress() {
  if (!profileState.userId) {
    showSignedOutState();
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    showToast("Entre na conta para salvar o endereço.");
    return;
  }

  const street = streetInput.value.trim();
  const district = districtInput.value.trim();

  if (!street || !district) {
    showToast("Preencha endereço e bairro antes de salvar.");
    return;
  }

  const address = {
    id: `address-${Date.now()}`,
    name: "Endereço de entrega",
    street,
    district,
  };

  profileState.addresses.push(address);
  profileState.selectedAddress = address.id;
  saveAccountState();
  renderSavedAddresses();
  showToast("Endereço salvo na sua conta.");
}

function selectAddress(id) {
  profileState.selectedAddress = id;
  const address = profileState.addresses.find((item) => item.id === id);
  if (address) {
    streetInput.value = address.street;
    districtInput.value = address.district;
    cityInput.value = "Fortaleza";
    deliveryNote.classList.remove("error");
    deliveryNote.textContent = "A entrega do Domus está disponível apenas dentro de Fortaleza.";
  }
  saveAccountState();
  renderSavedAddresses();
  showToast("Endereço selecionado para os próximos pedidos.");
}

function editAddress(id) {
  const address = profileState.addresses.find((item) => item.id === id);
  if (!address) return;

  editingAddressId = id;
  profileAddressName.value = address.name;
  profileAddressStreet.value = address.street;
  profileAddressDistrict.value = address.district;
  saveAddressButton.textContent = "Salvar alterações";
  profileAddressName.focus();
  showToast("Edite os campos e salve as alterações.");
}

function deleteAddress(id) {
  profileState.addresses = profileState.addresses.filter((item) => item.id !== id);
  if (profileState.selectedAddress === id) profileState.selectedAddress = profileState.addresses[0]?.id || null;
  if (editingAddressId === id) {
    editingAddressId = null;
    profileAddressName.value = "";
    profileAddressStreet.value = "";
    profileAddressDistrict.value = "";
    saveAddressButton.textContent = "Salvar endereço";
  }
  saveAccountState();
  renderSavedAddresses();
  showToast("Endereço excluído.");
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
    ${renderSavedCards(type)}
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
  renderCheckoutPayment();

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

function renderCheckoutPayment() {
  const method = profileState.paymentMethod;
  const methodNames = {
    credit: "Crédito",
    debit: "Débito",
    pix: "Pix",
    paypal: "PayPal",
  };

  if (method === "credit" || method === "debit") {
    const selectedCardId = profileState.selectedCard[method];
    const selectedCard = profileState.cards[method].find((card) => card.id === selectedCardId);
    checkoutPaymentSummary.textContent = selectedCard
      ? `${methodNames[method]} final ${selectedCard.lastDigits}`
      : `Nenhum cartão de ${cardLabel(method)} salvo ainda.`;
    return;
  }

  checkoutPaymentSummary.textContent =
    method === "pix"
      ? "Pix selecionado. O QR Code será gerado na confirmação do pedido."
      : "PayPal selecionado. Cadastre a conta PayPal no perfil.";
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
  const openProfileEditButton = event.target.closest("[data-open-profile-edit]");
  const backProfileHomeButton = event.target.closest("[data-back-profile-home]");
  const openPaymentProfileButton = event.target.closest("[data-open-payment-profile]");
  const paymentButton = event.target.closest("[data-payment]");
  const logoutButton = event.target.closest("[data-logout]");
  const saveAddressClick = event.target.closest("[data-save-address]");
  const saveCheckoutAddressButton = event.target.closest("[data-save-checkout-address]");
  const selectAddressButton = event.target.closest("[data-select-address]");
  const editAddressButton = event.target.closest("[data-edit-address]");
  const deleteAddressButton = event.target.closest("[data-delete-address]");
  const saveCardButton = event.target.closest("[data-save-card]");
  const selectCardButton = event.target.closest("[data-select-card]");

  if (addButton || decButton) return;
  if (modeButton) setMode(modeButton.dataset.mode);
  if (filterButton) setFilter(filterButton.dataset.filter);
  if (navButton) navigateTo(navButton.dataset.nav);
  if (loginButton) loginAccount();
  if (createAccountButton) createAccount();
  if (saveProfileButton) saveProfile(event);
  if (openProfileEditButton) showProfileEdit();
  if (backProfileHomeButton) showProfileHome();
  if (openPaymentProfileButton) {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    showProfileHome();
    paymentDetail.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  if (paymentButton) setPayment(paymentButton.dataset.payment);
  if (logoutButton) logout();
  if (saveAddressClick) saveAddress();
  if (saveCheckoutAddressButton) saveCheckoutAddress();
  if (editAddressButton) editAddress(editAddressButton.dataset.editAddress);
  if (deleteAddressButton) deleteAddress(deleteAddressButton.dataset.deleteAddress);
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

profileEditForm.addEventListener("submit", (event) => {
  saveProfile(event);
});

profilePhotoFile.addEventListener("change", handleProfilePhoto);

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
