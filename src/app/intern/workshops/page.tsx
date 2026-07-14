"use client";

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Image as ImageIcon, Plus } from 'lucide-react';
import Drawer from '@/components/intern/Drawer';

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleOpenDrawer = () => setIsDrawerOpen(true);
    window.addEventListener('open-drawer', handleOpenDrawer);
    return () => window.removeEventListener('open-drawer', handleOpenDrawer);
  }, []);

  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'archived', label: 'Archived' },
  ];

  const workshops = [
    {
      id: 1,
      title: 'VEX Robotics Masterclass',
      date: 'Oct 28, 2023',
      venue: 'Innovation Lab, Campus A',
      status: 'archived',
      photos: 24,
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCW28K0sykwMOeIwldfDFemwq4_WvppjTi-l57yo72385BnWk86r1N-tN09khHpbWqX5UCpd2i_D8SqonQTvJYXhaA2m97MLRim6yFqcOyfKet7H7WHZtuIEtJ13_QyCgkMBYtM8vtJPOs29jEXpRa2h9iJ9VUuTg7JICSKNP0eV--eBaZf2QMxLCdmq4B-ALtJ82iKPow0PsDf-3Au6DZS9MCzZ4dBlcrJrTK5Rmnju8tiD1ho1ABB',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAH2P8PRktStRQ4Rc0nKOIjPd4jnZkJ1REtPTAeRQgF7GBe8ZplzkwV0J8xYR1mcwe3KztruNyiv78JAzCOb_-t0t1tbOs--N2qX0ZlUD34dQf7K6x7cTxthvNE-QOVqqdpNC7bwgbAZladjsaKeF9bNw3RM8ACzTY7hUfJlw-1qMhO-znFPdOy4FpZWTvF2FrJ_-r25CKMVH8sYHZlRfzHsp4SXk8uLqaTOsHP4ssYjBTmRnVHFCoC'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlb6SBjqE-UhK7JWO-ptGCYiEH5QmsIl9EtuBrwv6Tb8V32TzaBPD5pnCWKGzcZM7xmgkYccZSu24QZuVMCXRolN8hbOcMkijrSiR4ZY5ipoJKrBapPflyN0SRdzPydAQ5qQpgXUHSfqX3O_kP41oXaaAQR2NASXwS93HSDgSQxvBhS4CUncR_LNLJmLEnNJoo5uk1G1_v8RK6Vqdvg2E-pBSqVzQ-QNJzZIsMkeW6s7mPGrB7CQk8'
    },
    {
      id: 2,
      title: 'Advanced Kinematics',
      date: 'Nov 04, 2023',
      venue: 'Delta Hall, Engineering Bldg',
      status: 'upcoming',
      photos: 12,
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIepGuMxbUv7nSDiXYb3iOjbM9GKrlNlHCWbi9zyk4qwQ69q17_R1SWmpfw7G4zfOdbfHpOXaxq-FVQsYKkS03hesB3dmAZQc-kF5a-uC076U872rAJaKiWW3F2Qyaz_47Pc1M7K0HRV0acCA7Hvuu_273IPF5gt6c7UskEJjCLbrywy8ct9YxhyVZMJVVK5mwrKKdC9xq3BS6lhX2ilO7V1TE9GNvN0j9Vc_jWeku5AqxXEhIMY6'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIepGuMxbUv7nSDiXYb3iOjbM9GKrlNlHCWbi9zyk4qwQ69q17_R1SWmpfw7G4zfOdbfHpOXaxq-FVQsYKkS03hesB3dmAZQc-kF5a-uC076U872rAJaKiWW3F2Qyaz_47Pc1M7K0HRV0acCA7Hvuu_273IPF5gt6c7UskEJjCLbrywy8ct9YxhyVZMJVVK5mwrKKdC9xq3BS6lhX2ilO7V1TE9GNvN0j9Vc_jWeku5AqxXEhIMY6'
    },
    {
      id: 3,
      title: 'IoT & Sensor Integration',
      date: 'Dec 01, 2023',
      venue: 'Embedded Systems Lab',
      status: 'upcoming',
      photos: 18,
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWr39UFDTppTbiDwb9ejqoTQp8ZHwgnfLOwpKFNX_f5MfJfQerHuAj-gDn4k87d5tyzhltvFX_EAdcFC7_EF1pGuqRSF3Vt95SHP-ZQUtn60ETaC8iMuqQDiVVgnyPHz1wn-p8du6mHzgl1nCgR-L9kia1c-xKk9WuxiqzRKkXv-Qv9vk8UF_0MyODkOtk_UyR8Dm0FS_iVEfS7-ZKbhYrFTvYbI3cs82V7p852NXl6-tOqbZP_j8D'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPiJ5t17CD48Ym4Cs3OIke29Qwf8J7de6gJBpoGdJwn2GqEYpdCD6YRqcZ8XmgKvHRnq421Yge2XvbAaBMyFdqa4ATBbswvXgSin8yg6eWMBQYkrU9o3Eo3ysC5LO8gd1S64RwpnaK38NuMA6sr3BASmwyvfHXnvtk8IjOKV9MKQTgTUrLRQ4VnDJclSVFY4O7RtXa9pNbWBzIi97StJ41iGoya8NTEEsWta5pXiKeVK0ZcrjsvDy'
    }
  ];

  const filteredWorkshops = workshops.filter(ws => {
    if (activeTab === 'all') return true;
    return ws.status === activeTab;
  });

  return (
    <div className="flex flex-col h-full gap-6 p-6">
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Workshops</h2>
          <p className="text-sm text-secondary mt-1">14 Workshops total • Managing across 3 campuses</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-surface-container-low p-1.5 rounded-lg w-max shrink-0">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wider ml-2 mr-1">Show:</span>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded transition-colors ${
              activeTab === tab.id 
                ? 'bg-primary-container text-on-primary-container shadow-sm' 
                : 'text-secondary hover:text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-4">
        {filteredWorkshops.map((ws) => (
          <div key={ws.id} className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="h-40 bg-surface-container-low relative shrink-0">
              <img src={ws.image} alt={ws.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-on-surface text-lg mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                {ws.title}
              </h3>
              
              <div className="space-y-2 mb-6 text-sm text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{ws.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="line-clamp-1">{ws.venue}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider">
                  <ImageIcon size={14} />
                  {ws.photos} Photos
                </span>
                <div className="flex -space-x-2">
                  {ws.avatars.map((avatar, i) => (
                    <img key={i} src={avatar} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover bg-surface-container-low" />
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold">
                    +{Math.floor(Math.random() * 10) + 2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setIsDrawerOpen(true)} className="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-colors lg:hidden z-20">
        <Plus size={24} />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Add Workshop"
        subtitle="Create a new session for the catalog"
        footer={
          <>
            <button onClick={() => setIsDrawerOpen(false)} className="px-4 h-10 border border-border rounded-lg text-on-surface font-medium hover:bg-surface-container-low transition-colors text-sm">
              Cancel
            </button>
            <button className="px-4 h-10 bg-primary-container text-on-primary-container rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm text-sm" onClick={() => setIsDrawerOpen(false)}>
              Save Workshop
            </button>
          </>
        }
      >
        <div className="space-y-6">
          <section className="space-y-2">
            <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Workshop Title</label>
            <input type="text" placeholder="e.g. Intro to ROS Navigation" className="w-full h-10 border border-border rounded-lg px-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
          </section>

          <section className="space-y-2">
            <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Description</label>
            <textarea 
              rows={4} 
              placeholder="Describe the learning objectives and prerequisites..." 
              className="w-full border border-border rounded-lg p-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" 
            />
          </section>

          <div className="grid grid-cols-2 gap-4">
            <section className="space-y-2">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Date</label>
              <div className="relative">
                <input type="date" className="w-full h-10 border border-border rounded-lg px-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm text-secondary" />
              </div>
            </section>
            <section className="space-y-2">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Venue</label>
              <select className="w-full h-10 border border-border rounded-lg px-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm text-secondary">
                <option>Select Location</option>
                <option>Innovation Lab, Campus A</option>
                <option>Delta Hall, Engineering Bldg</option>
              </select>
            </section>
          </div>

          <hr className="border-border" />
          <h3 className="font-semibold text-on-surface text-sm uppercase tracking-wider">Media Assets</h3>

          <section className="space-y-2">
            <label className="text-[10px] font-bold text-secondary uppercase tracking-wider">Poster Image</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface transition-colors cursor-pointer">
              <ImageIcon className="text-secondary mb-2 w-8 h-8" />
              <p className="font-medium text-on-surface text-sm"><span className="text-primary">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-secondary mt-1">Recommended size: 1200×800px</p>
            </div>
          </section>

          <section className="space-y-2">
            <label className="text-[10px] font-bold text-secondary uppercase tracking-wider">Gallery Images (Optional)</label>
            <div className="w-24 h-24 border border-border rounded-xl flex items-center justify-center bg-surface-container-low hover:bg-surface transition-colors cursor-pointer text-secondary hover:text-on-surface">
              <Plus size={24} />
            </div>
          </section>
        </div>
      </Drawer>
    </div>
  );
}
