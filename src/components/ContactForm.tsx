"use client";

import { BUSINESS_NAME, CONTACT_EMAIL } from "@/constants";
import { FormEvent, useId, useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  clinic?: string;
  message?: string;
};

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const formId = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const clinicErrorId = `${formId}-clinic-error`;
  const messageErrorId = `${formId}-message-error`;
  const statusId = `${formId}-status`;

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const clinic = String(data.get("clinic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: FieldErrors = {};

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!isValidEmail(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!clinic) next.clinic = "Please enter your clinic or organization name.";
    if (!message) next.message = "Please tell us about your needs.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus("idle");
    setStatusMessage("");

    if (Object.keys(nextErrors).length > 0) {
      const fieldId = nextErrors.name
        ? "name"
        : nextErrors.email
          ? "email"
          : nextErrors.clinic
            ? "clinic"
            : "message";
      window.setTimeout(() => {
        document.getElementById(fieldId)?.focus();
      }, 0);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setStatusMessage(
        `This form isn't fully configured yet. Please email us directly at ${CONTACT_EMAIL}.`,
      );
      return;
    }

    const data = new FormData(form);
    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("subject", `New inquiry from ${String(data.get("name") ?? "")}`);
    data.set("from_name", `${BUSINESS_NAME} website`);

    setStatus("submitting");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(
          "Thanks — your message has been sent. We'll get back to you within two business days.",
        );
        form.reset();
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(
          `Something went wrong sending your message. Please email us directly at ${CONTACT_EMAIL}.`,
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        `Something went wrong sending your message. Please email us directly at ${CONTACT_EMAIL}.`,
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      className="flex flex-col gap-5"
      aria-label="Contact form"
      noValidate
      onSubmit={handleSubmit}
      aria-describedby={status !== "idle" ? statusId : undefined}
    >
      {/* Honeypot — hidden from sighted and AT users; Web3Forms rejects
          submissions where this is filled in. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-label="Do not fill out this field" /* Fixes the WAVE error */
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-text">
          Your name{" "}
          <span className="ml-1 text-error" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? nameErrorId : undefined}
          className="w-full appearance-none rounded-[6px] border-[1.5px] border-border bg-bg px-4 py-3 text-base text-text transition-[border-color] focus:border-sky focus:shadow-[0_0_0_3px_rgba(47,93,122,0.18)] focus:outline-none aria-[invalid=true]:border-error"
        />
        <span id={nameErrorId} className="min-h-[1.2em] text-xs font-medium text-error" role="alert" aria-live="polite">
          {errors.name ?? ""}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email address{" "}
          <span className="ml-1 text-error" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
          className="w-full appearance-none rounded-[6px] border-[1.5px] border-border bg-bg px-4 py-3 text-base text-text transition-[border-color] focus:border-sky focus:shadow-[0_0_0_3px_rgba(47,93,122,0.18)] focus:outline-none aria-[invalid=true]:border-error"
        />
        <span id={emailErrorId} className="min-h-[1.2em] text-xs font-medium text-error" role="alert" aria-live="polite">
          {errors.email ?? ""}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="clinic" className="text-sm font-medium text-text">
          Clinic or organization name{" "}
          <span className="ml-1 text-error" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="text"
          id="clinic"
          name="clinic"
          autoComplete="organization"
          required
          aria-required="true"
          aria-invalid={errors.clinic ? true : undefined}
          aria-describedby={errors.clinic ? clinicErrorId : undefined}
          className="w-full appearance-none rounded-[6px] border-[1.5px] border-border bg-bg px-4 py-3 text-base text-text transition-[border-color] focus:border-sky focus:shadow-[0_0_0_3px_rgba(47,93,122,0.18)] focus:outline-none aria-[invalid=true]:border-error"
        />
        <span id={clinicErrorId} className="min-h-[1.2em] text-xs font-medium text-error" role="alert" aria-live="polite">
          {errors.clinic ?? ""}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="website" className="text-sm font-medium text-text">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://"
          autoComplete="url"
          className="w-full appearance-none rounded-[6px] border-[1.5px] border-border bg-bg px-4 py-3 text-base text-text transition-[border-color] focus:border-sky focus:shadow-[0_0_0_3px_rgba(47,93,122,0.18)] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Tell me about your needs{" "}
          <span className="ml-1 text-error" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Free audit request, retainer inquiry, questions about your site..."
          required
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? messageErrorId : undefined}
          className="min-h-[120px] w-full resize-y appearance-none rounded-[6px] border-[1.5px] border-border bg-bg px-4 py-3 text-base text-text transition-[border-color] focus:border-sky focus:shadow-[0_0_0_3px_rgba(47,93,122,0.18)] focus:outline-none aria-[invalid=true]:border-error"
        />
        <span id={messageErrorId} className="min-h-[1.2em] text-xs font-medium text-error" role="alert" aria-live="polite">
          {errors.message ?? ""}
        </span>
      </div>

      <div
        id={statusId}
        role="status"
        aria-live="polite"
        className={
          status === "idle"
            ? "sr-only"
            : status === "success"
              ? "rounded-[6px] border border-success-border bg-success-bg px-4 py-3 text-sm font-medium text-success-text"
              : status === "error"
                ? "rounded-[6px] border border-error-border bg-error-bg px-4 py-3 text-sm font-medium text-error"
                : "rounded-[6px] border border-border bg-bg px-4 py-3 text-sm font-medium text-subtle"
        }
      >
        {statusMessage}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary-hover hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}