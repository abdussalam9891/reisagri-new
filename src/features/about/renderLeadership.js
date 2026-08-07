import { createLeadershipCard } from "../../components/common/LeadershipCard.js";
import { LEADERSHIP } from "../../constants/about.js";

export function renderLeadership() {

  const container =
    document.getElementById("leadershipSection");

  if (!container) return;

  container.innerHTML = `

<section class="bg-white">

  <div
    class="
      mx-auto
      max-w-7xl

      px-5
      py-16

      sm:px-6
      sm:py-14

      lg:px-8
      lg:py-14
    "
  >

    ${LEADERSHIP
      .map(createLeadershipCard)
      .join("")}

  </div>

</section>

`;

  window.lucide?.createIcons();

}
