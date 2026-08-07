import {
  ABOUT_PREVIEW,
} from "../../constants/home.js";

import {
  createAboutPreviewCard,
} from "../../components/common/AboutPreviewCard.js";

export function renderAboutPreview() {

  const container =
    document.getElementById("aboutPreviewSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
bg-white
"
>

<div
class="
mx-auto

max-w-7xl

px-5
py-8

sm:px-6
sm:py-8

lg:px-8
lg:py-12
"
>

${createAboutPreviewCard(

  ABOUT_PREVIEW

)}

</div>

</section>

`;

  window.lucide?.createIcons();

}
