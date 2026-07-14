import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  currentView: string;
  onViewChange: (view: string) => void;
  children: ReactNode;
}

export default function Layout({ currentView, onViewChange, children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden text-text-main font-sans">
      <Sidebar currentView={currentView} onViewChange={onViewChange} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar currentView={currentView} />
        <main className="flex-1 overflow-auto p-6 bg-bg-main relative">
          {children}
        </main>
      </div>
    </div>
  );
}
