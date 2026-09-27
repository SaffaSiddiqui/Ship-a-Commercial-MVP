"use strict";

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", category: "Self Development", price: 1800, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800" },
  { id: 2, title: "The Psychology of Money", author: "Morgan Housel", category: "Business", price: 1650, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 3200, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", price: 1200, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800" },
  { id: 5, title: "Deep Work", author: "Cal Newport", category: "Productivity", price: 1900, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800" },
  { id: 6, title: "Python Crash Course", author: "Eric Matthes", category: "Programming", price: 2800, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800" }
];

const copy = {
  en: {
    navHome: "Home", navBooks: "Books", navCategories: "Categories", languageLabel: "Language", cart: "Cart",
    heroEyebrow: "YOUR NEXT GREAT READ", heroTitle: "Books that make<br><span>ideas happen.</span>",
    heroText: "Discover thoughtful reads in programming, business, fiction and personal growth.",
    shopBooks: "Shop Books", heroCaption: "Curated reads for curious minds.", collectionEyebrow: "OUR COLLECTION",
    collectionTitle: "Find your next book", searchLabel: "Search books", searchPlaceholder: "Search books...",
    filterLabel: "Filter by category", allCategories: "All categories", exploreEyebrow: "EXPLORE",
    categoriesTitle: "Browse by category", footerText: "Find your next great read.", cartEyebrow: "YOUR SELECTION",
    cartTitle: "Your Cart", total: "Total", checkoutButton: "Continue to Checkout", checkoutEyebrow: "ALMOST THERE",
    checkoutTitle: "Checkout", checkoutIntro: "Enter your details to review your demo order.", nameLabel: "Full name",
    emailLabel: "Email address", phoneLabel: "Phone number", addressLabel: "Delivery address",
    demoNote: "Frontend demo only: details are not sent or saved.", placeOrder: "Place Demo Order",
    thanksEyebrow: "A LITTLE BOOK JOY", thanksTitle: "Thank You!", continueShopping: "Continue browsing",
    addToCart: "Add to Cart", emptyCart: "Your cart is empty. Find a book to get started.",
    noBooks: "No books match your search. Try another title or category.", results: "{count} books",
    itemAdded: "{title} has been added to your cart.", orderDemo: "Thank you, {name}. Your demo order for {total} is ready. No details were sent or saved.",
    category: { "Business": "Business", "Fiction": "Fiction", "Productivity": "Productivity", "Programming": "Programming", "Self Development": "Self Development" },
    closeCart: "Close cart", closeCheckout: "Close checkout", closeMessage: "Close message", decrease: "Decrease quantity", increase: "Increase quantity"
  },
  ur: {
    navHome: "صفحۂ اول", navBooks: "کتابیں", navCategories: "اقسام", languageLabel: "زبان", cart: "ٹوکری",
    heroEyebrow: "آپ کی اگلی پسندیدہ کتاب", heroTitle: "ایسی کتابیں جو<br><span>خیالات کو حقیقت بنائیں۔</span>",
    heroText: "پروگرامنگ، کاروبار، افسانہ اور ذاتی ترقی پر منتخب کتابیں دریافت کریں۔",
    shopBooks: "کتابیں دیکھیں", heroCaption: "جستجو کرنے والوں کے لیے منتخب کتابیں۔", collectionEyebrow: "ہمارا مجموعہ",
    collectionTitle: "اپنی اگلی کتاب تلاش کریں", searchLabel: "کتابیں تلاش کریں", searchPlaceholder: "کتاب تلاش کریں...",
    filterLabel: "قسم کے مطابق چھانٹیں", allCategories: "تمام اقسام", exploreEyebrow: "دریافت کریں",
    categoriesTitle: "قسم کے مطابق دیکھیں", footerText: "اپنی اگلی پسندیدہ کتاب تلاش کریں۔", cartEyebrow: "آپ کا انتخاب",
    cartTitle: "آپ کی ٹوکری", total: "کل", checkoutButton: "چیک آؤٹ جاری رکھیں", checkoutEyebrow: "تقریباً مکمل",
    checkoutTitle: "چیک آؤٹ", checkoutIntro: "ڈیمو آرڈر دیکھنے کے لیے اپنی تفصیلات درج کریں۔", nameLabel: "پورا نام",
    emailLabel: "ای میل ایڈریس", phoneLabel: "فون نمبر", addressLabel: "ترسیل کا پتہ",
    demoNote: "صرف فرنٹ اینڈ ڈیمو: تفصیلات نہ بھیجی جاتی ہیں نہ محفوظ ہوتی ہیں۔", placeOrder: "ڈیمو آرڈر مکمل کریں",
    thanksEyebrow: "کتابوں کی خوشی", thanksTitle: "شکریہ!", continueShopping: "کتابیں دیکھتے رہیں",
    addToCart: "ٹوکری میں ڈالیں", emptyCart: "آپ کی ٹوکری خالی ہے۔ شروع کرنے کے لیے کتاب منتخب کریں۔",
    noBooks: "آپ کی تلاش سے کوئی کتاب نہیں ملی۔ دوسری تلاش یا قسم آزمائیں۔", results: "{count} کتابیں",
    itemAdded: "{title} آپ کی ٹوکری میں شامل کر دی گئی ہے۔", orderDemo: "شکریہ {name}۔ آپ کا {total} کا ڈیمو آرڈر تیار ہے۔ تفصیلات نہ بھیجی گئیں نہ محفوظ ہوئیں۔",
    category: { "Business": "کاروبار", "Fiction": "افسانہ", "Productivity": "پیداواری صلاحیت", "Programming": "پروگرامنگ", "Self Development": "ذاتی ترقی" },
    closeCart: "ٹوکری بند کریں", closeCheckout: "چیک آؤٹ بند کریں", closeMessage: "پیغام بند کریں", decrease: "تعداد کم کریں", increase: "تعداد بڑھائیں"
  }
};

let language = "en";
let cart = [];
let lastFocusedElement = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const grid = $("#bookGrid");
const search = $("#search");
const categorySelect = $("#category");
const cartModal = $("#cartModal");
const checkoutModal = $("#checkoutModal");
const noticeModal = $("#noticeModal");
const checkoutForm = $("#checkoutForm");

function text(key) { return copy[language][key]; }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}
function formatPrice(amount) { return `Rs. ${Number(amount).toLocaleString(language === "ur" ? "ur-PK" : "en-PK")}`; }
function categoryName(name) { return copy[language].category[name] || name; }

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  $$('[data-i18n]').forEach(element => { element.innerHTML = text(element.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(element => { element.placeholder = text(element.dataset.i18nPlaceholder); });
  $("#languageSelect").value = language;
  $("#cartButton").setAttribute("aria-label", language === "ur" ? "ٹوکری کھولیں" : "Open cart");
  $('[data-close="cartModal"]').setAttribute("aria-label", text("closeCart"));
  $('[data-close="checkoutModal"]').setAttribute("aria-label", text("closeCheckout"));
  $$('[data-close="noticeModal"]').forEach(button => button.setAttribute("aria-label", text("closeMessage")));
  search.setAttribute("aria-label", text("searchLabel"));
  categorySelect.setAttribute("aria-label", text("filterLabel"));
  renderCategoryOptions();
  renderBooks();
  renderCart();
}

function renderCategoryOptions() {
  const selected = categorySelect.value || "All";
  const categories = [...new Set(books.map(book => book.category))].sort();
  categorySelect.innerHTML = `<option value="All">${text("allCategories")}</option>` + categories
    .map(name => `<option value="${escapeHtml(name)}">${escapeHtml(categoryName(name))}</option>`).join("");
  categorySelect.value = categories.includes(selected) ? selected : "All";
  $("#categoryGrid").innerHTML = categories.map(name =>
    `<button type="button" data-category="${escapeHtml(name)}">${escapeHtml(categoryName(name))}</button>`).join("");
}

function renderBooks() {
  const term = search.value.trim().toLocaleLowerCase(language === "ur" ? "ur" : "en");
  const selected = categorySelect.value || "All";
  const filtered = books.filter(book =>
    `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase().includes(term)
    && (selected === "All" || book.category === selected));
  $("#resultCount").textContent = copy[language].results.replace("{count}", filtered.length.toLocaleString(language === "ur" ? "ur-PK" : "en-PK"));
  grid.innerHTML = filtered.length ? filtered.map(book => `
    <article class="book">
      <img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.title)} book cover" loading="lazy">
      <div class="book-info">
        <p class="eyebrow">${escapeHtml(categoryName(book.category))}</p>
        <h3>${escapeHtml(book.title)}</h3>
        <p class="author">${language === "ur" ? "مصنف" : "by"} ${escapeHtml(book.author)}</p>
        <div class="price-row">
          <span class="price">${formatPrice(book.price)}</span>
          <button class="add" type="button" data-add="${book.id}">${text("addToCart")}</button>
        </div>
      </div>
    </article>`).join("") : `<p class="muted empty-results">${text("noBooks")}</p>`;
}

function updateCartCount() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.quantity, 0).toLocaleString(language === "ur" ? "ur-PK" : "en-PK");
}

function renderCart() {
  const cartItems = $("#cartItems");
  const total = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <img src="${escapeHtml(item.book.image)}" alt="" loading="lazy">
      <div class="cart-item-info"><strong>${escapeHtml(item.book.title)}</strong>
        <div class="muted">${formatPrice(item.book.price)}</div></div>
      <div class="qty" aria-label="${escapeHtml(item.book.title)}">
        <button type="button" data-qty="-1" data-id="${item.book.id}" aria-label="${text("decrease")}">−</button>
        <span>${item.quantity.toLocaleString(language === "ur" ? "ur-PK" : "en-PK")}</span>
        <button type="button" data-qty="1" data-id="${item.book.id}" aria-label="${text("increase")}">+</button>
      </div>
    </div>`).join("") : `<p class="muted empty-cart">${text("emptyCart")}</p>`;
  $("#cartTotal").textContent = formatPrice(total);
  $("#checkoutButton").disabled = cart.length === 0;
  updateCartCount();
}

function showModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  $("button:not(:disabled)", modal)?.focus();
}

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  if (![cartModal, checkoutModal, noticeModal].some(item => !item.classList.contains("hidden"))) {
    lastFocusedElement?.focus();
  }
}

function showNotice(message) {
  $("#noticeMessage").textContent = message;
  showModal(noticeModal);
}

function addToCart(bookId) {
  const book = books.find(item => item.id === bookId);
  if (!book) return;
  const existing = cart.find(item => item.book.id === bookId);
  if (existing) {
    if (existing.quantity >= 99) {
      showNotice(language === "ur" ? "ایک کتاب کے لیے زیادہ سے زیادہ تعداد 99 ہے۔" : "The maximum quantity for one book is 99.");
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ book, quantity: 1 });
  }
  renderCart();
  const message = copy[language].itemAdded.replace("{title}", book.title);
  showNotice(message);
}

function changeQuantity(bookId, amount) {
  const item = cart.find(entry => entry.book.id === bookId);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.book.id !== bookId);
  item.quantity = Math.min(item.quantity, 99);
  renderCart();
}

$("#languageSelect").addEventListener("change", event => {
  language = event.target.value === "ur" ? "ur" : "en";
  applyLanguage();
});
search.addEventListener("input", renderBooks);
categorySelect.addEventListener("change", renderBooks);
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});
$("#categoryGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  categorySelect.value = button.dataset.category;
  renderBooks();
  $("#books").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#cartButton").addEventListener("click", () => { renderCart(); showModal(cartModal); });
$("#cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (button) changeQuantity(Number(button.dataset.id), Number(button.dataset.qty));
});
$("#checkoutButton").addEventListener("click", () => {
  if (!cart.length) return;
  closeModal(cartModal);
  showModal(checkoutModal);
});
$$("[data-close]").forEach(button => button.addEventListener("click", () => closeModal($(`#${button.dataset.close}`))));
$$(".modal").forEach(modal => modal.addEventListener("click", event => {
  if (event.target === modal) closeModal(modal);
}));
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  const open = [noticeModal, checkoutModal, cartModal].find(modal => !modal.classList.contains("hidden"));
  if (open) closeModal(open);
});

checkoutForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!checkoutForm.reportValidity() || !cart.length) return;
  const name = $("#customerName").value.trim();
  const total = formatPrice(cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0));
  cart = [];
  checkoutForm.reset();
  renderCart();
  closeModal(checkoutModal);
  showNotice(copy[language].orderDemo.replace("{name}", name).replace("{total}", total));
});

applyLanguage();
