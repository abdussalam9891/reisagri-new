const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function initContact() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  const submitBtn = document.getElementById("contactSubmitBtn");
  const btnLabel = submitBtn?.querySelector("[data-btn-label]");
  const status = document.getElementById("contactFormStatus");

  const accessKey = form.querySelector('[name="access_key"]')?.value || "";

  function setStatus(message, variant) {
    if (!status) return;

    status.textContent = message;
    status.classList.remove("hidden", "text-green-600", "text-red-600");

    if (variant) {
      status.classList.add(
        variant === "error" ? "text-red-600" : "text-green-600"
      );
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!accessKey || accessKey.startsWith("REPLACE_WITH_")) {
      setStatus(
        "This form isn't connected yet — add the Web3Forms access key before going live.",
        "error"
      );
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (btnLabel) btnLabel.textContent = "Sending...";
    setStatus("");
    status?.classList.add("hidden");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Thank you — your enquiry has been sent. Our team will get back to you shortly.", "success");
        form.reset();
      } else {
        setStatus(result.message || "Something went wrong. Please try again or email us directly.", "error");
      }
    } catch {
      setStatus("Network error — please check your connection and try again.", "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnLabel) btnLabel.textContent = "Request A Quote";
    }
  });
}
