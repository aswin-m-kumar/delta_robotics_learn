export default function StudentsPage() {
  return (
    <div className="flex-1 overflow-auto p-container-padding bg-surface-container-lowest flex flex-col gap-6 relative">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Students</h2>
          <span className="font-body-md text-body-md text-secondary">1,248 total</span>
        </div>
        <button className="sm:hidden bg-primary-container text-on-primary font-body-md-bold h-10 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add Student
        </button>
      </div>

      {/* Toolbar & Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-surface-container-lowest border border-border rounded-xl p-4 shadow-sm">
        <div className="flex-1 w-full lg:max-w-md relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">search</span>
          <input
            className="w-full h-10 pl-10 pr-4 bg-surface-container-lowest border border-border rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="Search by name, email, or ID..."
            type="text"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select className="h-10 bg-surface-container-lowest border border-border rounded-lg text-body-md text-on-surface px-3 pr-8 focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer">
            <option value="">Course (All)</option>
            <option value="intro">Intro to Robotics</option>
            <option value="adv">Advanced Kinematics</option>
            <option value="ai">AI Integration</option>
          </select>
          <select className="h-10 bg-surface-container-lowest border border-border rounded-lg text-body-md text-on-surface px-3 pr-8 focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer">
            <option value="">Status (All)</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
          <select className="h-10 bg-surface-container-lowest border border-border rounded-lg text-body-md text-on-surface px-3 pr-8 focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer">
            <option value="">Enrollment Date</option>
            <option value="last30">Last 30 Days</option>
            <option value="thisYear">This Year</option>
          </select>
          <button
            aria-label="Clear filters"
            className="h-10 px-3 border border-border rounded-lg text-secondary hover:bg-surface-container-low transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
          </button>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-surface-container-lowest border border-border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface-container-lowest">
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Course(s)</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Enrollment Date</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Row 1 */}
              <tr className="group hover:bg-bg-alt transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover border border-border"
                      alt="Student portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDlUQ_PST7gUT5AxLQtwM6lIZLExiLRqsifsKJ0hRisj5wY_JVS4vfrhqkfyDxoFoJA2juX_ZOEHEcqYktQOmJdzz6isHpuxzrqwLpEoiT2E28x-xXTWv-WeGpWDFjBb6ufDfC_IPeQJtuC-Wukxerm6XmX5vCqxHrwIO29UZx0dN8JZfFKTubQhtsnmCLvyWZukJiotF8B5TNCfeBXgCRhxG1e2dc0yhLHBVhiADwr8nMKGlfXnbz"
                    />
                    <div>
                      <div className="font-body-md-bold text-on-surface">Sarah Jenkins</div>
                      <div className="font-body-md text-secondary text-xs">ID: STU-2023-089</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-body-md text-on-surface">sarah.j@example.com</div>
                  <div className="font-body-md text-secondary text-xs">(555) 123-4567</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-container border border-border text-on-surface">
                      Intro to Robotics
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-container border border-border text-on-surface">
                      +1 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-md text-on-surface">Oct 12, 2023</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary hover:text-on-surface p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="group hover:bg-bg-alt transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-body-md-bold border border-border">
                      MC
                    </div>
                    <div>
                      <div className="font-body-md-bold text-on-surface">Marcus Chen</div>
                      <div className="font-body-md text-secondary text-xs">ID: STU-2023-112</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-body-md text-on-surface">m.chen@example.com</div>
                  <div className="font-body-md text-secondary text-xs">(555) 987-6543</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-container border border-border text-on-surface">
                      Advanced Kinematics
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-md text-on-surface">Nov 05, 2023</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary hover:text-on-surface p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="group hover:bg-bg-alt transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover border border-border"
                      alt="Student portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQGtl2TlH3IFZRB-YINhfwjoc8b8LT_P-ou0FYwU8ZHVos8EikBUalozkQh-kYH3cIN63mT-8eUnBp3DZ4VFkDwrdgTdb1XsS7pPR8_607leiXm68cJyj1FXK7rixY9fPNmqkR2y-59XIDMx0aXAV_P3muQwHsJnmPO7U6G109h_lhlRjIk5Kd1ZPMyNHQw0qsKbESB2ZcYG2Gd0SfbajezqC_3_oTHaEcH8MHYIC5TJ-PJh-X5lfp"
                    />
                    <div>
                      <div className="font-body-md-bold text-on-surface">David Rodriguez</div>
                      <div className="font-body-md text-secondary text-xs">ID: STU-2022-045</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-body-md text-on-surface">drodriguez@example.com</div>
                  <div className="font-body-md text-secondary text-xs">(555) 234-5678</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-container border border-border text-on-surface">
                      AI Integration
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-md text-on-surface">Sep 01, 2022</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-container-high text-secondary border border-border">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary hover:text-on-surface p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-auto px-6 py-4 border-t border-border flex items-center justify-between bg-surface-container-lowest">
          <span className="font-body-md text-secondary">Showing 1-3 of 1,248</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-border text-secondary hover:bg-surface-container-low disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled>
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="p-2 rounded-lg border border-border text-secondary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
