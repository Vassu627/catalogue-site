"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-8 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Request a Quote</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            className="p-3 rounded bg-[#1E293B]"
            placeholder="Name"
          />

          <input
            required
            type="email"
            className="p-3 rounded bg-[#1E293B]"
            placeholder="Email"
          />

          <input
            required
            className="p-3 rounded bg-[#1E293B]"
            placeholder="Phone"
          />

          <textarea
            required
            className="p-3 rounded bg-[#1E293B]"
            placeholder="Message"
          />

          <button className="bg-green-500 p-3 rounded font-bold hover:bg-green-600">
            Send Request
          </button>
        </form>
      ) : (
        <div className="text-center bg-[#1E293B] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Request Received!
          </h2>

          <p className="text-gray-300">
            Thank you for contacting us. Our team has received your message and
            will get back to you shortly.
          </p>

          <p className="mt-3 text-gray-400">
            Please wait while we review your request.
          </p>
        </div>
      )}
    </section>
  );
}
