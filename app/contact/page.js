import ContactForm from "@/components/contact/ContactForm";
import { ArrowLongRight, WhatsAppIcon } from "@/components/common/icons";
import { CONTACT } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Contact Us | Reis Agri Trading - Agricultural Commodity Exporter" },
  description:
    "Contact Reis Agri Trading for agricultural commodity sourcing, bulk export enquiries, international trade partnerships and reliable global supply chain solutions.",
  keywords:
    "Reis Agri Trading, REISAGRI, Contact, Agricultural Commodity Exporter, Rice Exporter India, Sugar Exporter, Spices Exporter, Bulk Export, International Trade",
  path: "/contact",
  ogTitle: "Contact Reis Agri Trading",
  ogDescription:
    "Connect with Reis Agri Trading for agricultural commodity sourcing, export solutions and long-term business partnerships.",
  twitterDescription:
    "Get in touch with Reis Agri Trading for export enquiries, sourcing solutions and agricultural commodity trading.",
});

const Address = () =>
  CONTACT.addressLines.map((line, i) => (
    <span key={line}>
      {line}
      {i < CONTACT.addressLines.length - 1 && <br />}
    </span>
  ));

const darkPill =
  "mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#181818] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#E8720F]";
const lightCard =
  "reveal flex flex-col rounded-[28px] border border-[#E8ECE7] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E8720F] hover:shadow-xl";
const iconCircle = "flex h-14 w-14 items-center justify-center rounded-full bg-[#181818]/10 text-[#181818]";

const CONTACT_FAQS = [
  {
    q: "Which countries do you export to?",
    a: "We primarily serve buyers across Africa while also supporting importers in other international markets based on requirements.",
  },
  {
    q: "Can I request a customized quotation?",
    a: "Yes. Share your required product, quantity, destination country and packaging preferences and we'll prepare a tailored quotation.",
  },
  {
    q: "Do you support bulk orders?",
    a: "Absolutely. REISAGRI specializes in large-scale international agricultural commodity exports.",
  },
  {
    q: "How quickly will I receive a response?",
    a: "Most enquiries receive a response within one business day.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="overflow-hidden bg-white">
        <div className="reveal reveal-up mx-auto max-w-5xl px-6 pb-14 pt-24 text-center sm:px-8 sm:pt-28 lg:pb-20 lg:pt-32">
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-[#181818] sm:mt-6 sm:text-4xl lg:text-5xl">
            Let&apos;s Build <span className="text-[#E8720F]">Reliable</span> Global Trade Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5E6663] sm:mt-7 sm:text-lg sm:leading-8">
            Whether you&apos;re looking to source agricultural commodities, discuss bulk export
            requirements or explore long-term business partnerships, our team is ready to assist you
            with dependable solutions tailored to your needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-full bg-[#181818] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8720F] hover:shadow-[0_12px_30px_rgba(232,114,15,.18)] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
            >
              Request A Quote
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ReisAgri on WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#181818] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8720F] hover:text-[#E8720F] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
            >
              <span>Chat On WhatsApp</span>
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="reveal mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mt-4 font-serif text-4xl text-[#181818] md:text-5xl">Choose The Fastest Way To Reach REISAGRI</h2>
            <p className="mt-6 leading-8 text-[#5E6663]">
              Whether you need pricing, sourcing assistance or export guidance, our team is ready to help.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className={lightCard}>
              <div className={iconCircle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0L12 13.5 2.25 7.5m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#181818]">Email Us</h3>
              <p className="mt-4 flex-1 leading-7 text-[#5E6663]">
                For quotations, sourcing enquiries and international business partnerships.
              </p>
              <a href={`mailto:${CONTACT.email}`} className={darkPill}>
                Send Email
                <ArrowLongRight />
              </a>
            </div>

            <div className={lightCard}>
              <div className={iconCircle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372a1.5 1.5 0 00-1.11-1.449l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97.97a12.042 12.042 0 01-5.419-5.419l.97-.97a1.5 1.5 0 00.417-1.465L7.944 5.36A1.5 1.5 0 006.495 4.25H5.123a1.5 1.5 0 00-1.5 1.5Z" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#181818]">Call Our Team</h3>
              <p className="mt-4 flex-1 leading-7 text-[#5E6663]">
                Speak directly with our export specialists regarding sourcing, pricing, logistics and
                international trade enquiries.
              </p>
              <a href={CONTACT.phoneHref} className={darkPill}>
                Call Now
                <ArrowLongRight />
              </a>
            </div>

            <div className={lightCard}>
              <div className={iconCircle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#181818]">Visit Our Office</h3>
              <p className="mt-4 flex-1 leading-7 text-[#5E6663]">
                Meet our export team at our New Delhi headquarters for business discussions, sourcing
                consultations and partnership opportunities.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#181818]">
                <Address />
              </p>
              <a
                href="https://maps.google.com/?q=21-C+Opposite+Living+Style+Mall+Pocket+6+Jasola+Vihar+New+Delhi+110025"
                target="_blank"
                rel="noopener noreferrer"
                className={darkPill}
              >
                Get Directions
                <ArrowLongRight />
              </a>
            </div>

            <div className="reveal flex flex-col rounded-[28px] bg-[#181818] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8720F] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7">
                  <path d="M16 3C8.83 3 3 8.72 3 15.78c0 2.54.74 4.99 2.14 7.11L3.5 29l6.32-1.61A13.1 13.1 0 0 0 16 28.56c7.17 0 13-5.72 13-12.78S23.17 3 16 3Zm0 23.12a10.9 10.9 0 0 1-5.57-1.53l-.4-.24-3.75.95 1-3.63-.26-.42a10.53 10.53 0 0 1-1.63-5.47C5.39 10.1 10.06 5.5 16 5.5s10.61 4.6 10.61 10.28S21.94 26.12 16 26.12Zm5.88-7.74c-.32-.16-1.9-.93-2.2-1.04-.29-.1-.5-.16-.71.16s-.82 1.03-1 1.24c-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.57-1.86-1.76-2.18-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.69-.97-2.32-.26-.61-.53-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.35 5.38 4.69.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl">WhatsApp Business</h3>
              <p className="mt-4 flex-1 leading-7 text-white/80">
                Need a quick quotation or sourcing assistance? Chat directly with our export team for
                faster communication.
              </p>
              <div className="mt-6 inline-flex w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]">
                Usually Replies Within A Few Hours
              </div>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8720F] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#181818]"
              >
                Chat Now
                <ArrowLongRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="scroll-mt-20 bg-[#F8F8F5]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-14 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="reveal reveal-left rounded-[32px] bg-white p-8 shadow-xs lg:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E8720F]">Business Enquiry</span>
            <h2 className="mt-4 font-serif text-4xl text-[#181818]">Send Us A Message</h2>
            <p className="mt-5 leading-8 text-[#5E6663]">
              Tell us about your sourcing requirements and our export team will get back to you with
              the most suitable solution.
            </p>
            <ContactForm />
          </div>

          <aside className="reveal reveal-right rounded-[32px] bg-[#181818] p-10 text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E8720F]">Export Support</span>
            <h3 className="mt-4 font-serif text-4xl">Helping Global Buyers Source With Confidence.</h3>
            <p className="mt-8 leading-8 text-white/80">
              Whether you&apos;re placing your first shipment or managing ongoing procurement, our team
              is here to provide reliable sourcing, competitive pricing and efficient logistics support.
            </p>
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="font-semibold uppercase tracking-[0.18em] text-[#E8720F]">Business Hours</h4>
                <p className="mt-3 text-white/80">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM (IST)
                </p>
              </div>
              <div>
                <h4 className="font-semibold uppercase tracking-[0.18em] text-[#E8720F]">Email</h4>
                <p className="mt-3 text-white/80">{CONTACT.email}</p>
              </div>
              <div>
                <h4 className="font-semibold uppercase tracking-[0.18em] text-[#E8720F]">Phone</h4>
                <p className="mt-3 text-white/80">{CONTACT.phoneDisplay}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Office */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="reveal reveal-up mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mt-4 font-serif text-4xl text-[#181818] md:text-5xl">Let&apos;s Meet In Person</h2>
            <p className="mt-6 leading-8 text-[#5E6663]">
              Our New Delhi headquarters serves as the center for international sourcing, export
              coordination and customer support. We welcome business meetings and partnership
              discussions by appointment.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
            <div className="reveal reveal-left rounded-[30px] border border-[#E8ECE7] bg-[#F8F8F5] p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8720F]">Headquarters</span>
              <h3 className="mt-4 font-serif text-3xl text-[#181818]">REISAGRI</h3>

              <div className="mt-10">
                <h4 className="font-semibold text-[#181818]">Office Address</h4>
                <p className="mt-3 leading-8 text-[#5E6663]">
                  <Address />
                </p>
              </div>
              <div className="mt-10">
                <h4 className="font-semibold text-[#181818]">Phone</h4>
                <a href={CONTACT.phoneHref} className="mt-3 inline-block text-[#E8720F] transition hover:underline">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="mt-10">
                <h4 className="font-semibold text-[#181818]">Email</h4>
                <a href={`mailto:${CONTACT.email}`} className="mt-3 inline-block text-[#E8720F] transition hover:underline">
                  {CONTACT.email}
                </a>
              </div>
              <div className="mt-10">
                <h4 className="font-semibold text-[#181818]">Business Hours</h4>
                <p className="mt-3 leading-8 text-[#5E6663]">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM (IST)
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Living+Style+Mall+Jasola+New+Delhi+110025"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#181818] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8720F]"
              >
                Get Directions
                <ArrowLongRight />
              </a>
            </div>

            <div className="reveal reveal-right overflow-hidden rounded-[30px] shadow-xl">
              <iframe
                title="Reis Agri Trading office location"
                src="https://www.google.com/maps?q=Living+Style+Mall+Jasola+New+Delhi+110025&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 640 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="reveal text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E8720F]">Before You Contact Us</span>
            <h2 className="mt-4 font-serif text-4xl text-[#181818]">Frequently Asked Questions</h2>
          </div>
          <div className="mt-16 space-y-8">
            {CONTACT_FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-3xl bg-white p-8 shadow-xs">
                <h3 className="font-semibold text-[#181818]">{q}</h3>
                <p className="mt-4 leading-8 text-[#5E6663]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181818]">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <h2 className="mt-5 font-serif text-5xl leading-tight text-white">
            Ready To Source Premium Agricultural Commodities?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl leading-8 text-white/75">
            Partner with REISAGRI for dependable sourcing, international trade expertise and reliable
            supply chain solutions tailored to your business.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#E8720F] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
