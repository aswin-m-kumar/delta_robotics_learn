import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppNavbar } from "@/components/layout/app-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-lowest text-on-surface font-body-md w-full">
      <AppSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <AppNavbar />
        {children}
      </main>
    </div>
  );
}
