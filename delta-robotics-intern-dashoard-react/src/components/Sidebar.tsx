import { 
  LayoutDashboard, 
  GraduationCap, 
  Package, 
  Wrench, 
  Image as ImageIcon, 
  Settings,
  UserCircle
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'workshops', label: 'Workshops', icon: Wrench },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="w-[260px] h-full bg-bg-alt border-r border-border-main flex flex-col shrink-0">
      <div className="p-6 pb-8 flex items-center gap-3">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74h8CfwlmGXEiheAb0OR38CAgwzRKSMCq-lyIsgBzqu-NqcVoVLJhPOyQHZ7RXNCmg5g91jJjXk399pvvHzvkY-dm09DzfTV3NIghcwX-xSFyPPqwJog97Fx9zG4LJ-BSx6dIqKrF-B3mSl9Ndq-yz3E08MEJ986y5zOqbtO27STaVdUcgPDjqb8JDr8cMqiicVS8lhR2m1pPeAHIlonmFZh_F-AKDnRooc94S289NYuFhFgljFfAy0CMICS5v5vXVQ" 
          alt="Logo" 
          className="w-10 h-10 object-contain rounded"
        />
        <div>
          <h1 className="text-base font-bold text-text-main tracking-tight uppercase">Delta Robotics</h1>
          <p className="text-xs font-semibold text-text-muted mt-0.5 tracking-widest uppercase">Intern Console</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'bg-brand-tint text-brand-dark font-medium border-l-[3px] border-brand-dark rounded-l-none' 
                  : 'text-text-muted hover:bg-black/5 hover:text-text-main font-normal'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-brand-dark' : 'text-text-muted'} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-3 mt-auto space-y-1 border-t border-border-main">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:bg-black/5 hover:text-text-main rounded-lg transition-colors">
          <UserCircle size={20} />
          User Profile
        </button>
      </div>
    </nav>
  );
}
