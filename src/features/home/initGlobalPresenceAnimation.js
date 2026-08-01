export function initGlobalPresenceAnimation() {

  const section =
    document.getElementById("globalPresenceSection");

  if (!section) return;

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          animateMap();

          observer.disconnect();

        });

      },

      {
        threshold: 0.35,
      }

    );

  observer.observe(section);

}

function animateMap() {

  /* ===============================
     MARKERS
  =============================== */

  const markers =
    document.querySelectorAll(".market-marker");

  markers.forEach((marker, index) => {

    setTimeout(() => {

      marker.classList.add("active");

    }, index * 350);

  });

  /* ===============================
     ROUTES
  =============================== */

  const routes =
    document.querySelectorAll(".export-route");

  routes.forEach((route, index) => {

    setTimeout(() => {

      route.classList.add("active");

    }, 1700 + index * 250);

  });

  /* ===============================
     SHIPMENTS
  =============================== */

  const shipments =
    document.querySelectorAll(".shipment-dot");

  shipments.forEach((dot, index) => {

    setTimeout(() => {

      dot.beginElement?.();

    }, 3000 + index * 200);

  });

}
