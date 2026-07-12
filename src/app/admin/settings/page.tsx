export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto p-container-padding bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Settings</h2>
          <p className="text-secondary font-body-md max-w-2xl">
            Manage your account preferences, platform configurations, and security settings for the Delta Robotics environment.
          </p>
        </div>

        {/* Vertical Sections Layout */}
        <div className="space-y-8">
          {/* Profile Settings Card */}
          <section className="bg-surface-container-lowest border border-border rounded-xl shadow-sm p-[24px]">
            <h3 className="font-headline-md text-headline-md text-on-surface border-b border-border pb-4 mb-6 flex items-center space-x-2">
              <span className="material-symbols-outlined text-primary-container">account_circle</span>
              <span>Profile Settings</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Avatar Column */}
              <div className="flex flex-col items-center justify-start space-y-4">
                <div className="relative group cursor-pointer">
                  <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-bg-alt shadow-sm"
                    alt="A high-quality, professional headshot avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC5OCf8603CWb6oPxyO18bO5Uffzu2gLvYHPdLX-O_IYqDyAAi3s-TeoQKasmz9tsO688cLrHHvrVLSvFPGWTU4Aw5_rZj7s32W2IfI5whUq-DckA5lq7wMdyvoBET5Dp-MZ2LpfbxvMYVFO9h82J7eaM_ziESC_lUN20n3t-8jU_44GqTqIAIz4980Z3mus3rh7nGi6saye04d7D6HsndggEMSedMa8cnBhsy52MyHlM-Fy-pOyTt"
                  />
                  <div className="absolute inset-0 bg-on-surface/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                </div>
                <button className="text-primary-container font-label-sm text-label-sm hover:text-primary transition-colors uppercase tracking-wide">
                  Change Avatar
                </button>
              </div>

              {/* Form Fields Column */}
              <div className="md:col-span-2 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Full Name</label>
                    <input
                      className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                      type="text"
                      defaultValue="Admin User"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Email Address</label>
                    <input
                      className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                      type="email"
                      defaultValue="admin@deltarobotics.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Role</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-bg-alt text-secondary outline-none font-body-md cursor-not-allowed"
                    readOnly
                    type="text"
                    defaultValue="System Administrator"
                  />
                </div>
                <div className="pt-4 flex justify-end">
                  <button className="px-5 py-2 bg-surface-container-lowest border border-border text-on-surface rounded-lg font-body-md-bold text-body-md-bold hover:bg-bg-alt transition-colors shadow-sm mr-3">
                    Cancel
                  </button>
                  <button className="px-5 py-2 bg-primary-container text-on-primary rounded-lg font-body-md-bold text-body-md-bold hover:bg-primary transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Configuration & Notifications Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Platform Configuration */}
            <section className="bg-surface-container-lowest border border-border rounded-xl shadow-sm p-[24px]">
              <h3 className="font-headline-md text-headline-md text-on-surface border-b border-border pb-4 mb-6 flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">dns</span>
                <span>Platform Configuration</span>
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Site Name</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                    type="text"
                    defaultValue="Delta Robotics"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Support Email</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                    type="email"
                    defaultValue="support@deltarobotics.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Default Currency</label>
                  <div className="relative">
                    <select className="w-full h-[40px] px-3 pr-10 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md appearance-none">
                      <option>USD ($)</option>
                      <option>INR (₹)</option>
                      <option>EUR (€)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-surface-container-lowest border border-border rounded-xl shadow-sm p-[24px]">
              <h3 className="font-headline-md text-headline-md text-on-surface border-b border-border pb-4 mb-6 flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">notifications_active</span>
                <span>Alerts &amp; Notifications</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-alt transition-colors">
                  <div>
                    <h4 className="font-body-md-bold text-body-md-bold text-on-surface">System Email Alerts</h4>
                    <p className="text-label-sm text-secondary font-label-sm mt-1">Receive daily summaries of system activity.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-secondary-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-alt transition-colors">
                  <div>
                    <h4 className="font-body-md-bold text-body-md-bold text-on-surface">Enrollment Notifications</h4>
                    <p className="text-label-sm text-secondary font-label-sm mt-1">Instant alerts when new students enroll.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-secondary-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-alt transition-colors">
                  <div>
                    <h4 className="font-body-md-bold text-body-md-bold text-on-surface">Low Inventory Warnings</h4>
                    <p className="text-label-sm text-secondary font-label-sm mt-1">Get notified when hardware stocks dip below 10%.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-secondary-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* Security Section */}
          <section className="bg-surface-container-lowest border border-border rounded-xl shadow-sm p-[24px] border-l-4 border-l-warning">
            <h3 className="font-headline-md text-headline-md text-on-surface border-b border-border pb-4 mb-6 flex items-center space-x-2">
              <span className="material-symbols-outlined text-warning">shield_lock</span>
              <span>Security &amp; Access</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="font-body-md text-secondary">
                  Ensure your account is using a long, random password to stay secure. We recommend using a password manager.
                </p>
                <button className="px-4 py-2 bg-surface-container-lowest border border-border text-on-surface rounded-lg font-body-md-bold text-body-md-bold hover:bg-bg-alt transition-colors shadow-sm flex items-center space-x-2">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span>View Login History</span>
                </button>
              </div>
              <div className="space-y-6 bg-bg-alt p-6 rounded-lg border border-border">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Current Password</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">New Password</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Confirm New Password</label>
                  <input
                    className="w-full h-[40px] px-3 rounded-lg border border-border bg-surface-container-lowest text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow font-body-md"
                    type="password"
                  />
                </div>
                <div className="pt-2">
                  <button className="w-full px-5 py-2 bg-surface-container-lowest border border-border text-on-surface rounded-lg font-body-md-bold text-body-md-bold hover:border-primary-container hover:text-primary-container transition-colors shadow-sm">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
