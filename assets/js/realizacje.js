(() => {
  const createProject = (project) => ({
    ...project,
    cover: "1.webp",
    images: Array.from(
      { length: project.imageCount },
      (_, index) => String(index + 1) + ".webp",
    ),
  });

  const projects = [
    createProject({
      slug: "chwarzno-gdynia",
      title: "Chwarzno",
      location: "GDYNIA",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Zabudowy meblowe wykonane na wymiar do apartamentu w Gdyni Chwarznie.",
      scope: "Kuchnia, hol i łazienka.",
      imageCount: 3,
    }),
    createProject({
      slug: "grobla-gdansk",
      title: "Grobla",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Realizacja mebli na wymiar do apartamentu przy ulicy Grobla.",
      scope: "Zabudowy i wyposażenie wnętrza.",
      imageCount: 8,
    }),
    createProject({
      slug: "letnica-gdansk",
      title: "Letnica",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description: "Meble na wymiar do apartamentu w gdańskiej Letnicy.",
      scope: "Zabudowy i wyposażenie apartamentu.",
      imageCount: 10,
    }),
    createProject({
      slug: "przymorze-gdansk",
      title: "Przymorze",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Indywidualne wyposażenie mieszkania dopasowane do potrzeb domowników.",
      scope: "Kuchnia, garderoba, sypialnia i łazienka.",
      imageCount: 6,
    }),
    createProject({
      slug: "starowiejska",
      title: "Starowiejska",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Zabudowy meblowe na wymiar dopasowane do charakteru apartamentu.",
      scope: "Meble i zabudowy do wnętrza mieszkalnego.",
      imageCount: 12,
    }),
    createProject({
      slug: "wrzeszcz-gdansk",
      title: "Wrzeszcz",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Meble na wymiar zaprojektowane z myślą o spójnym i funkcjonalnym wnętrzu.",
      scope: "Zabudowy meblowe w apartamencie.",
      imageCount: 9,
    }),
    createProject({
      slug: "garderoba-gdansk-stare-miasto",
      title: "Garderoba",
      location: "GDAŃSK STARE MIASTO",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description:
        "Garderoba i zabudowy wykonane na wymiar w apartamencie na Starym Mieście.",
      scope: "Zabudowy do przechowywania.",
      imageCount: 5,
    }),
    createProject({
      slug: "kuchnia-gdansk-jasien",
      title: "Kuchnia",
      location: "GDAŃSK JASIEŃ",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description: "Kuchnia na wymiar zaprojektowana jako część rezydencji.",
      scope: "Zabudowa kuchenna.",
      imageCount: 4,
    }),
    createProject({
      slug: "bernadowska-gdynia",
      title: "Bernadowska",
      location: "GDYNIA",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description: "Meble na wymiar do rezydencji w Gdyni.",
      scope: "Zabudowy i elementy wyposażenia wnętrza.",
      imageCount: 5,
    }),
    createProject({
      slug: "stolema-gdansk",
      title: "Stolema",
      location: "GDAŃSK",
      category: "apartamenty",
      categoryLabel: "Apartamenty i rezydencje",
      description: "Zabudowy meblowe wykonane na wymiar do rezydencji.",
      scope: "Meble i zabudowy w przestrzeni mieszkalnej.",
      imageCount: 8,
    }),
    createProject({
      slug: "barbershop-pruszcz-gdanski",
      title: "Barbershop",
      location: "PRUSZCZ GDAŃSKI",
      category: "komercyjne",
      categoryLabel: "Wnętrza komercyjne",
      description: "Zabudowy i wyposażenie wnętrza salonu barberskiego.",
      scope: "Meble na wymiar do przestrzeni usługowej.",
      imageCount: 7,
    }),
    createProject({
      slug: "drzwi",
      title: "Drzwi i zabudowy",
      location: "GDAŃSK",
      category: "drzwi",
      categoryLabel: "Drzwi i zabudowy",
      description:
        "Drzwi i zabudowy dopasowane do indywidualnego projektu wnętrza.",
      scope: "Drzwi oraz zabudowy na wymiar.",
      imageCount: 2,
    }),
  ];

  const locale = document.documentElement.lang;
  const projectCopy = {
    en: {
      categories: {
        apartments: "Apartments & residences",
        commercial: "Commercial interiors",
        doors: "Doors & built-ins",
      },
      titles: { wardrobe: "Wardrobe", kitchen: "Kitchen", doors: "Doors & built-ins" },
      details: {
        "chwarzno-gdynia": ["Made-to-measure fitted furniture for an apartment in Chwarzno, Gdynia.", "Kitchen, hallway and bathroom."],
        "grobla-gdansk": ["Made-to-measure furniture for an apartment on Grobla Street.", "Built-ins and interior furnishings."],
        "letnica-gdansk": ["Made-to-measure furniture for an apartment in Gdańsk’s Letnica district.", "Built-ins and apartment furnishings."],
        "przymorze-gdansk": ["Custom furnishings tailored to the residents’ needs.", "Kitchen, wardrobe, bedroom and bathroom."],
        starowiejska: ["Bespoke fitted furniture tailored to the character of the apartment.", "Furniture and built-ins for a residential interior."],
        "wrzeszcz-gdansk": ["Bespoke furniture designed for a cohesive, functional interior.", "Fitted furniture in an apartment."],
        "garderoba-gdansk-stare-miasto": ["A bespoke wardrobe and fitted storage in an Old Town apartment.", "Storage built-ins."],
        "kuchnia-gdansk-jasien": ["A bespoke kitchen designed as part of a residence.", "Kitchen fit-out."],
        "bernadowska-gdynia": ["Made-to-measure furniture for a residence in Gdynia.", "Built-ins and interior furnishings."],
        "stolema-gdansk": ["Made-to-measure fitted furniture for a residence.", "Furniture and built-ins for a home."],
        "barbershop-pruszcz-gdanski": ["Fitted furniture and furnishings for a barbershop.", "Bespoke furniture for a commercial space."],
        drzwi: ["Doors and fitted elements tailored to an individual interior design.", "Doors and made-to-measure built-ins."],
      },
    },
    de: {
      categories: {
        apartments: "Apartments & Residenzen",
        commercial: "Gewerbliche Innenräume",
        doors: "Türen & Einbauten",
      },
      titles: { wardrobe: "Ankleidezimmer", kitchen: "Küche", doors: "Türen & Einbauten" },
      details: {
        "chwarzno-gdynia": ["Maßgefertigte Einbaumöbel für ein Apartment in Chwarzno, Gdynia.", "Küche, Flur und Bad."],
        "grobla-gdansk": ["Maßgefertigte Möbel für ein Apartment in der Grobla-Straße.", "Einbauten und Innenausstattung."],
        "letnica-gdansk": ["Maßgefertigte Möbel für ein Apartment im Danziger Stadtteil Letnica.", "Einbauten und Apartmentausstattung."],
        "przymorze-gdansk": ["Individuelle Einrichtung, abgestimmt auf die Bedürfnisse der Bewohner.", "Küche, Ankleidezimmer, Schlafzimmer und Bad."],
        starowiejska: ["Maßgefertigte Einbaumöbel, passend zum Charakter des Apartments.", "Möbel und Einbauten für Wohnräume."],
        "wrzeszcz-gdansk": ["Maßgefertigte Möbel für ein stimmiges und funktionales Interieur.", "Einbaumöbel in einem Apartment."],
        "garderoba-gdansk-stare-miasto": ["Maßgefertigtes Ankleidezimmer und Einbauschränke in einem Apartment in der Altstadt.", "Einbauten für Stauraum."],
        "kuchnia-gdansk-jasien": ["Eine maßgefertigte Küche als Teil einer Residenz.", "Kücheneinbau."],
        "bernadowska-gdynia": ["Maßgefertigte Möbel für eine Residenz in Gdynia.", "Einbauten und Innenausstattung."],
        "stolema-gdansk": ["Maßgefertigte Einbaumöbel für eine Residenz.", "Möbel und Einbauten im Wohnbereich."],
        "barbershop-pruszcz-gdanski": ["Einbauten und Innenausstattung für einen Barbershop.", "Maßmöbel für Gewerberäume."],
        drzwi: ["Türen und Einbauten passend zu einem individuellen Innenraumkonzept.", "Türen und Einbauten nach Maß."],
      },
    },
    nb: {
      categories: {
        apartments: "Leiligheter og residens­er",
        commercial: "Kommersielt interiør",
        doors: "Dører og innredninger",
      },
      titles: { wardrobe: "Garderobe", kitchen: "Kjøkken", doors: "Dører og innredninger" },
      details: {
        "chwarzno-gdynia": ["Innredning på mål til en leilighet i Chwarzno i Gdynia.", "Kjøkken, gang og bad."],
        "grobla-gdansk": ["Møbler på mål til en leilighet i Grobla-gaten.", "Innredninger og interiørmøbler."],
        "letnica-gdansk": ["Møbler på mål til en leilighet i bydelen Letnica i Gdańsk.", "Innredninger og møbler til leiligheten."],
        "przymorze-gdansk": ["Individuell innredning tilpasset beboernes behov.", "Kjøkken, garderobe, soverom og bad."],
        starowiejska: ["Innredning på mål tilpasset leilighetens særpreg.", "Møbler og innredninger til boligen."],
        "wrzeszcz-gdansk": ["Møbler på mål utformet for et helhetlig og funksjonelt interiør.", "Innredning i en leilighet."],
        "garderoba-gdansk-stare-miasto": ["Garderobe og innredning på mål i en leilighet i gamlebyen.", "Oppbevaringsinnredning."],
        "kuchnia-gdansk-jasien": ["Kjøkken på mål utformet som en del av en residens.", "Kjøkkeninnredning."],
        "bernadowska-gdynia": ["Møbler på mål til en residens i Gdynia.", "Innredninger og interiørelementer."],
        "stolema-gdansk": ["Innredning på mål til en residens.", "Møbler og innredninger i boligen."],
        "barbershop-pruszcz-gdanski": ["Innredning og møbler til en barbersalong.", "Møbler på mål til et næringslokale."],
        drzwi: ["Dører og innredninger tilpasset en individuell interiørplan.", "Dører og innredning på mål."],
      },
    },
  };
  const localizedProjects = projectCopy[locale];
  if (localizedProjects) {
    projects.forEach((project) => {
      const details = localizedProjects.details[project.slug];
      project.categoryLabel = localizedProjects.categories[project.category];
      project.description = details[0];
      project.scope = details[1];
      if (project.slug === "garderoba-gdansk-stare-miasto") {
        project.title = localizedProjects.titles.wardrobe;
      } else if (project.slug === "kuchnia-gdansk-jasien") {
        project.title = localizedProjects.titles.kitchen;
      } else if (project.slug === "drzwi") {
        project.title = localizedProjects.titles.doors;
      }
    });
  }
  const interfaceCopy = {
    pl: { gallery: "Otwórz galerię", photos: "ZDJĘĆ", photo: "zdjęcie", searchLocale: "pl" },
    en: { gallery: "Open gallery", photos: "PHOTOS", photo: "photo", searchLocale: "en" },
    de: { gallery: "Galerie öffnen", photos: "FOTOS", photo: "Foto", searchLocale: "de" },
    nb: { gallery: "Åpne galleriet", photos: "BILDER", photo: "bilde", searchLocale: "nb" },
  }[locale] || { gallery: "Open gallery", photos: "PHOTOS", photo: "photo", searchLocale: "en" };

  const grid = document.getElementById("realizacje-grid");
  const filterButtons = [
    ...document.querySelectorAll(".realizacje-filter-btn"),
  ];
  const searchInput = document.getElementById("realizacje-search");
  const emptyState = document.getElementById("realizacje-empty");
  const dialog = document.getElementById("project-detail-dialog");
  const zoomDialog = document.getElementById("project-image-zoom-dialog");

  if (
    !grid ||
    !filterButtons.length ||
    !searchInput ||
    !emptyState ||
    !dialog ||
    !zoomDialog
  ) {
    return;
  }

  const modalFields = {
    category: document.getElementById("modal-project-category"),
    title: document.getElementById("modal-project-title"),
    location: document.getElementById("modal-project-loc"),
    description: document.getElementById("modal-project-desc"),
    scope: document.getElementById("modal-project-scope"),
    image: document.getElementById("modal-project-img"),
    gallery: document.getElementById("modal-project-gallery"),
  };
  const closeButton = document.getElementById("project-detail-close");
  const zoomButton = document.getElementById("modal-project-image-zoom");
  const zoomCloseButton = document.getElementById("project-image-zoom-close");
  const zoomImage = document.getElementById("project-image-zoom-img");
  const filters = new URLSearchParams(window.location.search);
  const requestedCategory = filters.get("cat");
  let activeCategory = filterButtons.some(
    (button) => button.dataset.filter === requestedCategory,
  )
    ? requestedCategory
    : "all";

  const imageUrl = (project, filename) =>
    encodeURI(`/assets/img/realizacje/${project.slug}/${filename}`);

  const createProjectCard = (project) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "project-card group relative block w-full overflow-hidden bg-black text-left card-border-glow cursor-pointer transition-all duration-300";
    card.dataset.category = project.category;
    card.dataset.categoryLabel = project.categoryLabel;
    card.dataset.title = project.title;
    card.dataset.location = project.location;
    card.dataset.desc = project.description;
    card.dataset.scope = project.scope;
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `${interfaceCopy.gallery}: ${project.title}`);

    const imageFrame = document.createElement("span");
    imageFrame.className = "block aspect-[4/3] overflow-hidden zoom-card";

    const image = document.createElement("img");
    image.src = imageUrl(project, project.cover);
    image.alt = project.title;
    image.loading = "lazy";
    image.className =
      "w-full h-full object-cover filter brightness-90 transition-all group-hover:brightness-100";
    imageFrame.append(image);

    const caption = document.createElement("span");
    caption.className =
      "absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 sm:p-6";

    const text = document.createElement("span");
    text.className = "min-w-0";

    const title = document.createElement("span");
    title.className =
      "block font-serif text-xl sm:text-2xl text-white font-normal transition-colors group-hover:text-brand-gold";
    title.textContent = project.title;

    const location = document.createElement("span");
    location.className =
      "mt-1 block text-[10px] uppercase tracking-[0.25em] text-gray-300 font-sans";
    location.textContent = project.location;
    text.append(title, location);

    const count = document.createElement("span");
    count.className =
      "ml-3 shrink-0 text-[10px] uppercase tracking-wider text-gray-200";
    count.textContent = `${project.images.length} ${interfaceCopy.photos}`;

    caption.append(text, count);
    card.append(imageFrame, caption);
    return card;
  };

  const cards = projects.map(createProjectCard);
  grid.replaceChildren(...cards);

  const updateResults = () => {
    const query = searchInput.value.trim().toLocaleLowerCase(interfaceCopy.searchLocale);
    let visibleCards = 0;

    cards.forEach((card) => {
      const matchesCategory =
        activeCategory === "all" || card.dataset.category === activeCategory;
      const matchesQuery =
        !query ||
        [
          card.dataset.title,
          card.dataset.location,
          card.dataset.categoryLabel,
          card.dataset.desc,
          card.dataset.scope,
        ]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase(interfaceCopy.searchLocale)
          .includes(query);
      const visible = matchesCategory && matchesQuery;

      card.hidden = !visible;
      if (visible) visibleCards += 1;
    });

    emptyState.classList.toggle("hidden", visibleCards !== 0);
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === activeCategory;
      button.setAttribute("aria-pressed", String(selected));
      button.classList.toggle("text-black", selected);
      button.classList.toggle("font-semibold", selected);
      button.classList.toggle("border-b-2", selected);
      button.classList.toggle("border-black", selected);
      button.classList.toggle("text-gray-500", !selected);
      button.classList.toggle("font-normal", !selected);
    });
  };

  const openProject = (project) => {
    modalFields.category.textContent = project.categoryLabel;
    modalFields.title.textContent = project.title;
    modalFields.location.textContent = project.location;
    modalFields.description.textContent = project.description;
    modalFields.scope.textContent = project.scope;

    const showImage = (index) => {
      const filename = project.images[index];
      modalFields.image.src = imageUrl(project, filename);
      modalFields.image.alt = `${project.title} – ${interfaceCopy.photo} ${index + 1}`;
      modalFields.gallery.querySelectorAll("button").forEach((thumbnail, i) => {
        const selected = i === index;
        thumbnail.setAttribute("aria-pressed", String(selected));
        thumbnail.classList.toggle("border-brand-gold", selected);
        thumbnail.classList.toggle("opacity-60", !selected);
      });
    };

    modalFields.gallery.replaceChildren(
      ...project.images.map((filename, index) => {
        const thumbnail = document.createElement("button");
        thumbnail.type = "button";
        thumbnail.className =
          "aspect-square overflow-hidden border-2 border-transparent transition-opacity hover:opacity-100";
        thumbnail.setAttribute(
          "aria-label",
          `${interfaceCopy.gallery} ${index + 1}: ${project.title}`,
        );
        thumbnail.setAttribute("aria-pressed", String(index === 0));

        const image = document.createElement("img");
        image.src = imageUrl(project, filename);
        image.alt = "";
        image.loading = "lazy";
        image.className = "h-full w-full object-cover";
        thumbnail.append(image);
        thumbnail.addEventListener("click", () => showImage(index));
        return thumbnail;
      }),
    );

    showImage(0);
    dialog.showModal();
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filter;
      updateResults();
    });
  });

  searchInput.addEventListener("input", updateResults);

  cards.forEach((card, index) => {
    card.addEventListener("click", () => openProject(projects[index]));
  });

  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  zoomButton?.addEventListener("click", () => {
    zoomImage.src = modalFields.image.src;
    zoomImage.alt = modalFields.image.alt;
    zoomDialog.showModal();
  });
  zoomCloseButton?.addEventListener("click", () => zoomDialog.close());
  zoomDialog.addEventListener("click", (event) => {
    if (event.target === zoomDialog) zoomDialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && zoomDialog.open) {
      zoomDialog.close();
      return;
    }
    if (event.key === "Escape" && dialog.open) dialog.close();
  });

  updateResults();
})();
