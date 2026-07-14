import { useState } from 'react';

export default function SettingsView() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl pb-10">
      <div>
        <h2 className="text-2xl font-bold text-text-main">Settings</h2>
        <p className="text-sm text-text-muted mt-1">Manage your account preferences, platform configurations, and security settings for the Delta Robotics environment.</p>
      </div>

      <div className="bg-white border border-border-main rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-border-main flex items-center gap-2 bg-white">
          <div className="w-8 h-8 rounded-full bg-brand-tint flex items-center justify-center text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3 className="font-semibold text-text-main text-lg">Profile Settings</h3>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center gap-3 shrink-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiXoQjlib7gaummq8j7oEOP4r68qbOIJEk1akz_d0wA59y1xlACM12A7Oy-SIXNG1qhqB7aUqmobJyyWJPjsSNyI6_IQQoSdgA5qSgY_J0aoiPFqLD454yvrZ6Rrn0wb_uBOkJy1TUWkyKweCmBNtAx7_RhJSPCiEa-otHBeKtfwq2-llTY9YkrPmy2sXouiDUfzKoVJ9_6t1DG7gH-fnyg_nkHLAHmsPUydqZtKjLX-lCYtr1zKd1" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border border-border-main"
            />
            <button className="text-xs font-bold text-brand uppercase tracking-wider hover:text-brand-dark">Change Avatar</button>
          </div>
          <div className="flex-1 w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Full Name</label>
                <input type="text" defaultValue="Admin User" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Email Address</label>
                <input type="email" defaultValue="admin@deltarobotics.com" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Role</label>
              <input type="text" defaultValue="System Administrator" disabled className="w-full h-10 border border-border-main rounded-lg px-3 bg-bg-alt text-text-muted cursor-not-allowed text-sm" />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button className="px-4 py-2 border border-border-main rounded-lg text-sm font-medium hover:bg-bg-alt transition-colors">Cancel</button>
              <button className="px-4 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors shadow-sm">Save Changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-border-main rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-border-main flex items-center gap-2 bg-white">
            <div className="w-8 h-8 rounded-full bg-brand-tint flex items-center justify-center text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h3 className="font-semibold text-text-main text-lg">Platform Configuration</h3>
          </div>
          <div className="p-6 space-y-4 flex-1">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Site Name</label>
              <input type="text" defaultValue="Delta Robotics" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Support Email</label>
              <input type="email" defaultValue="support@deltarobotics.com" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Default Currency</label>
              <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border-main rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-border-main flex items-center gap-2 bg-white">
            <div className="w-8 h-8 rounded-full bg-brand-tint flex items-center justify-center text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
            <h3 className="font-semibold text-text-main text-lg">Alerts & Notifications</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text-main text-sm">System Email Alerts</p>
                <p className="text-xs text-text-muted mt-0.5">Receive daily summaries of system activity.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-border-main peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text-main text-sm">Enrollment Notifications</p>
                <p className="text-xs text-text-muted mt-0.5">Instant alerts when new students enroll.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-border-main peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text-main text-sm">Low Inventory Warnings</p>
                <p className="text-xs text-text-muted mt-0.5">Get notified when hardware stocks dip below 10%.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-border-main peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-[3px] border-l-brand border border-border-main rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-border-main flex items-center gap-2 bg-white">
          <div className="w-8 h-8 rounded-full bg-warning-bg flex items-center justify-center text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3 className="font-semibold text-text-main text-lg">Security & Access</h3>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-sm text-text-muted">Ensure your account is using a long, random password to stay secure. We recommend using a password manager.</p>
            <button className="px-4 py-2 border border-border-main rounded-lg text-sm font-medium hover:bg-bg-alt transition-colors inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
              View Login History
            </button>
          </div>
          <div className="flex-1 space-y-4 bg-bg-alt p-5 rounded-xl border border-border-main">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </div>
            <button className="w-full h-10 bg-white border border-border-main text-text-main rounded-lg text-sm font-medium hover:bg-bg-alt transition-colors shadow-sm mt-2">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
