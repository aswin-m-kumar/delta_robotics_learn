export default function ReportsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-container-padding bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Reports &amp; Analytics</h2>
            <p className="font-body-md text-body-md text-secondary">Comprehensive overview of system performance and growth.</p>
          </div>
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-surface-container-lowest border border-border text-on-surface font-body-md-bold hover:bg-bg-alt transition-colors">
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export PDF
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest rounded-xl border border-border p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-start mb-4">
              <span className="font-body-md text-body-md text-secondary">Total Revenue</span>
              <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-1.5 rounded-lg">payments</span>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">$142.5k</h3>
              <span className="font-label-sm text-label-sm text-success bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">trending_up</span> +12.5%
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-secondary mt-1">vs last month</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-border p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-start mb-4">
              <span className="font-body-md text-body-md text-secondary">Active Students</span>
              <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed/30 p-1.5 rounded-lg">groups</span>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">2,840</h3>
              <span className="font-label-sm text-label-sm text-success bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">trending_up</span> +8.2%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-border p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-start mb-4">
              <span className="font-body-md text-body-md text-secondary">Course Completions</span>
              <span className="material-symbols-outlined text-on-primary-fixed-variant bg-surface-container/50 p-1.5 rounded-lg">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">1,120</h3>
              <span className="font-label-sm text-label-sm text-success bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">trending_up</span> +5.4%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-border p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-start mb-4">
              <span className="font-body-md text-body-md text-secondary">Inventory Health</span>
              <span className="material-symbols-outlined text-warning bg-warning/10 p-1.5 rounded-lg">inventory</span>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">94%</h3>
              <span className="font-label-sm text-label-sm text-secondary bg-bg-alt px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">horizontal_rule</span> Stable
              </span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart Placeholder */}
          <div className="bg-surface-container-lowest rounded-xl border border-border p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] lg:col-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Enrollment Trends</h3>
              <select className="h-8 pl-3 pr-8 rounded-lg border border-border bg-background font-label-sm text-label-sm text-on-surface focus:ring-primary-container focus:border-primary-container">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex-1 min-h-[250px] relative border-b border-l border-border/50">
              <div className="absolute inset-0 flex items-end justify-between px-4 pb-2 gap-4">
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "20%" }}></div>
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "40%" }}></div>
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "35%" }}></div>
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "70%" }}></div>
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "55%" }}></div>
                <div className="flex-1 bg-primary-container rounded-t-sm" style={{ height: "90%" }}></div>
              </div>
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between font-label-sm text-label-sm text-secondary px-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Donut Chart Placeholder */}
          <div className="bg-surface-container-lowest rounded-xl border border-border p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface w-full text-left mb-6">Revenue by Category</h3>
            <div className="w-full flex-1 flex items-end justify-around gap-8 mb-6 px-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-primary-container rounded-t-sm" style={{ height: "65%" }}></div>
                <span className="font-label-sm text-label-sm text-secondary">School</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-tertiary-fixed rounded-t-sm" style={{ height: "35%" }}></div>
                <span className="font-label-sm text-label-sm text-secondary">College</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Data Table */}
        <div className="bg-surface-container-lowest rounded-xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-border flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Top Performing Courses</h3>
            <button className="text-primary font-body-md-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-bg-alt">
                  <th className="py-3 px-5 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Course Name</th>
                  <th className="py-3 px-5 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Category</th>
                  <th className="py-3 px-5 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right">Total Enrolled</th>
                  <th className="py-3 px-5 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right">Revenue</th>
                  <th className="py-3 px-5 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right">Growth</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md divide-y divide-border">
                <tr className="hover:bg-bg-alt transition-colors">
                  <td className="py-4 px-5 text-on-surface font-body-md-bold">Intro to Mechanical Design</td>
                  <td className="py-4 px-5 text-secondary">School</td>
                  <td className="py-4 px-5 text-on-surface text-right">450</td>
                  <td className="py-4 px-5 text-on-surface text-right">$22,500</td>
                  <td className="py-4 px-5 text-success text-right font-body-md-bold">+15%</td>
                </tr>
                <tr className="hover:bg-bg-alt transition-colors">
                  <td className="py-4 px-5 text-on-surface font-body-md-bold">Advanced Kinematics</td>
                  <td className="py-4 px-5 text-secondary">College</td>
                  <td className="py-4 px-5 text-on-surface text-right">320</td>
                  <td className="py-4 px-5 text-on-surface text-right">$32,000</td>
                  <td className="py-4 px-5 text-success text-right font-body-md-bold">+8%</td>
                </tr>
                <tr className="hover:bg-bg-alt transition-colors">
                  <td className="py-4 px-5 text-on-surface font-body-md-bold">Robotics Programming with Python</td>
                  <td className="py-4 px-5 text-secondary">College</td>
                  <td className="py-4 px-5 text-on-surface text-right">285</td>
                  <td className="py-4 px-5 text-on-surface text-right">$25,650</td>
                  <td className="py-4 px-5 text-warning text-right font-body-md-bold">-2%</td>
                </tr>
                <tr className="hover:bg-bg-alt transition-colors">
                  <td className="py-4 px-5 text-on-surface font-body-md-bold">Basic Electronics Workshop</td>
                  <td className="py-4 px-5 text-secondary">School</td>
                  <td className="py-4 px-5 text-on-surface text-right">510</td>
                  <td className="py-4 px-5 text-on-surface text-right">$15,300</td>
                  <td className="py-4 px-5 text-success text-right font-body-md-bold">+22%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
