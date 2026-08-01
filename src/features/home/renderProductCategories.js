import {
  PRODUCT_CATEGORIES,
} from "../../constants/products.js";

import {
  createSectionHeading,
} from "../../components/common/SectionHeading.js";

import {
  createProductCategoryCard,
} from "../../components/common/ProductCategoryCard.js";

export function renderProductCategories() {

  const container =
    document.getElementById("productCategoriesSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
bg-[#F8F8F5]

"
>

<div
class="
mx-auto

max-w-7xl

px-5
py-16

sm:px-6
sm:py-20

lg:px-8
lg:py-28
"
>

${createSectionHeading({

badge:
"Our Products",

title:
"A Complete Range Of\nAgricultural Commodities.",

description:
"From premium grains to essential food commodities, REISAGRI Trading delivers reliable sourcing solutions backed by trusted supplier networks and efficient global logistics."

})}

<div
class="
mt-16

grid

gap-8

md:grid-cols-2

xl:grid-cols-3
"
>

${PRODUCT_CATEGORIES
.map(createProductCategoryCard)
.join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
