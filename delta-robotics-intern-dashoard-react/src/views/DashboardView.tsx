import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  MoreVertical,
  User
} from 'lucide-react';

export default function DashboardView() {
  const metrics = [
    { label: 'Total Students', value: '1,248', icon: Users, change: '+12% this month', trend: 'up' },
    { label: 'Active Enrollments', value: '856', icon: GraduationCap, change: '+5% this month', trend: 'up' },
    { label: 'Revenue (MTD)', value: '$42.5k', icon: CreditCard, change: '+18% vs last month', trend: 'up' },
    { label: 'Pending Inventory', value: '24', icon: Package, change: 'Action required', trend: 'down', alert: true },
  ];

  const recentEnrollments = [
    { id: 1, name: 'Sarah Jenkins', initials: 'SJ', course: 'Intro to Python Robotics', date: 'Oct 24, 2023', status: 'Active' },
    { id: 2, name: 'Marcus Chen', initials: 'MC', course: 'Advanced Kinematics', date: 'Oct 23, 2023', status: 'Pending' },
    { id: 3, name: 'Elena Patel', initials: 'EP', course: 'Drone Assembly 101', date: 'Oct 22, 2023', status: 'Active' },
    { id: 4, name: 'David Rodriguez', initials: 'DR', course: 'Intro to Python Robotics', date: 'Oct 22, 2023', status: 'Active' },
  ];

  const upcomingWorkshops = [
    { date: 'Oct 28', title: 'VEX Robotics Challenge', instructor: 'Dr. A. Smith' },
    { date: 'Nov 02', title: 'ROS Fundamentals', instructor: 'B. Johnson' },
    { date: 'Nov 15', title: '3D Printing for Bots', instructor: 'C. Davis' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-main">Dashboard</h2>
          <p className="text-sm text-text-muted mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="text-sm text-text-muted bg-bg-alt px-3 py-1.5 rounded-md border border-border-main">
          <span className="font-medium text-text-main">Last synced:</span> Just now
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="bg-white border border-border-main rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-text-muted">{metric.label}</p>
                <div className={`p-1.5 rounded-md ${metric.alert ? 'bg-warning-bg text-warning' : 'bg-brand-tint text-brand'}`}>
                  <Icon size={18} />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-text-main">{metric.value}</h3>
                  <p className={`text-sm flex items-center gap-1 mt-1 ${metric.alert ? 'text-danger' : 'text-success'}`}>
                    {metric.alert ? <AlertTriangle size={14} /> : <TrendingUp size={14} />}
                    {metric.change}
                  </p>
                </div>
                {/* Simulated sparkline */}
                <div className="flex items-end gap-1 opacity-50 h-8">
                  {[2, 4, 3, 6, 8].map((h, j) => (
                    <div key={j} className={`w-2 rounded-t ${metric.alert ? 'bg-warning' : 'bg-brand'}`} style={{ height: `${h * 4}px` }} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-border-main rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-5 border-b border-border-main flex justify-between items-center bg-bg-alt">
            <h3 className="text-lg font-semibold text-text-main">Recent Enrollments</h3>
            <button className="text-sm font-medium text-brand hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto p-5">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-semibold text-text-muted uppercase tracking-wider border-b border-border-main">
                  <th className="pb-3 font-semibold">Student Name</th>
                  <th className="pb-3 font-semibold">Course</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-main">
                {recentEnrollments.map((row) => (
                  <tr key={row.id} className="hover:bg-bg-alt transition-colors group cursor-pointer text-sm">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-tint flex items-center justify-center text-brand font-bold text-xs">
                          {row.initials}
                        </div>
                        <span className="font-medium text-text-main">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-text-muted">{row.course}</td>
                    <td className="py-4 text-text-muted">{row.date}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        row.status === 'Active' ? 'bg-success-bg text-success' : 'bg-warning-bg text-warning'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-text-muted hover:text-brand transition-colors p-1">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white border border-border-main rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border-main bg-bg-alt">
              <h3 className="text-lg font-semibold text-text-main">Upcoming Workshops</h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              {upcomingWorkshops.map((ws, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-border-main last:border-0 last:pb-0">
                  <div className="bg-bg-alt border border-border-main rounded-lg p-2 text-center min-w-[50px]">
                    <p className="text-[10px] font-bold text-text-muted uppercase">{ws.date.split(' ')[0]}</p>
                    <p className="text-lg font-bold text-brand">{ws.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main text-sm">{ws.title}</h4>
                    <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                      <User size={12} />
                      Inst. {ws.instructor}
                    </p>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 mt-2 bg-white border border-border-main rounded-lg text-brand text-sm font-medium hover:bg-bg-alt transition-colors">
                View Calendar
              </button>
            </div>
          </div>

          <div className="bg-white border border-danger/20 rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-danger/20 bg-danger-bg flex justify-between items-center">
              <h3 className="text-base font-semibold text-text-main flex items-center gap-2">
                <AlertTriangle size={18} className="text-danger" />
                Inventory Alerts
              </h3>
            </div>
            <div className="p-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-bg-alt rounded-lg border border-border-main">
                <div>
                  <p className="font-medium text-text-main">Servo Motors (Micro)</p>
                  <p className="text-xs text-text-muted mt-0.5">SKU: SM-104</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-danger-bg text-danger border border-danger/20">
                  3 Left
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-bg-alt rounded-lg border border-border-main">
                <div>
                  <p className="font-medium text-text-main">Arduino Uno R3</p>
                  <p className="text-xs text-text-muted mt-0.5">SKU: AU-R3</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-danger-bg text-danger border border-danger/20">
                  Out of Stock
                </span>
              </div>
              <button className="w-full py-2 mt-1 text-brand font-medium hover:underline text-sm text-center">
                Manage Inventory →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
