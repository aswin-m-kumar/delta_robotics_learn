import { Search, Bell, HelpCircle, Plus } from 'lucide-react';

interface NavbarProps {
  currentView: string;
}

export default function Navbar({ currentView }: NavbarProps) {
  const getButtonText = () => {
    switch (currentView) {
      case 'courses': return 'Add Course';
      case 'inventory': return 'Add Item';
      case 'workshops': return 'Add New';
      case 'gallery': return 'Upload Images';
      case 'settings': return 'Save All';
      default: return 'Add New';
    }
  };

  const showButton = currentView !== 'dashboard';

  return (
    <header className="h-[64px] bg-bg-main border-b border-border-main flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      <div className="flex-1 max-w-md relative flex items-center group">
        <Search className="absolute left-3 text-text-muted w-5 h-5" />
        <input 
          type="text" 
          placeholder={`Search ${currentView}...`} 
          className="w-full h-10 pl-10 pr-4 bg-bg-alt border border-border-main rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-brand transition-shadow placeholder:text-text-muted"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-text-muted hover:text-brand-dark transition-colors p-2 rounded-full hover:bg-bg-alt">
          <Bell size={20} />
        </button>
        <button className="text-text-muted hover:text-brand-dark transition-colors p-2 rounded-full hover:bg-bg-alt">
          <HelpCircle size={20} />
        </button>
        <button className="text-sm font-medium text-text-muted hover:text-brand-dark transition-colors px-2">
          Support
        </button>
        {showButton && (
          <button className="bg-brand hover:bg-brand-dark text-white text-sm font-medium h-10 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm" onClick={() => window.dispatchEvent(new CustomEvent('open-drawer'))}>
            {currentView !== 'settings' && <Plus size={18} />}
            {getButtonText()}
          </button>
        )}
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiXoQjlib7gaummq8j7oEOP4r68qbOIJEk1akz_d0wA59y1xlACM12A7Oy-SIXNG1qhqB7aUqmobJyyWJPjsSNyI6_IQQoSdgA5qSgY_J0aoiPFqLD454yvrZ6Rrn0wb_uBOkJy1TUWkyKweCmBNtAx7_RhJSPCiEa-otHBeKtfwq2-llTY9YkrPmy2sXouiDUfzKoVJ9_6t1DG7gH-fnyg_nkHLAHmsPUydqZtKjLX-lCYtr1zKd1" 
          alt="Avatar" 
          className="w-8 h-8 rounded-full border border-border-main object-cover ml-2"
        />
      </div>
    </header>
  );
}
