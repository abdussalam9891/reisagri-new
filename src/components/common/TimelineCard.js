export function createTimelineCard(item, index) {

  const last = index === 3;

  return `

<div
class="
relative

pl-12

pb-16

${last ? "pb-0" : ""}
"

>

${
!last
? `
<div
class="
absolute

left-[15px]
top-10

w-[2px]

h-full

bg-[#E9E9E9]
"
></div>
`
: ""
}

<div
class="
absolute

left-0
top-1

flex

h-8
w-8

items-center
justify-center

rounded-full

bg-[#E8720F]

ring-8
ring-[#FFF6EE]
"
>

</div>

<span
class="
inline-block

text-sm
font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
"
>

${item.year}

</span>

<h3
class="
mt-3

font-serif

text-2xl

text-[#181818]
"
>

${item.title}

</h3>

<p
class="
mt-4

leading-7

text-[#666666]
"
>

${item.description}

</p>

</div>

`;

}
