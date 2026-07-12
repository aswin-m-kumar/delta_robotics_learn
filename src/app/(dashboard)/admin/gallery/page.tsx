"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imgSrc: string;
    title: string;
    date: string;
    category: string;
  }>({
    isOpen: false,
    imgSrc: "",
    title: "",
    date: "",
    category: "",
  });

  const openLightbox = (imgSrc: string, title: string, date: string, category: string) => {
    setLightboxData({ isOpen: true, imgSrc, title, date, category });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <div className="flex-1 min-h-screen bg-white">
        <div className="p-container-padding max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Gallery</h1>
              <p className="text-secondary font-body-md">Manage visual assets for workshops, courses, and events.</p>
            </div>
            <button 
              className="px-5 py-2.5 bg-primary-container text-white font-body-md-bold rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
              onClick={() => setIsDrawerOpen(true)}
            >
              <span className="material-symbols-outlined text-[20px]">cloud_upload</span> 
              Upload Images
            </button>
          </div>

          {/* Content Tabs */}
          <div className="border-b border-border mb-6 flex overflow-x-auto">
            <button className="px-4 py-3 border-b-2 border-primary-container text-primary font-body-md-bold whitespace-nowrap">All Media</button>
            <button className="px-4 py-3 border-b-2 border-transparent text-secondary hover:text-on-surface hover:border-border transition-colors font-body-md whitespace-nowrap">Workshops</button>
            <button className="px-4 py-3 border-b-2 border-transparent text-secondary hover:text-on-surface hover:border-border transition-colors font-body-md whitespace-nowrap">Courses</button>
            <button className="px-4 py-3 border-b-2 border-transparent text-secondary hover:text-on-surface hover:border-border transition-colors font-body-md whitespace-nowrap">Events</button>
            <button className="px-4 py-3 border-b-2 border-transparent text-secondary hover:text-on-surface hover:border-border transition-colors font-body-md whitespace-nowrap">Competitions</button>
            <button className="px-4 py-3 border-b-2 border-transparent text-secondary hover:text-on-surface hover:border-border transition-colors font-body-md whitespace-nowrap">General</button>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter auto-rows-[200px]">
            {/* Grid Item 1 (Large) */}
            <div 
              className="col-span-2 row-span-2 rounded-xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-surface-container-lowest"
              onClick={() => openLightbox('https://lh3.googleusercontent.com/aida-public/AB6AXuAbeyTEZiW0BjJQxiGYM6V4q4IC8ymD-uUAGMv1Ium53wSQi_v8gsNq7n2YV_sMwGwzXKrN-Yi2felYMe4RJSLILcpJxWqLwvRwvfee3ElwbAM25cUo1tQMcwdS4Q4X5rr0q1wv0LG3Tw3lvkZFdRFnM_fOlfPB0QEQaHlMYOBz-aPxCB8e-qGngf3Fvefeq6p91Zxm_0DhYF5JpHhYMRwBYG28qsSawZ_rtpPBZCW9_PijAXRhI_VG', 'Robotics Workshop Q3', 'Oct 12, 2023', 'Workshops')}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Robotics Workshop Q3" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbeyTEZiW0BjJQxiGYM6V4q4IC8ymD-uUAGMv1Ium53wSQi_v8gsNq7n2YV_sMwGwzXKrN-Yi2felYMe4RJSLILcpJxWqLwvRwvfee3ElwbAM25cUo1tQMcwdS4Q4X5rr0q1wv0LG3Tw3lvkZFdRFnM_fOlfPB0QEQaHlMYOBz-aPxCB8e-qGngf3Fvefeq6p91Zxm_0DhYF5JpHhYMRwBYG28qsSawZ_rtpPBZCW9_PijAXRhI_VG"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-xs font-label-sm mb-2 inline-block">Workshops</span>
                    <h3 className="text-white font-headline-sm">Robotics Workshop Q3</h3>
                    <p className="text-white/80 text-xs mt-1">Oct 12, 2023</p>
                  </div>
                  <button 
                    className="p-2 bg-white/20 hover:bg-danger text-white rounded-lg backdrop-blur-md transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div 
              className="rounded-xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-surface-container-lowest"
              onClick={() => openLightbox('https://lh3.googleusercontent.com/aida-public/AB6AXuDZLutIKguSgjuQDSRpnA9n8OMGhgq0J1Fok8v5xVVz_TzXnRNBbK0_Oa8BVIpuiIQgjixKbDG76QVQWZEAWzh5Cpxze5tr0jCxbQ3cmw_SMjaL3CPtQRqxogGm461PO-oZD1cdiF7UZhF1Il8MHYYs0zmzLQWlZEhcNBkmIem3uBWu8hnyUMlj_EOmCRS1AeBtLw-ti0OPT1eVp8m3kOvCAczTfBSuUk_iZK2ujgD43UpKa7-n0vb4', 'Course Intro', 'Sep 05, 2023', 'Courses')}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Course Intro" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZLutIKguSgjuQDSRpnA9n8OMGhgq0J1Fok8v5xVVz_TzXnRNBbK0_Oa8BVIpuiIQgjixKbDG76QVQWZEAWzh5Cpxze5tr0jCxbQ3cmw_SMjaL3CPtQRqxogGm461PO-oZD1cdiF7UZhF1Il8MHYYs0zmzLQWlZEhcNBkmIem3uBWu8hnyUMlj_EOmCRS1AeBtLw-ti0OPT1eVp8m3kOvCAczTfBSuUk_iZK2ujgD43UpKa7-n0vb4"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-white/20 hover:bg-danger text-white rounded-lg backdrop-blur-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
                <span className="text-white font-body-md-bold px-3 py-1 border border-white/50 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div 
              className="rounded-xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-surface-container-lowest"
              onClick={() => openLightbox('https://lh3.googleusercontent.com/aida-public/AB6AXuDkvNSzR-hrrKabf9sdQMT8sGvwpI4bfLGyo2eUwAid1BijCu8yASFq2iPvBS124QeW1ZX3tgwpulRtL_Q13hZ9D3N8Oqv4AYcQysUYLNjSjBPIcvQO9fK6RAccmzrtx2Z-Yy9bmBxhElb4FlYXWBIBY_tR4wT0NwD4ERr-9pzV5jL3rfEGxORW51jksnMH_TpvRXaoQfkemWVaE0pCm3qI-KUc1D3bhtUQXakEu2sQgtUfQNozwmGY', 'Annual Competition', 'Aug 20, 2023', 'Competitions')}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Annual Competition" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvNSzR-hrrKabf9sdQMT8sGvwpI4bfLGyo2eUwAid1BijCu8yASFq2iPvBS124QeW1ZX3tgwpulRtL_Q13hZ9D3N8Oqv4AYcQysUYLNjSjBPIcvQO9fK6RAccmzrtx2Z-Yy9bmBxhElb4FlYXWBIBY_tR4wT0NwD4ERr-9pzV5jL3rfEGxORW51jksnMH_TpvRXaoQfkemWVaE0pCm3qI-KUc1D3bhtUQXakEu2sQgtUfQNozwmGY"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-white/20 hover:bg-danger text-white rounded-lg backdrop-blur-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
                <span className="text-white font-body-md-bold px-3 py-1 border border-white/50 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>

            {/* Grid Item 4 */}
            <div 
              className="rounded-xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-surface-container-lowest"
              onClick={() => openLightbox('https://lh3.googleusercontent.com/aida-public/AB6AXuAaz8KMHziWT4ZGcoyfpzXHNoBFvDUxaJ6Hs_OMKqpXGwNDLNinS20aOgdRSWU3n4t4fRZ9W1Kr0dsVSrilZCex9dmKLJyFHGbZZLFjwDWxZYfB_ZAnw5aVOlCbW8sdhs5j4cyrYKm3Zl8iZkMqzk7A-RekTHyfAbg6WDA4RyLHtsk_qb7kBMYOkEjucqXbfgxjOy7MsOUwkjy3FQttHlDla9bgUCyCshsBpFhzOMYxnJTrN3dS-gJn', 'Lab Equipment', 'Jul 11, 2023', 'General')}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Lab Equipment" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaz8KMHziWT4ZGcoyfpzXHNoBFvDUxaJ6Hs_OMKqpXGwNDLNinS20aOgdRSWU3n4t4fRZ9W1Kr0dsVSrilZCex9dmKLJyFHGbZZLFjwDWxZYfB_ZAnw5aVOlCbW8sdhs5j4cyrYKm3Zl8iZkMqzk7A-RekTHyfAbg6WDA4RyLHtsk_qb7kBMYOkEjucqXbfgxjOy7MsOUwkjy3FQttHlDla9bgUCyCshsBpFhzOMYxnJTrN3dS-gJn"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-white/20 hover:bg-danger text-white rounded-lg backdrop-blur-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
                <span className="text-white font-body-md-bold px-3 py-1 border border-white/50 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>

            {/* Grid Item 5 (Tall) */}
            <div 
              className="row-span-2 rounded-xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-surface-container-lowest"
              onClick={() => openLightbox('https://lh3.googleusercontent.com/aida-public/AB6AXuBVJ5RScXXKD3LtGMY1Y1B45F_00K3DLdSpizS7j0uzIhvFBsuAmPOXIMaCV7kp9GyDZ3hh1gJTo_wbbj8L2Esd76RtpcYR1OirNLFo6OIi4xJ6YZzlXdifgf39vobdTITQsvqvobUpQZZHft2YCyXoKDxYvtCTbrlZZQyRuNuRanVVRzeDp-scfjxqlmcD2LM8ANpDnTPENuc0J2bt8ZXgoMW5UdBwFPGbCnsWaTCQoL2WqujwZI1m', 'Student Portrait', 'Jun 02, 2023', 'Events')}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Student Portrait" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVJ5RScXXKD3LtGMY1Y1B45F_00K3DLdSpizS7j0uzIhvFBsuAmPOXIMaCV7kp9GyDZ3hh1gJTo_wbbj8L2Esd76RtpcYR1OirNLFo6OIi4xJ6YZzlXdifgf39vobdTITQsvqvobUpQZZHft2YCyXoKDxYvtCTbrlZZQyRuNuRanVVRzeDp-scfjxqlmcD2LM8ANpDnTPENuc0J2bt8ZXgoMW5UdBwFPGbCnsWaTCQoL2WqujwZI1m"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-white/20 hover:bg-danger text-white rounded-lg backdrop-blur-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
                <h3 className="text-white font-headline-sm">Student Showcase</h3>
                <p className="text-white/80 text-xs mt-1">Jun 02, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-on-surface/40 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      
      {/* Upload Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.1)] z-[70] transition-transform duration-300 ease-in-out flex flex-col border-l border-border ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b border-border flex justify-between items-center bg-surface-container-lowest">
          <h2 className="font-headline-md text-headline-md text-on-surface">Upload Images</h2>
          <button 
            className="text-secondary hover:text-on-surface p-2 rounded-full hover:bg-surface-container-low transition-colors"
            onClick={() => setIsDrawerOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {/* Dropzone */}
          <div>
            <label className="block font-body-md-bold text-on-surface mb-2">Media Files</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-bg-alt hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-[24px]">cloud_upload</span>
              </div>
              <p className="font-body-md-bold text-on-surface">Click to upload or drag and drop</p>
              <p className="text-secondary font-body-md mt-1 text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
          {/* Category */}
          <div>
            <label className="block font-body-md-bold text-on-surface mb-2">Category</label>
            <div className="relative">
              <select className="w-full h-[40px] pl-3 pr-10 rounded-lg border border-border bg-white text-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container appearance-none">
                <option>Workshops</option>
                <option>Courses</option>
                <option>Events</option>
                <option>Competitions</option>
                <option>General</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-secondary pointer-events-none">expand_more</span>
            </div>
          </div>
          {/* Caption */}
          <div>
            <label className="block font-body-md-bold text-on-surface mb-2">Caption (Optional)</label>
            <textarea 
              className="w-full p-3 rounded-lg border border-border bg-white text-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container resize-none" 
              placeholder="Add a descriptive caption for these images..." 
              rows={4}
            ></textarea>
          </div>
        </div>
        <div className="p-6 border-t border-border bg-surface-container-lowest flex justify-end gap-3">
          <button 
            className="px-5 py-2.5 bg-white border border-border text-on-surface font-body-md-bold rounded-lg hover:bg-surface-container-low transition-colors"
            onClick={() => setIsDrawerOpen(false)}
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-primary-container text-white font-body-md-bold rounded-lg hover:bg-primary transition-colors">
            Upload Files
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <div 
        className={`fixed inset-0 z-[100] items-center justify-center p-4 sm:p-8 ${lightboxData.isOpen ? "flex" : "hidden"}`}
      >
        <div 
          className="absolute inset-0 bg-on-surface/90 backdrop-blur-md"
          onClick={closeLightbox}
        ></div>
        <div className="relative z-10 w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[921px] transition-all duration-200">
          {/* Image Area */}
          <div className="flex-1 bg-black relative flex items-center justify-center min-h-[300px]">
            <button 
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors z-20 md:hidden"
              onClick={closeLightbox}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            {lightboxData.imgSrc ? (
              <img 
                alt="Lightbox View" 
                className="max-w-full max-h-full object-contain" 
                src={lightboxData.imgSrc}
              />
            ) : null}
          </div>
          {/* Details Sidebar */}
          <div className="w-full md:w-[320px] bg-surface-container-lowest flex flex-col border-l border-border shrink-0">
            <div className="p-4 border-b border-border justify-between items-center hidden md:flex">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Image Details</h3>
              <button 
                className="text-secondary hover:text-on-surface p-1.5 rounded-full hover:bg-surface-container-low transition-colors"
                onClick={closeLightbox}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              <span className="px-2.5 py-1 bg-surface-container text-primary-container text-xs font-label-sm rounded inline-block mb-3">
                {lightboxData.category}
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{lightboxData.title}</h2>
              <p className="text-secondary text-sm mb-6 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span> 
                <span>{lightboxData.date}</span>
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-body-md-bold text-on-surface mb-1 text-sm">Resolution</h4>
                  <p className="text-secondary text-sm">2400 x 1600 px</p>
                </div>
                <div>
                  <h4 className="font-body-md-bold text-on-surface mb-1 text-sm">File Size</h4>
                  <p className="text-secondary text-sm">3.2 MB</p>
                </div>
                <div>
                  <h4 className="font-body-md-bold text-on-surface mb-1 text-sm">Uploaded By</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-xs font-bold">DR</div>
                    <span className="text-sm text-secondary">Admin User</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border bg-bg-alt mt-auto">
              <button className="w-full py-2.5 bg-white border border-danger text-danger font-body-md-bold rounded-lg hover:bg-error-container transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">delete</span> Delete Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
