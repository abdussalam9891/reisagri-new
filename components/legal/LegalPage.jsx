import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/constants/site";

const pad = (n) => String(n).padStart(2, "0");

export default function LegalPage({ content }) {
  const { title, intro, lastUpdated, numbered, sections } = content;

  return (
    <main>
      {/* Hero */}
      <section className="reveal border-b border-[#E5E7EB] bg-[#F8F8F5] py-14">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8720F]">Legal</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#181818] md:text-5xl">{title}</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5E6663]">{intro}</p>
          <p className="mt-8 text-sm text-[#8A8A8A]">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl space-y-16 px-6 py-14">
          {sections.map((section, index) => (
            <section key={section.title} className="reveal">
              {numbered === "badge" ? (
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF6EE] text-sm font-bold text-[#E8720F]">
                    {pad(index + 1)}
                  </div>
                  <h2 className="font-serif text-3xl text-[#181818]">{section.title}</h2>
                </div>
              ) : (
                <h2 className="font-serif text-3xl text-[#181818]">
                  {index + 1}. {section.title}
                </h2>
              )}

              {section.paragraphs?.map((p, i) => (
                <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-8 text-[#555555]`}>
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-[#555555]">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.contactIntro && (
                <p className="mt-6 max-w-3xl leading-8 text-[#666666]">{section.contactIntro}</p>
              )}

              {section.contactCard && <ContactCard />}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactCard() {
  const iconTile = "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF6EE]";
  const link = "mt-4 inline-block text-[#E8720F] transition hover:underline";

  return (
    <div className="group relative mt-10 overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white p-8 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-[#E8720F]/50 hover:shadow-[0_18px_45px_rgba(232,114,15,.12)]">
      <div className="absolute left-0 top-0 h-1 w-0 bg-[#E8720F] transition-all duration-500 group-hover:w-full" />
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className={iconTile}>
            <MapPin className="h-6 w-6 text-[#E8720F]" />
          </div>
          <h3 className="text-lg font-semibold text-[#181818]">Office</h3>
          <p className="mt-4 leading-8 text-[#666666]">
            {CONTACT.addressLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < CONTACT.addressLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div>
          <div className={iconTile}>
            <Mail className="h-6 w-6 text-[#E8720F]" />
          </div>
          <h3 className="text-lg font-semibold text-[#181818]">Email</h3>
          <a href={`mailto:${CONTACT.email}`} className={link}>
            {CONTACT.email}
          </a>
        </div>
        <div>
          <div className={iconTile}>
            <Phone className="h-6 w-6 text-[#E8720F]" />
          </div>
          <h3 className="text-lg font-semibold text-[#181818]">Phone</h3>
          <a href={CONTACT.phoneHref} className={link}>
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
