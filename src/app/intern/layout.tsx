import { InternSidebar } from "@/components/layout/intern-sidebar";
import { InternNavbar } from "@/components/layout/intern-navbar";

export default function InternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InternSidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <InternNavbar />
        {children}
      </div>
    </div>
  );
}
