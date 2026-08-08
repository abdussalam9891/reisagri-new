export function createExportPackaging(data) {

  return `

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

          py-20

          sm:px-6
          sm:py-24

          lg:px-8
          lg:py-28
        "
      >

        <!-- ========================================= -->
        <!-- Header -->
        <!-- ========================================= -->

        <div
          class="
            max-w-3xl
          "
        >

          <!-- Badge -->

          <div
            class="
              reveal
              reveal-left

              inline-flex

              rounded-full

              bg-[#FFF3E8]

              px-4
              py-2

              text-[10px]

              font-semibold

              uppercase

              tracking-[0.18em]

              text-[#E8720F]

              sm:px-5
              sm:py-2

              sm:text-xs
            "
          >
            ${data.badge}
          </div>


          <!-- Heading -->

          <h2
            class="
              reveal
              reveal-left

              mt-6

              max-w-2xl

              font-serif

              text-3xl

              leading-[1.08]

              tracking-[-0.02em]

              text-[#181818]

              sm:text-4xl

              lg:text-5xl
            "
          >
            ${data.title}
          </h2>


          <!-- Description -->

          <p
            class="
              reveal
              reveal-left

              mt-6

              max-w-2xl

              text-base

              leading-7

              text-[#666666]

              sm:mt-7

              sm:text-lg

              sm:leading-8
            "
          >
            ${data.description}
          </p>

        </div>


        <!-- ========================================= -->
        <!-- Export / Packaging Details -->
        <!-- ========================================= -->

        <div
          class="
            reveal
            reveal-up

            mt-16

            border-t
            border-[#E8ECE7]

            lg:mt-20
          "
        >

          ${data.cards
            .map(createRow)
            .join("")}

        </div>

      </div>

    </section>

  `;
}


/* ========================================= */
/* Export / Packaging Row                    */
/* ========================================= */

function createRow(card) {

  return `

    <div
      class="
        group

        grid

        gap-6

        border-b
        border-[#E8ECE7]

        py-8

        transition-colors
        duration-300

        lg:grid-cols-[240px_1fr]

        lg:items-start

        lg:gap-16

        lg:py-10
      "
    >

      <!-- ===================================== -->
      <!-- Title -->
      <!-- ===================================== -->

      <div
        class="
          flex
          items-center
          gap-4
        "
      >

        <!-- Icon -->

        <div
          class="
            flex

            h-11
            w-11

            shrink-0

            items-center
            justify-center

            rounded-full

            bg-[#FFF3E8]

            transition-all
            duration-300

            group-hover:bg-[#E8720F]

            group-hover:scale-105
          "
        >

          <i
            data-lucide="${card.icon}"

            class="
              h-5
              w-5

              text-[#E8720F]

              transition-colors
              duration-300

              group-hover:text-white
            "
          ></i>

        </div>


        <h3
          class="
            font-serif

            text-2xl

            leading-tight

            text-[#181818]

            sm:text-3xl
          "
        >
          ${card.title}
        </h3>

      </div>


      <!-- ===================================== -->
      <!-- Details -->
      <!-- ===================================== -->

      <ul
        class="
          grid

          gap-x-8
          gap-y-4

          sm:grid-cols-2

          lg:grid-cols-2
        "
      >

        ${card.items
          .map(
            item => `

              <li
                class="
                  flex

                  items-start

                  gap-3
                "
              >

                <!-- Check -->

                <span
                  class="
                    mt-1

                    flex

                    h-5
                    w-5

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#FFF3E8]
                  "
                >

                  <i
                    data-lucide="check"

                    class="
                      h-3
                      w-3

                      text-[#E8720F]
                    "
                  ></i>

                </span>


                <!-- Text -->

                <span
                  class="
                    text-sm

                    leading-6

                    text-[#555555]

                    sm:text-base

                    sm:leading-7
                  "
                >
                  ${item}
                </span>

              </li>

            `
          )
          .join("")}

      </ul>

    </div>

  `;
}
