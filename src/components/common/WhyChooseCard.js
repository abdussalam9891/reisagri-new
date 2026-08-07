export function createWhyChooseCard({
  icon,
  title,
  description,
}) {
  return `
    <article
      class="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--color-secondary)]
        hover:shadow-xl
      "
    >

      <!-- Top Accent -->
      <span
        class="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-[var(--color-secondary)]
          transition-all
          duration-500
          group-hover:w-full
        "
      ></span>

      <!-- Icon -->
      <div
        class="
          mb-8
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[rgba(199,154,59,.12)]
          transition-all
          duration-500
          group-hover:bg-[var(--color-secondary)]
        "
      >
        <i
          data-lucide="${icon}"
          class="
            h-8
            w-8
            text-[var(--color-secondary)]
            transition-all
            duration-500
            group-hover:text-white
          "
        ></i>
      </div>

      <!-- Content -->
      <h3
        class="
          mb-4
          font-display
          text-2xl
          leading-tight
          text-[var(--text-heading)]
        "
      >
        ${title}
      </h3>

      <p
        class="
          leading-8
          text-[var(--text-body)]
        "
      >
        ${description}
      </p>

    </article>
  `;
}
