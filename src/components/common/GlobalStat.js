export function createGlobalStat({

  value,

  label,

}) {

  return `

<div
class="
group

relative

text-center
"
>

<!-- Value -->

<h3
class="
font-serif

text-4xl

leading-none

text-[#181818]

transition-all
duration-300

group-hover:text-[#E8720F]

lg:text-5xl
"
>

${value}

</h3>

<!-- Label -->

<p
class="
mt-4

text-xs

font-semibold

uppercase

tracking-[0.22em]

text-[#777777]
"
>

${label}

</p>

</div>

`;

}
