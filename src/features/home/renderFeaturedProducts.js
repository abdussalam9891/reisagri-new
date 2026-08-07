import {
  FEATURED_PRODUCTS,
} from "../../constants/featuredProducts.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createFeaturedCommodityCard,
} from "../../components/common/FeaturedCommodityCard.js";

export function renderFeaturedProducts() {

  const container =
    document.getElementById("featuredProductsSection");

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
py-8

sm:px-6
sm:py-8

lg:px-8
lg:py-12
"
>

${createSectionHeading({

  badge:
    "Featured Commodities",

  title:
    "Premium Agricultural\nProducts Ready For Export.",

  description:
    "Explore some of our most sought-after agricultural commodities, carefully sourced and prepared to meet international quality standards."

})}

<div
class="
mt-10

grid

grid-cols-1

gap-6

sm:grid-cols-2

lg:grid-cols-3

lg:auto-rows-[310px]
"
>

${FEATURED_PRODUCTS
  .map(createFeaturedCommodityCard)
  .join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
