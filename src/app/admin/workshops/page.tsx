"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex-1 overflow-y-auto bg-surface p-container-padding custom-scrollbar">
        {/* Header & Add Button */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background">Workshops</h2>
            <p className="text-secondary font-body-md">14 Workshops total • Managing across 3 campuses</p>
          </div>
          <button 
            className="bg-primary-container hover:bg-primary text-white font-body-md-bold px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-all active:scale-95"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="material-symbols-outlined">add</span>
            Add Workshop
          </button>
        </div>

        {/* Filters Toolbar */}
        <div className="flex items-center justify-between bg-white p-4 border border-border rounded-xl mb-8 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-secondary px-2">Show:</span>
            <button className="px-4 py-1.5 bg-surface-container text-primary font-semibold text-sm rounded-lg border border-primary-container/20">All Events</button>
            <button className="px-4 py-1.5 text-secondary hover:bg-bg-alt text-sm rounded-lg transition-colors">Upcoming</button>
            <button className="px-4 py-1.5 text-secondary hover:bg-bg-alt text-sm rounded-lg transition-colors">Archived</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-bg-alt border border-border rounded-lg px-3 py-1.5 gap-2 cursor-pointer hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary text-sm">calendar_month</span>
              <span className="text-sm text-secondary">Date Range</span>
            </div>
            <div className="flex items-center bg-bg-alt border border-border rounded-lg px-3 py-1.5 gap-2 cursor-pointer hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
              <span className="text-sm text-secondary">Venue</span>
            </div>
            <button className="p-2 text-secondary hover:bg-bg-alt rounded-lg transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>

        {/* Workshop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-48">
              <img 
                className="w-full h-full object-cover" 
                alt="VEX Robotics Masterclass"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYMBxKZMbHoYZQDJBeT1ECSjMtjTL8AYI18dKSG3_I__-mW6mwefTt0ltlr-UiDFJP6GeRTTZHGoNVTwyHuGujExu_X9qSWxAaNBSyrfeVA-l6etl87Kwq-GIeAeIt-TXuYtFyuuXToVccm7ltvTvDSyEQDJYnw6hZUMzVosMhYYbHXaOGZ0ED0I3taoiER_fPEdAqRWUauJlflfwmcN1MIQxikjOldO-RZ8ah9MfDkgANZ5jnSIy3"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">VEX Robotics Masterclass</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">event</span>
                  Oct 28, 2023
                </div>
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Innovation Lab, Campus A
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-sm">photo_library</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">24 Photos</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[10px] flex items-center justify-center text-white">+12</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-48">
              <img 
                className="w-full h-full object-cover" 
                alt="Advanced Kinematics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZn9Nz_v7SJttCa3jZgR91JKBQAR3KrNi-Azrvj75oQPoq3bXgD6aePZolQFBGDJoGglCt17NI55vjcAN5k8u0Mq-FZHbgNb00cooxixJeutNjrAp0bgdoiEUaPXpTStuI0Fpp_HeO0akmLlGbWxL1dOYX1wINBlu218XIfwhCflCcviM_ABiJiZflxSC3vl1Xc_bk00P31PGCL2oDxOrrx7QNh0nmTo8jgmR6pWBjEYqMUPtNAAwF"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">Advanced Kinematics</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">event</span>
                  Nov 04, 2023
                </div>
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Delta Hall, Engineering Wing
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-sm">photo_library</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">12 Photos</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[10px] flex items-center justify-center text-white">+5</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-48">
              <img 
                className="w-full h-full object-cover" 
                alt="VR Simulation Workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBeLRJCTTbl7Z_CN7CGGwRY4Ke1NzLrDpzAiPlhntUS_U1Id1BbMYTsiXq-QJ3ABfQONVPsJUrO9_NQwwLbIvJF46EAQStJzOvbP0SZ3j3IyDSjXBui7XXe17leUulBCCBGxtKiQ468_mw17_d4peNVbn2cq0WnFpbQHi9jlscWPS8y24vAjE5RqNrJ2x-O2VeWTDIiuZDD_gebo_cFCnINjDlgTz97ZBIJc9j4tBpCl-KQ9i72t_0"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">VR Simulation Workshop</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">event</span>
                  Nov 12, 2023
                </div>
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Metaverse Hub, Innovation Center
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-sm">photo_library</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">40 Photos</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[10px] flex items-center justify-center text-white">+28</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-48">
              <img 
                className="w-full h-full object-cover" 
                alt="IoT & Sensor Integration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbBG4rzjy7vLWU5jKniJUFB7kivLJq6zYsS1g1_yddEsockHcI0Iv8Cjzg0td0sPnXNRTz02OICXqO5_Co5S3wxcd3fLZRxinDSuQivVFYbG1EPjorQ0ZREQeisO5uv7gd23y-bxoGeIdOXgkNsw67mQZyZNGpSd1B6h1npscn9jUjjyhGP4NwvzqSyfqWDYEy2YNzr8B9m-yyX9P-KEwGRr4tawJO2R_vLx9-VkA1aLcBDnDxJ4uS"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">IoT &amp; Sensor Integration</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">event</span>
                  Dec 01, 2023
                </div>
                <div className="flex items-center text-secondary gap-2 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Embedded Systems Lab
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-sm">photo_library</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">18 Photos</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[10px] flex items-center justify-center text-white">+8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Drawer: Add Workshop */}
      <div 
        className={`fixed inset-0 z-[60] drawer-overlay transition-opacity duration-300 bg-black/20 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-[480px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out border-l border-border flex flex-col ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md">Add Workshop</h3>
            <p className="text-secondary text-sm">Create a new session for the catalog</p>
          </div>
          <button 
            className="p-2 hover:bg-bg-alt rounded-full text-secondary transition-colors" 
            onClick={() => setIsDrawerOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form className="space-y-6">
            {/* Text Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Workshop Title</label>
                <input 
                  className="w-full h-11 px-4 border border-border rounded-lg text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all" 
                  placeholder="e.g. Intro to ROS Navigation" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Description</label>
                <textarea 
                  className="w-full px-4 py-3 border border-border rounded-lg text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all" 
                  placeholder="Describe the learning objectives and prerequisites..." 
                  rows={4}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1">Date</label>
                  <input 
                    className="w-full h-11 px-4 border border-border rounded-lg text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all" 
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1">Venue</label>
                  <div className="relative">
                    <select 
                      className="w-full h-11 px-4 pr-10 border border-border rounded-lg text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all appearance-none"
                    >
                      <option>Select Location</option>
                      <option>Innovation Lab, Campus A</option>
                      <option>Delta Hall, Engineering Wing</option>
                      <option>Main Auditorium</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Uploads */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">Media Assets</h4>
              
              {/* Poster Upload */}
              <div>
                <label className="block text-xs font-bold text-secondary mb-2">POSTER IMAGE</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center bg-bg-alt hover:bg-surface-container-low hover:border-primary-container transition-all cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-primary transition-colors mb-2">add_photo_alternate</span>
                  <p className="text-sm text-secondary font-medium"><span className="text-primary">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-secondary mt-1">Recommended size: 1200x800px</p>
                </div>
              </div>

              {/* Gallery Multi-upload */}
              <div>
                <label className="block text-xs font-bold text-secondary mb-2">GALLERY IMAGES (OPTIONAL)</label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square bg-bg-alt border border-border rounded-lg flex items-center justify-center text-secondary hover:border-primary-container hover:text-primary cursor-pointer transition-all">
                    <span className="material-symbols-outlined">add</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Drawer Actions */}
        <div className="p-6 border-t border-border flex items-center gap-4 bg-white">
          <button 
            type="button"
            className="flex-1 px-6 py-2.5 border border-border rounded-lg text-on-surface font-body-md-bold hover:bg-bg-alt transition-colors" 
            onClick={() => setIsDrawerOpen(false)}
          >
            Cancel
          </button>
          <button className="flex-1 px-6 py-2.5 bg-primary-container text-white rounded-lg font-body-md-bold hover:bg-primary transition-colors shadow-sm">
            Save Workshop
          </button>
        </div>
      </div>
    </>
  );
}
