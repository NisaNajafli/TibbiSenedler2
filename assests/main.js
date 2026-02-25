var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Мобильное меню (бургер в header-mobile, оверлей)
(function () {
  var burger = document.querySelector(".burger--mobile");
  var overlay = document.getElementById("mobile-menu-overlay");
  if (!burger || !overlay) return;
  function openMenu() {
    document.body.classList.add("menu-open");
    overlay.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-label", "Закрыть меню");
    burger.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    document.body.classList.remove("menu-open");
    overlay.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-label", "Открыть меню");
    burger.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    if (document.body.classList.contains("menu-open")) closeMenu();
    else openMenu();
  }
  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeMenu();
  });
  overlay.querySelectorAll(".mobile-menu-overlay__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991 && document.body.classList.contains("menu-open")) closeMenu();
  });
})();



// Модальное окно «Оставить заявку»
(function () {
  var btn = document.getElementById("hero-cta-btn");
  var modal = document.getElementById("request-modal");
  var form = document.getElementById("request-form");
  if (!btn || !modal) return;
  var backdrop = modal.querySelector(".modal-overlay__backdrop");
  var closeBtn = modal.querySelector(".modal-overlay__close");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      closeModal();
      form.reset();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();

// Blog slider
var blogEl = document.querySelector(".blog-slider");
if (blogEl) {
  new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".blog-next",
      prevEl: ".blog-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 2, spaceBetween: 24 },
      1350: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
}

// Review slider
var reviewEl = document.querySelector(".review-slider");
if (reviewEl) {
  new Swiper(".review-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 2, spaceBetween: 24 },
      1350: { slidesPerView: 2, spaceBetween: 30 },
    },
  });
}