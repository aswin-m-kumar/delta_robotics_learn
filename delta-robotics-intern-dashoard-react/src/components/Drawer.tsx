import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Drawer({ isOpen, onClose, title, subtitle, children, footer }: DrawerProps) {
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity" 
        onClick={onClose} 
      />
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-bg-main border-l border-border-main shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-start justify-between px-6 py-4 border-b border-border-main bg-bg-alt shrink-0">
          <div>
            <h3 className="text-lg font-semibold text-text-main">{title}</h3>
            {subtitle && <p className="text-xs font-semibold text-text-muted mt-1 uppercase tracking-wider">{subtitle}</p>}
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-text-muted hover:bg-black/5 hover:text-text-main rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
        {footer && (
          <div className="p-6 border-t border-border-main bg-bg-main shrink-0 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
