import { useState, useEffect } from 'react';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';
import Drawer from '../components/Drawer';

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const tabs = [
    { id: 'all', label: 'All Media' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'courses', label: 'Courses' },
    { id: 'events', label: 'Events' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'general', label: 'General' },
  ];

  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDlb6SBjqE-UhK7JWO-ptGCYiEH5QmsIl9EtuBrwv6Tb8V32TzaBPD5pnCWKGzcZM7xmgkYccZSu24QZuVMCXRolN8hbOcMkijrSiR4ZY5ipoJKrBapPflyN0SRdzPydAQ5qQpgXUHSfqX3O_kP41oXaaAQR2NASXwS93HSDgSQxvBhS4CUncR_LNLJmLEnNJoo5uk1G1_v8RK6Vqdvg2E-pBSqVzQ-QNJzZIsMkeW6s7mPGrB7CQk8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIepGuMxbUv7nSDiXYb3iOjbM9GKrlNlHCWbi9zyk4qwQ69q17_R1SWmpfw7G4zfOdbfHpOXaxq-FVQsYKkS03hesB3dmAZQc-kF5a-uC076U872rAJaKiWW3F2Qyaz_47Pc1M7K0HRV0acCA7Hvuu_273IPF5gt6c7UskEJjCLbrywy8ct9YxhyVZMJVVK5mwrKKdC9xq3BS6lhX2ilO7V1TE9GNvN0j9Vc_jWeku5AqxXEhIMY6',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPiJ5t17CD48Ym4Cs3OIke29Qwf8J7de6gJBpoGdJwn2GqEYpdCD6YRqcZ8XmgKvHRnq421Yge2XvbAaBMyFdqa4ATBbswvXgSin8yg6eWMBQYkrU9o3Eo3ysC5LO8gd1S64RwpnaK38NuMA6sr3BASmwyvfHXnvtk8IjOKV9MKQTgTUrLRQ4VnDJclSVFY4O7RtXa9pNbWBzIi97StJ41iGoya8NTEEsWta5pXiKeVK0ZcrjsvDy',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCW28K0sykwMOeIwldfDFemwq4_WvppjTi-l57yo72385BnWk86r1N-tN09khHpbWqX5UCpd2i_D8SqonQTvJYXhaA2m97MLRim6yFqcOyfKet7H7WHZtuIEtJ13_QyCgkMBYtM8vtJPOs29jEXpRa2h9iJ9VUuTg7JICSKNP0eV--eBaZf2QMxLCdmq4B-ALtJ82iKPow0PsDf-3Au6DZS9MCzZ4dBlcrJrTK5Rmnju8tiD1ho1ABB',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAH2P8PRktStRQ4Rc0nKOIjPd4jnZkJ1REtPTAeRQgF7GBe8ZplzkwV0J8xYR1mcwe3KztruNyiv78JAzCOb_-t0t1tbOs--N2qX0ZlUD34dQf7K6x7cTxthvNE-QOVqqdpNC7bwgbAZladjsaKeF9bNw3RM8ACzTY7hUfJlw-1qMhO-znFPdOy4FpZWTvF2FrJ_-r25CKMVH8sYHZlRfzHsp4SXk8uLqaTOsHP4ssYjBTmRnVHFCoC',
  ];
  
  useEffect(() => {
    const handleOpenDrawer = () => setIsDrawerOpen(true);
    window.addEventListener('open-drawer', handleOpenDrawer);
    return () => window.removeEventListener('open-drawer', handleOpenDrawer);
  }, []);

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-text-main">Gallery</h2>
          <p className="text-sm text-text-muted mt-1">Manage visual assets for workshops, courses, and events.</p>
        </div>
      </div>

      <div className="flex border-b border-border-main shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 pb-3 text-sm font-medium transition-colors border-b-2 mr-4 ${
              activeTab === tab.id 
                ? 'text-brand border-brand' 
                : 'text-text-muted border-transparent hover:border-border-main hover:text-text-main'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pb-4 auto-rows-[200px]">
        {/* Large item taking 2x2 */}
        <div className="col-span-1 sm:col-span-2 row-span-2 rounded-xl overflow-hidden group relative bg-bg-alt border border-border-main">
          <img src={images[0]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="px-4 py-2 bg-white text-text-main rounded-lg text-sm font-medium shadow-sm hover:bg-bg-alt transition-colors">View Details</button>
          </div>
        </div>
        
        {images.slice(1).map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden group relative bg-bg-alt border border-border-main">
            <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-text-main rounded-lg text-sm font-medium shadow-sm hover:bg-bg-alt transition-colors">View</button>
            </div>
          </div>
        ))}
        {/* Vertical item taking 2 rows */}
        <div className="row-span-2 rounded-xl overflow-hidden group relative bg-bg-alt border border-border-main">
          <img src={images[3]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <button className="px-4 py-2 bg-white text-text-main rounded-lg text-sm font-medium shadow-sm hover:bg-bg-alt transition-colors">View</button>
          </div>
        </div>
      </div>

      {/* Exposing the function to open drawer globally or keeping it here. Let's just have a button inside the view if it wasn't triggered by navbar */}
      <button onClick={() => setIsDrawerOpen(true)} className="fixed bottom-8 right-8 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-dark transition-colors lg:hidden z-20">
        <UploadCloud size={24} />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Upload Images"
        footer={
          <>
            <button onClick={() => setIsDrawerOpen(false)} className="px-4 h-10 border border-border-main rounded-lg text-text-main font-medium hover:bg-bg-alt transition-colors text-sm">
              Cancel
            </button>
            <button className="px-4 h-10 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors shadow-sm text-sm" onClick={() => setIsDrawerOpen(false)}>
              Upload Files
            </button>
          </>
        }
      >
        <div className="space-y-6">
          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Media Files</label>
            <div className="border-2 border-dashed border-border-main rounded-xl p-10 flex flex-col items-center justify-center text-center bg-bg-alt hover:bg-white transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-tint text-brand flex items-center justify-center mb-3">
                <UploadCloud size={24} />
              </div>
              <p className="font-medium text-text-main text-sm mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-text-muted">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </section>

          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Category</label>
            <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm">
              <option>Workshops</option>
              <option>Courses</option>
              <option>Events</option>
              <option>Competitions</option>
            </select>
          </section>

          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Caption (Optional)</label>
            <textarea 
              rows={4} 
              placeholder="Add a descriptive caption for these images..." 
              className="w-full border border-border-main rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm resize-none" 
            />
          </section>
        </div>
      </Drawer>
    </div>
  );
}
