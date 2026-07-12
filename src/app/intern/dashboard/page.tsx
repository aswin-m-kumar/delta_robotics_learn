export default function InternDashboardPage() {
  return (
    <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome, Intern.</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Track your projects and mentorship progress.</p>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary-container">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full"></span>
          </div>
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB--e6dnBZNASTTRm6e2EaShxdV78ORhMx3REiS13VoKx7ymregT6J4hLZ6TV3zMgP7D3tcK2uiDlwNzSqDWSsmPif0vyJsNqHX-RokSvba5IlysPlJmtm-GGiNV4DWSoUAYnq_u9zRDp5_-ExlxeGVrGiFk8ctr6eBq6jWguwHJZ_gF4rrhpOP44CQhyp1f-Pbg4IZpz0gF-bQeT0DSalgOCxiY-J70kD2Ga_fHna74MiL3ybiYrQE1A"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div className="md:col-span-8 bg-surface-container-lowest border border-border rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Project Progress</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body-md font-semibold text-on-surface">Autonomous Navigation System</span>
                <span className="font-label-sm text-label-sm text-primary-container">75%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body-md font-semibold text-on-surface">ROS 2 Integration</span>
                <span className="font-label-sm text-label-sm text-primary-container">45%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body-md font-semibold text-on-surface">Sensor Calibration</span>
                <span className="font-label-sm text-label-sm text-primary-container">90%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-bright border border-border rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">Mentor Sessions</h2>
            <span className="material-symbols-outlined text-secondary">group</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-primary-container">
              <div className="font-label-sm text-label-sm text-primary-container mb-1">Tomorrow, 11:00 AM</div>
              <div className="font-body-md text-body-md font-semibold text-on-surface">Dr. A. Smith</div>
              <div className="font-label-sm text-label-sm text-secondary mt-1">Weekly Check-in</div>
            </div>
            <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-variant">
              <div className="font-label-sm text-label-sm text-secondary mb-1">Fri, 2:00 PM</div>
              <div className="font-body-md text-body-md font-semibold text-on-surface">B. Johnson</div>
              <div className="font-label-sm text-label-sm text-secondary mt-1">ROS 2 Workshop Review</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-dashed border-surface-variant rounded-xl p-12 text-center bg-surface-container-lowest">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">construction</span>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Intern Dashboard — In Development</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
          More features including project submissions, mentor feedback, and skill tracking are coming soon.
        </p>
      </div>
    </main>
  );
}
