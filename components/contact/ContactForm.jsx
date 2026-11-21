"use client";

import { useState } from "react";
import { ArrowLongRight } from "@/components/common/icons";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/*
 * Web3Forms access key — this must be the CLIENT's own key (web3forms.com,
 * free, no login: enter the email that should receive enquiries).
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local / your hosting env.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

const fieldClass =
  "rounded-xl border border-[#D8DDDA] px-5 py-4 outline-hidden transition focus:border-[#181818]";

const COMMODITIES = ["Rice", "Sugar", "Spices", "Pulses", "Grains", "Maize", "Multiple Products"];
const PURPOSES = [
  "Request Quotation",
  "Bulk Purchase",
  "Long-Term Supply Partnership",
  "Distributor Enquiry",
  "Supplier Registration",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { message, variant: "success" | "error" }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus({
        message: "This form isn't connected yet — add the Web3Forms access key before going live.",
        variant: "error",
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: ACCESS_KEY, ...Object.fromEntries(new FormData(form)) }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          message: "Thank you — your enquiry has been sent. Our team will get back to you shortly.",
          variant: "success",
        });
        form.reset();
      } else {
        setStatus({
          message: result.message || "Something went wrong. Please try again or email us directly.",
          variant: "error",
        });
      }
    } catch {
      setStatus({ message: "Network error — please check your connection and try again.", variant: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
      <input type="hidden" name="subject" value="New Enquiry — Reis Agri Trading Website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 md:grid-cols-2">
        <input type="text" name="fullName" placeholder="Full Name *" required className={fieldClass} />
        <input type="text" name="companyName" placeholder="Company Name *" required className={fieldClass} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <input type="email" name="email" placeholder="Business Email *" required className={fieldClass} />
        <input
          type="tel"
          name="phone"
          placeholder="Phone / WhatsApp (with country code) *"
          pattern="\+?[0-9\s\(\)\-]{7,20}"
          title="Include your country code, e.g. +971 55 123 4567"
          required
          className={fieldClass}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <input type="text" name="country" placeholder="Country *" required className={fieldClass} />
        <input type="text" name="destinationPort" placeholder="Destination Port" className={fieldClass} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <select name="commodity" className={fieldClass} defaultValue="Commodity">
          <option>Commodity</option>
          {COMMODITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input type="text" name="quantity" placeholder="Required Quantity (MT)" className={fieldClass} />
      </div>

      <select name="purpose" className={fieldClass} defaultValue="Purpose of Enquiry">
        <option>Purpose of Enquiry</option>
        {PURPOSES.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>

      <textarea
        name="message"
        rows={7}
        placeholder="Tell us about your sourcing requirements, preferred specifications, destination country, packaging or delivery timeline..."
        className={`resize-none ${fieldClass}`}
      />

      <p
        role="status"
        aria-live="polite"
        className={`text-sm font-medium ${status ? "" : "hidden"} ${
          status?.variant === "error" ? "text-red-600" : "text-green-600"
        }`}
      >
        {status?.message}
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#181818] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#E8720F] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{submitting ? "Sending..." : "Request A Quote"}</span>
        <ArrowLongRight className="h-5 w-5" />
      </button>
    </form>
  );
}
