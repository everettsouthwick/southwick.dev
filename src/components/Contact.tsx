"use client";
import React, { useState } from "react";

interface FormField {
  value: string;
  error: string;
}

interface FormState {
  name: FormField;
  email: FormField;
  message: FormField;
}

const defaultFormState: FormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormState>(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const validateForm = (): boolean => {
    let isValid = true;
    const newFormData = { ...formData };

    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    }

    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.value)) {
        newFormData.email.error = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData(defaultFormState);
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
              formData.name.error ? "border border-red-500" : ""
            }`}
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
            disabled={isSubmitting}
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
              formData.email.error ? "border border-red-500" : ""
            }`}
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
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
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full ${
            formData.message.error ? "border border-red-500" : ""
          }`}
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
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
          isSubmitting
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
