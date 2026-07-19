"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.forgotPassword(email);
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <header className="w-full py-base px-4 md:px-10 bg-surface border-b border-outline-variant flex justify-center items-center h-[72px] gap-3">
        <img src="/logo-48.png" alt="Delta Robotics" className="w-10 h-10 object-contain" />
        <div className="font-headline-md text-headline-md font-bold text-primary">Delta Robotics</div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border-[40px] border-primary-container blur-3xl"></div>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full max-w-lg p-6 md:p-12 z-10 relative">
          {submitted ? (
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl text-success mb-4">mark_email_read</span>
              <h1 className="font-headline-lg text-headline-lg mb-xs">Check Your Email</h1>
              <p className="font-body-md text-body-md text-secondary mb-8">
                If an account exists for <strong>{email}</strong>, you will receive password reset instructions shortly.
              </p>
              <Link
                href="/login"
                className="inline-block font-label-sm text-label-sm text-primary-container hover:underline"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-2">lock_reset</span>
                <h1 className="font-headline-lg text-headline-lg mb-xs">Forgot Password</h1>
                <p className="font-body-md text-body-md text-secondary">
                  Enter your email and we will send you reset instructions.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-surface-variant rounded-lg px-3 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                    id="email"
                    placeholder="name@deltarobotics.edu"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full bg-primary-container text-on-primary font-headline-md text-headline-md font-bold uppercase rounded-lg py-3 hover:opacity-90 transition-opacity flex justify-center items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center border-t border-surface-variant pt-6">
                <Link className="font-label-sm text-label-sm text-primary-container hover:underline" href="/login">
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="w-full py-6 px-4 md:px-10 bg-surface-container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left h-[80px]">
        <div className="font-body-md text-body-md text-on-secondary-fixed-variant">
          &copy; 2024 Delta Robotics Platforms. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
