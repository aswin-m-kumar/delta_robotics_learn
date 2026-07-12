"use client";

import { useState } from "react";

export default function ExperiencesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex-1 min-h-screen bg-white">
        <div className="p-container-padding max-w-[1440px] mx-auto">
          {/* Header & Stats */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Experiences</h2>
              <p className="text-on-surface-variant font-body-md text-body-md">12 Experiences total in the current catalog</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 px-1">Status</label>
                <select className="h-10 px-3 rounded-lg border border-border bg-white text-body-md focus:ring-1 focus:ring-primary outline-none">
                  <option>All Statuses</option>
                  <option>Live</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 px-1">Related Course</label>
                <select className="h-10 px-3 rounded-lg border border-border bg-white text-body-md focus:ring-1 focus:ring-primary outline-none">
                  <option>All Courses</option>
                  <option>Intro to Robotics</option>
                  <option>Advanced Kinematics</option>
                  <option>AI for Automation</option>
                </select>
              </div>
              <button 
                className="h-10 mt-auto bg-primary-container text-white px-6 rounded-lg font-body-md-bold hover:brightness-110 shadow-sm flex items-center gap-2"
                onClick={() => setIsDrawerOpen(true)}
              >
                <span className="material-symbols-outlined">add_circle</span>
                Add Experience
              </button>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 bg-surface-container-low overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbI3dMEiqkD4MSv6UKBt-FORF7eU9dMPG45PJeK9z5g0byCEQRcXO26piLLycV8FsV6cupeuLxQNK3bdf6crxvyRC20HotjdqRxc53ABhiTArRioiEqAH4-VQgGz6wzsIXB_g7vzCeCd3684B3N6JKFgR6npNWjZ5qZ9wn0Iuylmkyzty9zh_w_lsdtiB46XUTwB_FC97Lfu5clLGJwDwvL8W8od1IydpsZL1y5z30bsIlJpOtU6lu')"}}
                ></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm border border-border">Live</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider bg-tertiary-fixed px-2 py-0.5 rounded">Intro to Robotics</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">Student Spotlight: Robot Arm Assembly</h3>
                <p className="text-on-surface-variant text-body-md font-body-md line-clamp-2 mb-4">A step-by-step documentation of the 6-DOF arm calibration process by our Senior year students.</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[8px] font-bold text-white">SA</div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-low flex items-center justify-center text-[8px] font-bold text-secondary">RJ</div>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-medium">Updated 2h ago</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 bg-surface-container-low overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8axthSmIISmFdKV19EdJN6-P7iGbcVw_-0wnbNr4j1CXSBldlnCutOoTHwJXSuK-1zEXEfbFuRMp6exGcvOp-MCp5cfl_LXwO0Ta0lIeo1xJxNfAE74k4jGAuKfNkm5BTz2rcHB5fBWsPWE1BwYXJM-qs_Tm3WJ85at5SDzi31ohaIbhwZyZH-Cc4gcHEajBMvxJKCq5Wfd55zmsRUX5gBQ-dMNp4v3yhxFQYeXm8rxsSkYyQ-iXy')"}}
                ></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-on-surface-variant shadow-sm border border-border">Draft</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider bg-tertiary-fixed px-2 py-0.5 rounded">AI for Automation</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">Neural Pathfinding Demo</h3>
                <p className="text-on-surface-variant text-body-md font-body-md line-clamp-2 mb-4">Testing real-time obstacle avoidance algorithms using local computer vision processing.</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-low flex items-center justify-center text-[8px] font-bold text-secondary">MK</div>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-medium">Updated 1d ago</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 bg-surface-container-low overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt6ITKcFxqbcJHAY2nhffopdO5wu-0ytTnIog6DLy6YVcHw1iuEXu3S9b4rUeZTtvuiHfZ7-gPyC3rX04tSVbLIU1_88ViCmqs2NvphVrrihLGm0Ve1El4Wtc5v1JEdK0SSjgV9pc2I7S5xea30UMi2SlbICGafJdj6-d5352ONGutxOGTw-j5XNvG2W6LmljDug-c9UwDHWx9RU08p1oBmnfuxbUAKwbz_xLdujSYF_-Rh5J4o11t')"}}
                ></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm border border-border">Live</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider bg-tertiary-fixed px-2 py-0.5 rounded">Factory Systems</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">Industrial Cell Workflow</h3>
                <p className="text-on-surface-variant text-body-md font-body-md line-clamp-2 mb-4">A complete overview of a collaborative production line setup using Delta series robots.</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-fixed-dim flex items-center justify-center text-[8px] font-bold text-white">TD</div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[8px] font-bold text-white">AJ</div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-low flex items-center justify-center text-[8px] font-bold text-secondary">PK</div>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-medium">Updated 3d ago</span>
                </div>
              </div>
            </div>

            {/* Card 4 (Add Placeholder) */}
            <button 
              className="group border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary-container hover:bg-accent-tint/30 transition-all min-h-[350px]"
              onClick={() => setIsDrawerOpen(true)}
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">add</span>
              </div>
              <div className="text-center">
                <p className="font-headline-sm text-headline-sm text-on-surface">New Experience</p>
                <p className="text-on-surface-variant text-body-md font-body-md">Create a student story</p>
              </div>
            </button>

            {/* Card 5 */}
            <div className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 bg-surface-container-low overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH-6l7lvztv05L39jJsy0XDRz5s0TF8lVr1kRLQJZWU_VtVc5ltNgFXR1xsNAEHyBifZr0uJvVgfanHX80rkvMrC5kgRyeJ6eAV2DF5TLnRWwY3Q-HdpicYAWeFWrLDH2WI4rZYFIWrkr9pNUdJQ8TZYh7pny6ocd7AH-SteeLXFLY8Vdqr7nwOsJQBiMNZhAhltJ0-bqAmOrmv9WtdHuxUWcczcwMgCyurpOclsVL-vQzv6AaSqzp')"}}
                ></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm border border-border">Live</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider bg-tertiary-fixed px-2 py-0.5 rounded">Electronics</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">Control Board Integration</h3>
                <p className="text-on-surface-variant text-body-md font-body-md line-clamp-2 mb-4">Detailed breakdown of custom PCB design and sensor integration for the MK-4 chassis.</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[8px] font-bold text-white">SL</div>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-medium">Updated 5d ago</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all opacity-80 grayscale-[0.5]">
              <div className="relative h-48 bg-surface-container-low overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt3CP2vXOX1ojAKwE4gt2z2tbfKwPK3ssH-IZHzF4-koM0tPv1AUxG_IVFN_Vso6nnwWW7V4pQPWCrv6yms4SdoG61XBm3O72eXOTkgMVhyo7SD2DKHZ6EhCVzZDJEWoFGHh-ZQQPgrnA4FsRdnIoh8rncbxqQ78VUdXR5rteIRh1CH0oL82yg1uZOi2Uiw_jrtBuOG65ZdEqljVzJh6qwGlRxVYEKaAlEp9IQwRT4zEJzV1lfMrnJ')"}}
                ></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-surface-dim/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-on-surface-variant shadow-sm border border-border">Archived</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded">HMI Studies</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">VR Haptic Feedback Test</h3>
                <p className="text-on-surface-variant text-body-md font-body-md line-clamp-2 mb-4">Old experimental data from the 2023 session regarding remote surgery simulations.</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-[11px] text-on-surface-variant font-medium">Archived on Sep 12</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Side Drawer Component */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm"></div>
        {/* Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-[480px] bg-white shadow-2xl transition-transform duration-300 flex flex-col border-l border-border ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="px-6 py-6 border-b border-border flex items-center justify-between bg-bg-alt">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Add New Experience</h2>
              <p className="text-on-surface-variant text-body-md font-body-md">Create a spotlight for student achievements.</p>
            </div>
            <button 
              className="p-2 hover:bg-surface-container rounded-full transition-all text-on-surface-variant" 
              onClick={() => setIsDrawerOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/* Drawer Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="font-body-md-bold text-on-surface">Experience Title</label>
              <input className="w-full h-10 px-4 rounded-lg border border-border focus:ring-2 focus:ring-primary-container outline-none transition-all font-body-md" placeholder="e.g. Robot Arm Assembly Showcase" type="text"/>
            </div>
            {/* Related Course */}
            <div className="space-y-2">
              <label className="font-body-md-bold text-on-surface">Related Course</label>
              <select className="w-full h-10 px-4 rounded-lg border border-border focus:ring-2 focus:ring-primary-container outline-none transition-all font-body-md">
                <option>Select a course...</option>
                <option>Intro to Robotics</option>
                <option>Advanced Kinematics</option>
                <option>AI for Automation</option>
              </select>
            </div>
            {/* Description */}
            <div className="space-y-2">
              <label className="font-body-md-bold text-on-surface">Short Description</label>
              <textarea className="w-full p-4 rounded-lg border border-border focus:ring-2 focus:ring-primary-container outline-none transition-all font-body-md resize-none" placeholder="Briefly describe what happened during this experience..." rows={3}></textarea>
            </div>
            {/* Student Review */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body-md-bold text-on-surface">Student Review <span className="text-on-surface-variant font-normal">(Optional)</span></label>
                <span className="text-xs text-on-surface-variant">0/500</span>
              </div>
              <textarea className="w-full p-4 rounded-lg border border-border focus:ring-2 focus:ring-primary-container outline-none transition-all font-body-md resize-none italic" placeholder="Direct quote or feedback from the participating student..." rows={4}></textarea>
            </div>
            {/* Image Upload Placeholder */}
            <div className="space-y-2">
              <label className="font-body-md-bold text-on-surface">Experience Media</label>
              <div className="w-full h-40 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-bg-alt hover:bg-surface-container transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">add_photo_alternate</span>
                <p className="text-body-md text-on-surface-variant mt-2">Click to upload or drag & drop</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>
            {/* Status Toggle */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
              <div>
                <p className="font-body-md-bold text-on-surface">Display Status</p>
                <p className="text-xs text-on-surface-variant">Make this experience visible in the student portal immediately.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-secondary-fixed peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
              </label>
            </div>
          </div>
          {/* Drawer Footer */}
          <div className="px-6 py-6 border-t border-border flex gap-3">
            <button 
              className="flex-1 px-4 py-2 rounded-lg border border-border font-body-md-bold text-on-surface hover:bg-bg-alt transition-all"
              onClick={() => setIsDrawerOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="flex-1 px-4 py-2 rounded-lg bg-primary-container text-white font-body-md-bold hover:brightness-110 shadow-sm transition-all"
              onClick={() => setIsDrawerOpen(false)}
            >
              Save Experience
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
