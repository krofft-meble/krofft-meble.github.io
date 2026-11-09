(() => {
  const messages = {
    pl: {
      label: "Zgoda na pliki cookie",
      title: "Czy wyrażasz zgodę na pliki cookie?",
      text: "Zgoda pozwoli nam zapamiętać Twój wybór i załadować zewnętrzne elementy, które mogą korzystać z plików cookie. Jeśli odmówisz, opuścisz stronę i wrócisz do poprzednio odwiedzonej witryny.",
      error: "Nie udało się zapisać zgody. Sprawdź ustawienia prywatności przeglądarki i spróbuj ponownie.",
      decline: "Nie zgadzam się",
      accept: "Tak, zgadzam się",
    },
    en: {
      label: "Cookie consent",
      title: "Do you consent to cookies?",
      text: "Your consent lets us remember your choice and load external content that may use cookies. If you decline, you’ll leave this site and return to the website you visited previously.",
      error: "We couldn’t save your choice. Check your browser’s privacy settings and try again.",
      decline: "Decline",
      accept: "Accept",
    },
    de: {
      label: "Cookie-Einwilligung",
      title: "Stimmen Sie der Verwendung von Cookies zu?",
      text: "Mit Ihrer Zustimmung können wir Ihre Auswahl speichern und externe Inhalte laden, die Cookies verwenden können. Wenn Sie ablehnen, verlassen Sie diese Website und kehren zur zuvor besuchten Website zurück.",
      error: "Ihre Auswahl konnte nicht gespeichert werden. Prüfen Sie die Datenschutzeinstellungen Ihres Browsers und versuchen Sie es erneut.",
      decline: "Ablehnen",
      accept: "Zustimmen",
    },
    nb: {
      label: "Samtykke til informasjonskapsler",
      title: "Samtykker du til bruk av informasjonskapsler?",
      text: "Samtykket lar oss huske valget ditt og laste inn eksternt innhold som kan bruke informasjonskapsler. Hvis du avslår, forlater du dette nettstedet og går tilbake til nettstedet du besøkte tidligere.",
      error: "Vi kunne ikke lagre valget ditt. Kontroller personverninnstillingene i nettleseren og prøv igjen.",
      decline: "Avslå",
      accept: "Godta",
    },
  };
  const copy = messages[document.documentElement.lang] || messages.en;
  const consentKey = "krofftCookieConsent";
  const returnToKey = "krofftConsentReturnTo";
  const isExternalUrl = (value) => {
    try {
      return new URL(value).origin !== window.location.origin;
    } catch {
      return false;
    }
  };

  try {
    if (isExternalUrl(document.referrer)) {
      sessionStorage.setItem(returnToKey, document.referrer);
    }
  } catch (error) {
    console.error("Nie udało się zapisać poprzedniej strony.", error);
  }

  const loadOptionalContent = () => {
    document.querySelectorAll("[data-cookie-src]").forEach((frame) => {
      frame.src = frame.dataset.cookieSrc;
      frame.hidden = false;
      frame.previousElementSibling?.remove();
    });
  };

  try {
    if (
      localStorage.getItem(consentKey) === "accepted" ||
      localStorage.getItem("cookiesAccepted") === "true"
    ) {
      loadOptionalContent();
      return;
    }
  } catch (error) {
    console.error("Nie udało się odczytać zgody na pliki cookie.", error);
  }

  const banner = document.createElement("section");
  banner.className = "cookie-consent";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", copy.label);
  banner.innerHTML = `
    <div class="cookie-consent__content">
      <p class="cookie-consent__title">${copy.title}</p>
      <p class="cookie-consent__text">${copy.text}</p>
      <p class="cookie-consent__error" role="alert" hidden>${copy.error}</p>
    </div>
    <div class="cookie-consent__actions">
      <button class="cookie-consent__button cookie-consent__button--decline" type="button" data-consent="decline">
        ${copy.decline}
      </button>
      <button class="cookie-consent__button cookie-consent__button--accept" type="button" data-consent="accept">
        ${copy.accept}
      </button>
    </div>
  `;

  banner
    .querySelector('[data-consent="accept"]')
    .addEventListener("click", () => {
      try {
        localStorage.setItem(consentKey, "accepted");
        loadOptionalContent();
        banner.remove();
      } catch (error) {
        console.error("Nie udało się zapisać zgody na pliki cookie.", error);
        banner.querySelector(".cookie-consent__error").hidden = false;
      }
    });

  banner
    .querySelector('[data-consent="decline"]')
    .addEventListener("click", () => {
      let returnTo = "";
      try {
        returnTo = sessionStorage.getItem(returnToKey) || "";
      } catch (error) {
        console.error("Nie udało się odczytać poprzedniej strony.", error);
      }

      if (isExternalUrl(returnTo)) {
        window.location.replace(returnTo);
      } else {
        window.history.back();
      }
    });

  document.body.append(banner);
})();
