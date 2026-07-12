"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const courseData: Record<string, { id: string; title: string; image: string; price: number; duration: string; level: string }> = {
  "ros2-intro": { id: "ros2-intro", title: "Intro to ROS 2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNA9wx-SR0bqA0pNKUNtz6mvtOuUhSBOlwAMWlHe7cMTmkte5-Une9wUepzHp_rTWSIGkBc_w2vee1LvXasW3w2F-n_JxvDeXGI0okjNUHROCY7oaRfglA7QW1uZj8ZzMz_RBm4VEUAr5gD8BMYhmuT28xZBbiSDMTP8BG6Uw1Ez3BsJsfx6ZNIf9PF65Z5kPijKz0KfEeCuT8bq_ibmw5tzhVW9buYIZuV-YT8XNZ_AIIGlzwXte8g", price: 1299, duration: "12 Weeks", level: "Intermediate" },
  "computer-vision": { id: "computer-vision", title: "Computer Vision Basics", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUwCJgyFV3EO_osRDHCBtmDC31vl0d2nLbfqHzMZ4nPdGh-G0ACyhMQmSPjUu7jNC6au5yXnfLcISeSPNaXB9uWAwOYgMqi74-hOxUKrZVLhO0rUrSH5ZBPHyrqsHDe2wnxXOmLKpAA_3tZOUYk3Rk7ZNbvzi4ASOnoEiAaSaRkrP8V7D7vVKb1p8WcpHhjmywF3tuGeEfrYITdv__o_zvKxnAITSbkpD9kZMK71FT9ayv54esgUaWw", price: 950, duration: "8 Weeks", level: "Intermediate" },
  "autonomous-systems": { id: "autonomous-systems", title: "Autonomous Systems", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8rU-AuFg-E3xxCpg-65018qlDDpkG86vxs7oF6a2oQ99Eg1VQAHd_p9wqOriPJKOf3Y2NbewK05IgAO79_pdH6FpM7bmowyL4wkbMgnJT2MkzYzN7xMLJiylGfQ0TwzNA-YUUC6yNe3Y7W71GgPB1V2mode40Ifz2bWEdXDiUcDr_oXsWKZWR03VfRf0aWW2XT4HqA3JIHWH0fAWwWDY3QlUnc5uufYAIf4sRxrrUaktDCcw-DwsyKw", price: 1499, duration: "14 Weeks", level: "Advanced" },
  "neural-networks": { id: "neural-networks", title: "Neural Networks for Robotics", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjjX2xYVg2JEG8D4ABhKHwlmPTVT-u4QBUFASemqKzL4uRbdC_XElarJiz_fm9iWkl1hFwKkLRCHpSu1TkrJdstHHqSdp2sLpcxqml1E3b8fwWxVVR3sG8KuIsa2emk8-xtx1X-aUQTJsgRVUT2brSI4wqsxPXTH9fTgEK4LX6-ytJr8C-LszZ-NnDfOt8VV1ST3oV7BoVgCWxUWCW2LLjc9xE1szSht2zs9NJ5zaQpZKmmnwa6Z91Dw", price: 1100, duration: "10 Weeks", level: "Advanced" },
  "embedded-iot": { id: "embedded-iot", title: "Embedded IoT Systems", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hYdlv0eLw27hXCwYMFf9-_ck5XUIlzaRKxLw7k94CDjmrYYYVyUxhnxf5a0MX5PSvBKCSgCaIm7ohBKoOjYUoQRWc-aI9kvRiJDR-y7sTS67-9IX_1yFDs4kdxdSmpmDTO1UL9JEkX8EGbn-6bp2LanxjSDBShafAiwVluRdzZBAim7ozAm8bE3s3LXpR_nCVhgG8YW2xg5iS-3bZxej-pdqW9fv_RW_vKpBFCPrZPpciViq0VlPCA", price: 800, duration: "10 Weeks", level: "Intermediate" },
  "industrial-automation": { id: "industrial-automation", title: "Industrial Automation", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLAH0NJuVPLTVglGCTXv3Jp_J92mKtDa0LOnQdsLNeWzYr3-ytNX1RxpFN5HoJ5fkG5ZjDkpJwI4omdYpZbRZMQDsHKpX8I9aX-mijNdtjEJIbYYEXJa7zSkMhIwO586lIPVv-aeDJQ9nL78QODDC-GrMBFTD68BP6sAa0iWHmQzuItrfxOh0vprD3uHIuZ85I9T8b-DLTDi4JT0U8leHfMQUPViCGMSUQIQ1C6C3KjZA0pmIKnjIHVA", price: 1500, duration: "14 Weeks", level: "Advanced" },
  "sensor-fusion": { id: "sensor-fusion", title: "Sensor Fusion & Estimation", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNA9wx-SR0bqA0pNKUNtz6mvtOuUhSBOlwAMWlHe7cMTmkte5-Une9wUepzHp_rTWSIGkBc_w2vee1LvXasW3w2F-n_JxvDeXGI0okjNUHROCY7oaRfglA7QW1uZj8ZzMz_RBm4VEUAr5gD8BMYhmuT28xZBbiSDMTP8BG6Uw1Ez3BsJsfx6ZNIf9PF65Z5kPijKz0KfEeCuT8bq_ibmw5tzhVW9buYIZuV-YT8XNZ_AIIGlzwXte8g", price: 1050, duration: "8 Weeks", level: "Advanced" },
  "robotics-101": { id: "robotics-101", title: "Robotics Fundamentals", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUwCJgyFV3EO_osRDHCBtmDC31vl0d2nLbfqHzMZ4nPdGh-G0ACyhMQmSPjUu7jNC6au5yXnfLcISeSPNaXB9uWAwOYgMqi74-hOxUKrZVLhO0rUrSH5ZBPHyrqsHDe2wnxXOmLKpAA_3tZOUYk3Rk7ZNbvzi4ASOnoEiAaSaRkrP8V7D7vVKb1p8WcpHhjmywF3tuGeEfrYITdv__o_zvKxnAITSbkpD9kZMK71FT9ayv54esgUaWw", price: 650, duration: "6 Weeks", level: "Beginner" },
};

const paymentMethods = [
  { id: "card", label: "Credit / Debit Card", icon: "credit_card" },
  { id: "upi", label: "UPI", icon: "smartphone" },
  { id: "netbanking", label: "Net Banking", icon: "account_balance" },
];

export default function EnrollPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const course = courseData[id];

  const [form, setForm] = useState({ name: "", email: "", phone: "", promo: "" });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [submitted, setSubmitted] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);

  const discount = promoApplied ? 0.1 : 0;
  const basePrice = course?.price ?? 0;
  const discountAmount = basePrice * discount;
  const total = basePrice - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!course) {
    return (
      <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 mb-4">help</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Course Not Found</h1>
          <Link href="/student/courses" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold inline-block mt-4">
            Browse Courses
          </Link>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full flex items-center justify-center">
        <div className="max-w-md text-center bg-surface-container-lowest border border-border rounded-xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-success text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Enrollment Confirmed!</h1>
          <p className="text-body-md text-on-surface-variant mb-6">You're now enrolled in <strong className="text-on-surface">{course.title}</strong>. Check your email for confirmation and next steps.</p>
          <Link href={`/student/learning/${course.id}`} className="block w-full bg-primary-container text-on-primary rounded-lg px-6 py-3 font-bold hover:bg-primary transition-colors mb-3">
            Start Learning
          </Link>
          <Link href="/student/dashboard" className="block text-center text-primary-container text-sm font-medium hover:underline">
            Go to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
      <div className="mb-6">
        <Link href={`/student/courses/${course.id}`} className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Course
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-8">Enroll in {course.title}</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-5">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none placeholder:text-on-surface-variant/40"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none placeholder:text-on-surface-variant/40"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none placeholder:text-on-surface-variant/40"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={form.promo}
                      onChange={(e) => setForm({ ...form, promo: e.target.value })}
                      className="flex-1 px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none placeholder:text-on-surface-variant/40"
                      placeholder="Enter code"
                      disabled={promoApplied}
                    />
                    <button
                      type="button"
                      onClick={() => setPromoApplied(true)}
                      disabled={promoApplied || !form.promo}
                      className="px-4 py-2.5 border border-primary-container text-primary-container rounded-lg text-sm font-bold hover:bg-primary-container/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && <p className="text-success text-xs mt-1">10% discount applied!</p>}
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-5">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {paymentMethods.map((method) => {
                  const isActive = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`border rounded-lg p-4 flex flex-col items-center justify-center text-center h-28 transition-all cursor-pointer ${
                        isActive ? "border-primary-container bg-primary-container/5" : "border-outline-variant hover:border-border hover:bg-surface"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl mb-2 ${isActive ? "text-primary-container" : "text-on-surface-variant"}`}>{method.icon}</span>
                      <span className={`text-sm font-medium ${isActive ? "text-primary-container" : "text-on-surface-variant"}`}>{method.label}</span>
                    </button>
                  );
                })}
              </div>
              {paymentMethod === "card" && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-label-sm text-on-surface-variant mb-1.5">Card Number</label>
                    <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1.5">Expiry Date</label>
                    <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1.5">CVV</label>
                    <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none" placeholder="123" />
                  </div>
                </div>
              )}
              {paymentMethod === "upi" && (
                <div className="mt-5">
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">UPI ID</label>
                  <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none" placeholder="username@upi" />
                </div>
              )}
              {paymentMethod === "netbanking" && (
                <div className="mt-5">
                  <label className="block text-label-sm text-on-surface-variant mb-1.5">Select Bank</label>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none">
                    <option value="">Choose your bank...</option>
                    <option>Bank of America</option>
                    <option>Chase</option>
                    <option>Wells Fargo</option>
                    <option>Citibank</option>
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary rounded-lg px-6 py-3.5 font-bold text-base hover:bg-primary transition-colors"
            >
              Enroll & Pay ${total.toFixed(0)}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <div className="sticky top-24 bg-surface-container-lowest border border-border rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="h-36 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${course.image}')` }} />
            </div>
            <div className="p-5">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{course.title}</h3>
              <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {course.duration}
                <span className="mx-1">&bull;</span>
                {course.level}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Tuition</span>
                  <span className="text-on-surface">${basePrice.toFixed(0)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-body-md">
                    <span className="text-success">Discount (10%)</span>
                    <span className="text-success">-${discountAmount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between font-headline-md text-headline-md pt-2 border-t border-border">
                  <span className="text-on-surface">Total</span>
                  <span className="text-primary-container">${total.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
