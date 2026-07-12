export default function AdminDashboardPage() {
  return (
    <div className="p-container-padding flex-1 overflow-y-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Dashboard</h2>
          <p className="text-secondary mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="text-sm text-secondary bg-surface-container-low px-3 py-1.5 rounded-md border border-border">
          <span className="font-medium text-on-surface">Last synced:</span> Just now
        </div>
      </div>

      {/* Metrics Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Metric 1 */}
        <div className="bg-surface-container-lowest border border-border rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <p className="text-secondary font-medium">Total Students</p>
            <span className="material-symbols-outlined text-primary bg-accent-tint p-1.5 rounded-md">group</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">1,248</h3>
              <p className="text-success text-sm flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +12% this month
              </p>
            </div>
            {/* Sparkline mock */}
            <div className="w-16 h-8 opacity-50 flex items-end gap-1">
              <div className="w-2 bg-primary rounded-t h-2"></div>
              <div className="w-2 bg-primary rounded-t h-4"></div>
              <div className="w-2 bg-primary rounded-t h-3"></div>
              <div className="w-2 bg-primary rounded-t h-6"></div>
              <div className="w-2 bg-primary rounded-t h-8"></div>
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-surface-container-lowest border border-border rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <p className="text-secondary font-medium">Active Enrollments</p>
            <span className="material-symbols-outlined text-primary bg-accent-tint p-1.5 rounded-md">school</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">856</h3>
              <p className="text-success text-sm flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +5% this month
              </p>
            </div>
            <div className="w-16 h-8 opacity-50 flex items-end gap-1">
              <div className="w-2 bg-primary rounded-t h-4"></div>
              <div className="w-2 bg-primary rounded-t h-3"></div>
              <div className="w-2 bg-primary rounded-t h-5"></div>
              <div className="w-2 bg-primary rounded-t h-4"></div>
              <div className="w-2 bg-primary rounded-t h-7"></div>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-surface-container-lowest border border-border rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <p className="text-secondary font-medium">Revenue (MTD)</p>
            <span className="material-symbols-outlined text-primary bg-accent-tint p-1.5 rounded-md">payments</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">$42.5k</h3>
              <p className="text-success text-sm flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +18% vs last month
              </p>
            </div>
            <div className="w-16 h-8 opacity-50 flex items-end gap-1">
              <div className="w-2 bg-primary rounded-t h-2"></div>
              <div className="w-2 bg-primary rounded-t h-5"></div>
              <div className="w-2 bg-primary rounded-t h-6"></div>
              <div className="w-2 bg-primary rounded-t h-7"></div>
              <div className="w-2 bg-primary rounded-t h-8"></div>
            </div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-surface-container-lowest border border-border rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <p className="text-secondary font-medium">Pending Inventory</p>
            <span className="material-symbols-outlined text-warning bg-surface-container-high p-1.5 rounded-md">inventory_2</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">24</h3>
              <p className="text-danger text-sm flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                Action required
              </p>
            </div>
            <div className="w-16 h-8 opacity-50 flex items-end gap-1">
              <div className="w-2 bg-warning rounded-t h-6"></div>
              <div className="w-2 bg-warning rounded-t h-5"></div>
              <div className="w-2 bg-warning rounded-t h-3"></div>
              <div className="w-2 bg-warning rounded-t h-2"></div>
              <div className="w-2 bg-warning rounded-t h-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Wider): Recent Enrollments */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface-container-lowest border border-border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-border flex justify-between items-center bg-surface-bright">
              <h3 className="font-headline-md text-headline-md text-on-surface">Recent Enrollments</h3>
              <button className="text-primary font-body-md-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto flex-1 p-5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-secondary font-label-sm uppercase tracking-wider border-b border-border">
                    <th className="pb-3 font-semibold">Student Name</th>
                    <th className="pb-3 font-semibold">Course</th>
                    <th className="pb-3 font-semibold">Date</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="text-body-md text-on-surface divide-y divide-border">
                  <tr className="hover:bg-bg-alt transition-colors group cursor-pointer">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">SJ</div>
                        <span className="font-medium">Sarah Jenkins</span>
                      </div>
                    </td>
                    <td className="py-4 text-secondary">Intro to Python Robotics</td>
                    <td className="py-4 text-secondary">Oct 24, 2023</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-success">
                        Active
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-alt transition-colors group cursor-pointer">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">MC</div>
                        <span className="font-medium">Marcus Chen</span>
                      </div>
                    </td>
                    <td className="py-4 text-secondary">Advanced Kinematics</td>
                    <td className="py-4 text-secondary">Oct 23, 2023</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-warning">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-alt transition-colors group cursor-pointer">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">EP</div>
                        <span className="font-medium">Elena Patel</span>
                      </div>
                    </td>
                    <td className="py-4 text-secondary">Drone Assembly 101</td>
                    <td className="py-4 text-secondary">Oct 22, 2023</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-success">
                        Active
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-alt transition-colors group cursor-pointer border-b-transparent">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">DR</div>
                        <span className="font-medium">David Rodriguez</span>
                      </div>
                    </td>
                    <td className="py-4 text-secondary">Intro to Python Robotics</td>
                    <td className="py-4 text-secondary">Oct 22, 2023</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-success">
                        Active
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar components) */}
        <div className="flex flex-col gap-6">
          {/* Upcoming Workshops */}
          <div className="bg-surface-container-lowest border border-border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="p-5 border-b border-border bg-surface-bright">
              <h3 className="font-headline-md text-headline-md text-on-surface">Upcoming Workshops</h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="bg-surface-container-low border border-outline-variant rounded-lg p-2 text-center min-w-[50px]">
                  <p className="text-xs font-bold text-secondary uppercase">Oct</p>
                  <p className="font-headline-sm text-primary">28</p>
                </div>
                <div>
                  <h4 className="font-body-md-bold text-on-surface">VEX Robotics Challenge</h4>
                  <p className="text-sm text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Inst. Dr. A. Smith
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="bg-surface-container-low border border-outline-variant rounded-lg p-2 text-center min-w-[50px]">
                  <p className="text-xs font-bold text-secondary uppercase">Nov</p>
                  <p className="font-headline-sm text-primary">02</p>
                </div>
                <div>
                  <h4 className="font-body-md-bold text-on-surface">ROS Fundamentals</h4>
                  <p className="text-sm text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Inst. B. Johnson
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="bg-surface-container-low border border-outline-variant rounded-lg p-2 text-center min-w-[50px]">
                  <p className="text-xs font-bold text-secondary uppercase">Nov</p>
                  <p className="font-headline-sm text-primary">15</p>
                </div>
                <div>
                  <h4 className="font-body-md-bold text-on-surface">3D Printing for Bots</h4>
                  <p className="text-sm text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Inst. C. Davis
                  </p>
                </div>
              </div>
              <button className="w-full py-2 mt-2 bg-white border border-border rounded-lg text-primary font-body-md-bold hover:bg-bg-alt transition-colors">
                View Calendar
              </button>
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="bg-surface-container-lowest border border-danger/20 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="p-5 border-b border-border bg-error-container/30 flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-danger">warning</span>
                Inventory Alerts
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center p-3 bg-bg-alt rounded-lg border border-border">
                <div>
                  <p className="font-medium text-on-surface">Servo Motors (Micro)</p>
                  <p className="text-xs text-secondary mt-0.5">SKU: SM-104</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-danger border border-red-200">
                  3 Left
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-bg-alt rounded-lg border border-border">
                <div>
                  <p className="font-medium text-on-surface">Arduino Uno R3</p>
                  <p className="text-xs text-secondary mt-0.5">SKU: AU-R3</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-danger border border-red-200">
                  Out of Stock
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-bg-alt rounded-lg border border-border">
                <div>
                  <p className="font-medium text-on-surface">LiPo Battery 11.1V</p>
                  <p className="text-xs text-secondary mt-0.5">SKU: BAT-3S</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-warning border border-yellow-200">
                  12 Left
                </span>
              </div>
              <button className="w-full py-2 mt-2 text-primary font-body-md-bold hover:underline text-sm text-center">
                Manage Inventory &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
