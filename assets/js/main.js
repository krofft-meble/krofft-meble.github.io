const localeStrings = {
  pl: { open: "Otwórz menu", close: "Zamknij menu" },
  en: { open: "Open menu", close: "Close menu" },
  de: {
    open: "Menü öffnen",
    close: "Menü schließen",
  },
  nb: { open: "Åpne menyen", close: "Lukk menyen" },
};
const currentLocaleStrings =
  localeStrings[document.documentElement.lang] || localeStrings.en;
document.addEventListener("DOMContentLoaded", () => {
  (initNavbar(),
    initMobileMenu(),
    initScrollReveal(),
    initContactFormStatus(),
    initHeroSlider(),
    initWorkshopGallery(),
    initNumberCounters(),
    initLanguageSelector());
});
function initNavbar() {
  const e = document.querySelector("header");
  if (!e) return;
  const t = () => {
    window.scrollY > 40
      ? e.classList.add("header-scrolled")
      : e.classList.remove("header-scrolled");
  };
  (window.addEventListener("scroll", t, { passive: !0 }), t());
  const o = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav-link").forEach((s) => {
    const n = new URL(s.getAttribute("href"), window.location.href),
      r = n.pathname.replace(/\/+$/, "") || "/";
    !n.hash &&
      r === o &&
      (s.classList.add(
        "text-brand-gold",
        "border-b",
        "border-brand-gold",
        "pb-1",
      ),
      s.classList.remove("text-gray-300"));
  });
}
function initMobileMenu() {
  const e = document.getElementById("mobile-menu-toggle"),
    t = document.getElementById("mobile-menu");
  if (!e || !t) return;
  const o = () => {
      (t.classList.remove("closed"),
        t.classList.add("open"),
        (document.body.style.overflow = "hidden"),
        e.setAttribute("aria-expanded", "true"),
        e.setAttribute("aria-label", currentLocaleStrings.close));
    },
    s = () => {
      (t.classList.remove("open"),
        t.classList.add("closed"),
        (document.body.style.overflow = ""),
        e.setAttribute("aria-expanded", "false"),
        e.setAttribute("aria-label", currentLocaleStrings.open));
    };
  (e.addEventListener("click", () => {
    t.classList.contains("open") ? s() : o();
  }),
    t.querySelectorAll("a").forEach((n) => {
      n.addEventListener("click", s);
    }),
    document.addEventListener("keydown", (n) => {
      n.key === "Escape" && t.classList.contains("open") && s();
    }));
}
function initScrollReveal() {
  const e = document.querySelectorAll(".reveal-item");
  if (e.length)
    if ("IntersectionObserver" in window) {
      const t = new IntersectionObserver(
        (o, s) => {
          o.forEach((n) => {
            n.isIntersecting &&
              (n.target.classList.add("revealed"), s.unobserve(n.target));
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      e.forEach((o) => t.observe(o));
    } else e.forEach((t) => t.classList.add("revealed"));
}
function initContactFormStatus() {
  const successMessage = document.getElementById("contact-form-success");
  if (!successMessage) return;

  if (new URLSearchParams(window.location.search).get("sent") === "1") {
    successMessage.classList.remove("hidden");
  }
}
function initWorkshopGallery() {
  const gallery = document.getElementById("workshop-gallery");
  if (!gallery) return;

  const viewport = gallery.querySelector(".workshop-gallery-viewport");
  const track = gallery.querySelector(".workshop-gallery-track");
  if (!viewport || !track) return;

  const originalSlides = Array.from(track.children);
  const slideCount = originalSlides.length;
  if (!slideCount) return;

  const previous = document.getElementById("workshop-gallery-prev");
  const next = document.getElementById("workshop-gallery-next");
  const zoomDialog = document.getElementById("workshop-image-dialog");
  const zoomClose = document.getElementById("workshop-image-close");
  const zoomImage = document.getElementById("workshop-image-zoom");
  const createClone = (slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("button").forEach((button) => {
      button.tabIndex = -1;
    });
    return clone;
  };
  track.prepend(...originalSlides.map(createClone));
  track.append(...originalSlides.map(createClone));

  const slides = Array.from(track.children);
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let activeIndex = slideCount;
  let targetIndex = activeIndex;
  let isScrolling = false;
  let scrollEndTimer;
  let resizeTimer;

  const findNearestSlide = () => {
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });

    return nearestIndex;
  };

  const jumpToSlide = (index) => {
    const scrollBehavior = viewport.style.scrollBehavior;
    viewport.style.scrollBehavior = "auto";
    viewport.scrollLeft = slides[index].offsetLeft;
    viewport.style.scrollBehavior = scrollBehavior;
  };

  const scrollToSlide = (index) => {
    targetIndex = Math.max(0, Math.min(slides.length - 1, index));
    isScrolling = true;
    viewport.scrollTo({
      left: slides[targetIndex].offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const scheduleLoopReset = () => {
    window.clearTimeout(scrollEndTimer);
    isScrolling = true;
    scrollEndTimer = window.setTimeout(() => {
      const index = findNearestSlide();
      activeIndex = index;
      if (index < slideCount) activeIndex += slideCount;
      else if (index >= slideCount * 2) activeIndex -= slideCount;
      targetIndex = activeIndex;
      if (activeIndex !== index) jumpToSlide(activeIndex);
      isScrolling = false;
    }, 140);
  };

  jumpToSlide(activeIndex);
  viewport.addEventListener("scroll", scheduleLoopReset, { passive: true });

  previous?.addEventListener("click", () => {
    scrollToSlide((isScrolling ? targetIndex : findNearestSlide()) - 1);
  });
  next?.addEventListener("click", () => {
    scrollToSlide((isScrolling ? targetIndex : findNearestSlide()) + 1);
  });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      window.clearTimeout(scrollEndTimer);
      activeIndex = slideCount + ((activeIndex - slideCount) % slideCount);
      targetIndex = activeIndex;
      isScrolling = false;
      jumpToSlide(activeIndex);
    }, 120);
  });

  gallery.querySelectorAll(".workshop-gallery-open").forEach((button) => {
    button.addEventListener("click", () => {
      if (!zoomDialog || !zoomImage) return;
      const image = button.querySelector("img");
      zoomImage.src = image?.currentSrc || image?.src || "";
      zoomImage.alt = image?.alt || "";
      zoomDialog.showModal();
    });
  });
  zoomClose?.addEventListener("click", () => zoomDialog?.close());
  zoomDialog?.addEventListener("click", (event) => {
    if (event.target === zoomDialog) zoomDialog.close();
  });
}
function initHeroSlider() {
  const e = document.getElementById("hero-slider");
  if (!e) return;
  const t = e.querySelectorAll(".hero-slide"),
    o = document.getElementById("hero-counter-current"),
    s = document.getElementById("hero-prev"),
    n = document.getElementById("hero-next");
  if (!t.length) return;
  let r = 0,
    l = null;
  const c = (d) => {
    (t[r].classList.remove("opacity-100", "z-10"),
      t[r].classList.add("opacity-0", "z-0"),
      (r = (d + t.length) % t.length),
      t[r].classList.remove("opacity-0", "z-0"),
      t[r].classList.add("opacity-100", "z-10"),
      o && (o.textContent = String(r + 1).padStart(2, "0")));
  };
  (s &&
    s.addEventListener("click", () => {
      (a(), c(r - 1));
    }),
    n &&
      n.addEventListener("click", () => {
        (a(), c(r + 1));
      }));
  const i = () => {
      l = setInterval(() => {
        c(r + 1);
      }, 6e3);
    },
    a = () => {
      (clearInterval(l), i());
    };
  (i(),
    e.addEventListener("mouseenter", () => clearInterval(l)),
    e.addEventListener("mouseleave", () => i()));
}
function initNumberCounters() {
  const e = document.querySelectorAll(".counter-animate");
  if (!e.length) return;
  const t = new IntersectionObserver(
    (o, s) => {
      o.forEach((n) => {
        if (n.isIntersecting) {
          const r = parseInt(n.target.getAttribute("data-target") || "0", 10);
          let l = 0;
          const c = 1500,
            i = performance.now(),
            a = (d) => {
              const u = Math.min((d - i) / c, 1),
                m = Math.floor(u * r);
              ((n.target.textContent = m),
                u < 1 ? requestAnimationFrame(a) : (n.target.textContent = r));
            };
          (requestAnimationFrame(a), s.unobserve(n.target));
        }
      });
    },
    { threshold: 0.5 },
  );
  e.forEach((o) => t.observe(o));
}
function initLanguageSelector() {
  const e = document.getElementById("lang-toggle"),
    t = document.getElementById("lang-menu");
  !e ||
    !t ||
    (e.addEventListener("click", (o) => {
      (o.stopPropagation(), t.classList.toggle("hidden"));
    }),
    document.addEventListener("click", () => {
      t.classList.add("hidden");
    }));
}
