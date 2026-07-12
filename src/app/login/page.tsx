"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  { id: "student", label: "Student", icon: "school" },
  { id: "intern", label: "Intern", icon: "engineering" },
  { id: "admin", label: "Admin", icon: "admin_panel_settings" },
] as const;

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("student");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${selectedRole}/dashboard`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <header className="w-full py-base px-4 md:px-10 bg-surface border-b border-outline-variant flex justify-center items-center h-[72px] gap-3">
        <img src="/logo-48.png" alt="Delta Robotics" className="w-10 h-10 object-contain" />
        <div className="font-headline-md text-headline-md font-bold text-primary">Delta Robotics</div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border-[40px] border-primary-container blur-3xl"></div>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full max-w-lg p-6 md:p-12 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="font-headline-lg text-headline-lg mb-xs">Welcome Back</h1>
            <p className="font-body-md text-body-md text-secondary">Sign in to continue your robotics journey.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wide">
                Select Role
              </label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map((role) => {
                  const isActive = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`role-card border rounded-lg p-3 flex flex-col items-center justify-center text-center h-24 transition-all cursor-pointer ${
                        isActive
                          ? "border-primary-container bg-primary-container/5"
                          : "border-outline-variant hover:border-border hover:bg-surface"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-3xl mb-1 transition-colors ${
                          isActive ? "text-primary-container" : "text-secondary"
                        }`}
                        style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        {role.icon}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-background font-semibold">
                        {role.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
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
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="password">
                    Password
                  </label>
                  <a className="font-label-sm text-label-sm text-primary-container hover:underline" href="#">
                    Forgot Password?
                  </a>
                </div>
                <input
                  className="w-full bg-surface-container-lowest border border-surface-variant rounded-lg px-3 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary font-headline-md text-headline-md font-bold uppercase rounded-lg py-3 hover:opacity-90 transition-opacity flex justify-center items-center gap-1 cursor-pointer"
              >
                Login <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Sign-up Link */}
          <div className="mt-12 text-center border-t border-surface-variant pt-6">
            <p className="font-body-md text-body-md text-secondary">
              New to Delta Robotics?{" "}
              <a className="text-primary-container font-semibold hover:underline" href="#">
                Sign up here
              </a>
            </p>
          </div>
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
