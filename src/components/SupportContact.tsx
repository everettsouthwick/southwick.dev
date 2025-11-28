"use client";

import React, { useEffect, useState } from "react";

interface FormField {
  value: string;
  error: string;
}

interface FormState {
  email: FormField;
  message: FormField;
}

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
  }
}

const defaultFormState: FormState = {
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export function SupportContact() {
  const [formData, setFormData] = useState<FormState>(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileReady, setTurnstileReady] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
    );

    if (existingScript) {
      setTurnstileReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setTurnstileReady(true);
    document.body.appendChild(script);
  }, []);

  const validateForm = (): boolean => {
    let isValid = true;
    const nextFormData: FormState = {
      email: { ...formData.email, error: "" },
      message: { ...formData.message, error: "" },
    };

    if (!formData.email.value.trim()) {
      nextFormData.email.error = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.value)) {
        nextFormData.email.error = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!formData.message.value.trim()) {
      nextFormData.message.error = "Message is required";
      isValid = false;
    }

    setFormData(nextFormData);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    if (!turnstileToken) {
      setSubmitStatus({
        success: false,
        message: "Please complete the verification challenge before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/support-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.value,
          message: formData.message.value,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Support request sent successfully. We will be in touch soon.",
        });
        setFormData(defaultFormState);
        setTurnstileToken("");
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Failed to send support request. Please try again.",
        });
      }
    } catch (_error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const isSubmitDisabled =
    isSubmitting || !turnstileReady || !siteKey || !turnstileToken;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          type="email"
          placeholder="Your email address"
          className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
            formData.email.error ? "border border-red-500" : ""
          }`}
          value={formData.email.value}
          onChange={(event) => {
            setFormData({
              ...formData,
              email: {
                value: event.target.value,
                error: "",
              },
            });
          }}
          disabled={isSubmitting}
        />
        {formData.email.error && (
          <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="How can SW Software help you?"
          rows={8}
          className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full ${
            formData.message.error ? "border border-red-500" : ""
          }`}
          value={formData.message.value}
          onChange={(event) => {
            setFormData({
              ...formData,
              message: {
                value: event.target.value,
                error: "",
              },
            });
          }}
          disabled={isSubmitting}
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>

      <div className="mt-4">
        {siteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={siteKey}
            data-callback="onTurnstileSuccess"
          />
        ) : (
          <p className="text-xs text-red-500">
            Turnstile is not configured. Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
          </p>
        )}
      </div>

      {submitStatus.message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold transition-colors ${
          isSubmitDisabled
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
        }`}
        type="submit"
        disabled={isSubmitDisabled}
      >
        {isSubmitting ? "Sending..." : "Submit support request"}
      </button>
    </form>
  );
}


