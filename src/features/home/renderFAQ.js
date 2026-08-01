import {
  FAQ,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/SectionHeading.js";

import {
  createFAQItem,
} from "../../components/common/FAQItem.js";

import {
  initFAQAccordion,
} from "./initFAQAccordion.js";

export function renderFAQ() {

  const container =
    document.getElementById("faqSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
 
"
>

<div
class="
mx-auto

max-w-7xl

px-5
py-20

sm:px-6

lg:px-8
lg:py-28
"
>

<div
class="
grid

gap-20

lg:grid-cols-[420px_1fr]
"
>

  <!-- =====================================
       LEFT CONTENT
  ====================================== -->

  <div
    class="
      lg:sticky
      lg:top-28

      h-fit
    "
  >

    ${createSectionHeading({

      badge:
        FAQ.badge,

      title:
        FAQ.title,

      description:
        FAQ.description,

    })}

    <div class="mt-10">

      <p
        class="
          leading-8

          text-[#666666]
        "
      >

        Still have questions? Our team is ready to assist you with product
        selection, quotations, export documentation and international
        logistics.

      </p>

      <a
        href="/pages/contact.html"

        class="
          group

          mt-8

          inline-flex

          items-center

          gap-3

          rounded-full

          bg-[#181818]

          px-8
          py-4

          text-sm

          font-semibold

          uppercase

          tracking-[0.18em]

          text-white

          transition-all
          duration-300

          hover:bg-[#E8720F]

          hover:-translate-y-1

          hover:shadow-[0_20px_45px_rgba(232,114,15,.25)]
        "
      >

        Contact Us

        <i
          data-lucide="arrow-right"

          class="
            h-4
            w-4

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        ></i>

      </a>

    </div>

  </div>

  <!-- =====================================
       FAQ LIST
  ====================================== -->

  <div>

    ${FAQ.questions
      .map((item, index) =>
        createFAQItem(
          item,
          index
        )
      )
      .join("")}

  </div>

</div>

</div>

</section>

`;

  window.lucide.createIcons();

  initFAQAccordion();

}
