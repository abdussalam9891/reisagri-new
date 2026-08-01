const SCROLL_THRESHOLD = 60;

export function initScroll() {

  const navbar = document.getElementById("navbar");
  const header = document.getElementById("siteHeader");

  if (!navbar || !header) return;

  const theme =
    header.dataset.theme || "light";

  const navbarItems =
    navbar.querySelectorAll(".navbar-text");

  const navbarLogo =
    document.getElementById("navbarLogo");

  const navbarCTA =
    document.getElementById("navbarCTA");

  let ticking = false;

  function updateNavbar() {

    const scrolled =
      window.scrollY > SCROLL_THRESHOLD;

    /* =====================================
       HEIGHT
    ====================================== */

    navbar.classList.toggle(
      "h-20",
      scrolled
    );

    navbar.classList.toggle(
      "h-24",
      !scrolled
    );

    /* =====================================
       SCROLLED
    ====================================== */

    if (scrolled) {

      navbar.classList.remove(
        "bg-transparent",
        "border-transparent"
      );

      navbar.classList.add(
        "bg-[#181818]/95",
        "backdrop-blur-2xl",
        "shadow-2xl",
        "border-white/10"
      );

      navbarItems.forEach((item) => {

        item.classList.remove(
          "text-[#181818]",
          "text-[#181818]/90"
        );

        item.classList.add(
          "text-white"
        );

      });

      if (navbarLogo) {

        navbarLogo.src =
          "/public/assets/reisagri-logo-white.png";

      }

      if (navbarCTA) {

        navbarCTA.classList.remove(
          "text-[#181818]"
        );

        navbarCTA.classList.add(
          "text-white"
        );

      }

    }

    /* =====================================
       TOP OF PAGE
    ====================================== */

    else {

      navbar.classList.remove(
        "bg-[#181818]/95",
        "backdrop-blur-2xl",
        "shadow-2xl",
        "border-white/10"
      );

      navbar.classList.add(
        "bg-transparent",
        "border-transparent"
      );

      if (theme === "dark") {

        navbarItems.forEach((item) => {

          item.classList.remove(
            "text-white"
          );

          item.classList.add(
            "text-[#181818]",
            "hover:bg-black/5"
          );

        });

        if (navbarLogo) {

          navbarLogo.src =
            "/public/assets/reisagri-logo-black.png";

        }

        if (navbarCTA) {

          navbarCTA.classList.remove(
            "text-white"
          );

          navbarCTA.classList.add(
            "text-[#181818]"
          );

        }

      }

      else {

        navbarItems.forEach((item) => {

          item.classList.remove(
            "text-[#181818]"
          );

          item.classList.add(
            "text-white"
          );

        });

        if (navbarLogo) {

          navbarLogo.src =
            "/public/assets/reisagri-logo-white.png";

        }

        if (navbarCTA) {

          navbarCTA.classList.remove(
            "text-[#181818]"
          );

          navbarCTA.classList.add(
            "text-white"
          );

        }

      }

    }

    ticking = false;

  }

  function handleScroll() {

    if (!ticking) {

      requestAnimationFrame(updateNavbar);

      ticking = true;

    }

  }

  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true,
    }
  );

  updateNavbar();

}
