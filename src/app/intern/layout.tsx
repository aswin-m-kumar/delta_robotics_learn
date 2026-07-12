import { InternSidebar } from "@/components/layout/intern-sidebar";
import { InternNavbar } from "@/components/layout/intern-navbar";

export default function InternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-lowest text-on-surface font-body-md w-full">
      <InternSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <InternNavbar />
        {children}
      </main>
    </div>
  );
}
