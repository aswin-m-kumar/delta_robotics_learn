import { StudentSidebar } from "@/components/layout/student-sidebar";
import { StudentNavbar } from "@/components/layout/student-navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <StudentSidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <StudentNavbar />
        {children}
      </div>
    </div>
  );
}
