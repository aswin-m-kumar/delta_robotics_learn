"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Mechatronics", "AI & Vision", "Embedded", "Industrial"];

const courses = [
  {
    id: "ros2-intro",
    title: "Intro to ROS 2",
    tagline: "Master the Robot Operating System for real-world robotics applications.",
    category: "Embedded",
    level: "Intermediate",
    levelColor: "text-amber-600 bg-amber-50",
    instructor: "Dr. Sarah Chen",
    duration: "12 Weeks",
    price: 1299,
    rating: 4.8,
    students: 342,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNA9wx-SR0bqA0pNKUNtz6mvtOuUhSBOlwAMWlHe7cMTmkte5-Une9wUepzHp_rTWSIGkBc_w2vee1LvXasW3w2F-n_JxvDeXGI0okjNUHROCY7oaRfglA7QW1uZj8ZzMz_RBm4VEUAr5gD8BMYhmuT28xZBbiSDMTP8BG6Uw1Ez3BsJsfx6ZNIf9PF65Z5kPijKz0KfEeCuT8bq_ibmw5tzhVW9buYIZuV-YT8XNZ_AIIGlzwXte8g",
  },
  {
    id: "computer-vision",
    title: "Computer Vision Basics",
    tagline: "Implement object detection and spatial reasoning for autonomous platforms.",
    category: "AI & Vision",
    level: "Intermediate",
    levelColor: "text-amber-600 bg-amber-50",
    instructor: "Prof. Michael Torres",
    duration: "8 Weeks",
    price: 950,
    rating: 4.6,
    students: 287,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUwCJgyFV3EO_osRDHCBtmDC31vl0d2nLbfqHzMZ4nPdGh-G0ACyhMQmSPjUu7jNC6au5yXnfLcISeSPNaXB9uWAwOYgMqi74-hOxUKrZVLhO0rUrSH5ZBPHyrqsHDe2wnxXOmLKpAA_3tZOUYk3Rk7ZNbvzi4ASOnoEiAaSaRkrP8V7D7vVKb1p8WcpHhjmywF3tuGeEfrYITdv__o_zvKxnAITSbkpD9kZMK71FT9ayv54esgUaWw",
  },
  {
    id: "autonomous-systems",
    title: "Autonomous Systems",
    tagline: "LiDAR integration, SLAM algorithms, and edge computing for mobile robotics.",
    category: "Mechatronics",
    level: "Advanced",
    levelColor: "text-red-600 bg-red-50",
    instructor: "Dr. James Park",
    duration: "14 Weeks",
    price: 1499,
    rating: 4.9,
    students: 156,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8rU-AuFg-E3xxCpg-65018qlDDpkG86vxs7oF6a2oQ99Eg1VQAHd_p9wqOriPJKOf3Y2NbewK05IgAO79_pdH6FpM7bmowyL4wkbMgnJT2MkzYzN7xMLJiylGfQ0TwzNA-YUUC6yNe3Y7W71GgPB1V2mode40Ifz2bWEdXDiUcDr_oXsWKZWR03VfRf0aWW2XT4HqA3JIHWH0fAWwWDY3QlUnc5uufYAIf4sRxrrUaktDCcw-DwsyKw",
  },
  {
    id: "neural-networks",
    title: "Neural Networks for Robotics",
    tagline: "Deep learning for computer vision and reactive robot control architectures.",
    category: "AI & Vision",
    level: "Advanced",
    levelColor: "text-red-600 bg-red-50",
    instructor: "Dr. Sarah Chen",
    duration: "10 Weeks",
    price: 1100,
    rating: 4.7,
    students: 203,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjjX2xYVg2JEG8D4ABhKHwlmPTVT-u4QBUFASemqKzL4uRbdC_XElarJiz_fm9iWkl1hFwKkLRCHpSu1TkrJdstHHqSdp2sLpcxqml1E3b8fwWxVVR3sG8KuIsa2emk8-xtx1X-aUQTJsgRVUT2brSI4wqsxPXTH9fTgEK4LX6-ytJr8C-LszZ-NnDfOt8VV1ST3oV7BoVgCWxUWCW2LLjc9xE1szSht2zs9NJ5zaQpZKmmnwa6Z91Dw",
  },
  {
    id: "embedded-iot",
    title: "Embedded IoT Systems",
    tagline: "Custom PCB design, MQTT protocols, and low-latency sensor networks.",
    category: "Embedded",
    level: "Intermediate",
    levelColor: "text-amber-600 bg-amber-50",
    instructor: "Prof. Lisa Wang",
    duration: "10 Weeks",
    price: 800,
    rating: 4.5,
    students: 419,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hYdlv0eLw27hXCwYMFf9-_ck5XUIlzaRKxLw7k94CDjmrYYYVyUxhnxf5a0MX5PSvBKCSgCaIm7ohBKoOjYUoQRWc-aI9kvRiJDR-y7sTS67-9IX_1yFDs4kdxdSmpmDTO1UL9JEkX8EGbn-6bp2LanxjSDBShafAiwVluRdzZBAim7ozAm8bE3s3LXpR_nCVhgG8YW2xg5iS-3bZxej-pdqW9fv_RW_vKpBFCPrZPpciViq0VlPCA",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    tagline: "PLC programming, SCADA integration, and factory floor orchestration.",
    category: "Industrial",
    level: "Advanced",
    levelColor: "text-red-600 bg-red-50",
    instructor: "Dr. Robert Kim",
    duration: "14 Weeks",
    price: 1500,
    rating: 4.4,
    students: 178,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLAH0NJuVPLTVglGCTXv3Jp_J92mKtDa0LOnQdsLNeWzYr3-ytNX1RxpFN5HoJ5fkG5ZjDkpJwI4omdYpZbRZMQDsHKpX8I9aX-mijNdtjEJIbYYEXJa7zSkMhIwO586lIPVv-aeDJQ9nL78QODDC-GrMBFTD68BP6sAa0iWHmQzuItrfxOh0vprD3uHIuZ85I9T8b-DLTDi4JT0U8leHfMQUPViCGMSUQIQ1C6C3KjZA0pmIKnjIHVA",
  },
  {
    id: "sensor-fusion",
    title: "Sensor Fusion & Estimation",
    tagline: "Kalman filters, particle filters, and multi-sensor integration for robust perception.",
    category: "Mechatronics",
    level: "Advanced",
    levelColor: "text-red-600 bg-red-50",
    instructor: "Dr. Sarah Chen",
    duration: "8 Weeks",
    price: 1050,
    rating: 4.7,
    students: 134,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNA9wx-SR0bqA0pNKUNtz6mvtOuUhSBOlwAMWlHe7cMTmkte5-Une9wUepzHp_rTWSIGkBc_w2vee1LvXasW3w2F-n_JxvDeXGI0okjNUHROCY7oaRfglA7QW1uZj8ZzMz_RBm4VEUAr5gD8BMYhmuT28xZBbiSDMTP8BG6Uw1Ez3BsJsfx6ZNIf9PF65Z5kPijKz0KfEeCuT8bq_ibmw5tzhVW9buYIZuV-YT8XNZ_AIIGlzwXte8g",
  },
  {
    id: "robotics-101",
    title: "Robotics Fundamentals",
    tagline: "Kinematics, dynamics, and control theory for aspiring roboticists.",
    category: "Mechatronics",
    level: "Beginner",
    levelColor: "text-green-600 bg-green-50",
    instructor: "Prof. Michael Torres",
    duration: "6 Weeks",
    price: 650,
    rating: 4.8,
    students: 523,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUwCJgyFV3EO_osRDHCBtmDC31vl0d2nLbfqHzMZ4nPdGh-G0ACyhMQmSPjUu7jNC6au5yXnfLcISeSPNaXB9uWAwOYgMqi74-hOxUKrZVLhO0rUrSH5ZBPHyrqsHDe2wnxXOmLKpAA_3tZOUYk3Rk7ZNbvzi4ASOnoEiAaSaRkrP8V7D7vVKb1p8WcpHhjmywF3tuGeEfrYITdv__o_zvKxnAITSbkpD9kZMK71FT9ayv54esgUaWw",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push("star");
    else if (i === full && half) stars.push("star_half");
    else stars.push("star_outline");
  }
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((s, i) => (
        <span key={i} className="material-symbols-outlined text-amber-400 text-sm" style={{ fontVariationSettings: s === "star" ? "'FILL' 1" : "'FILL' 0" }}>
          {s}
        </span>
      ))}
      <span className="text-on-surface-variant text-xs ml-1">{rating}</span>
    </div>
  );
}

export default function CourseCatalogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.tagline.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Course Catalog</h1>
          <p className="text-body-md text-on-surface-variant">Explore our robotics and AI curriculum.</p>
        </div>
        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none placeholder:text-on-surface-variant/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((course) => (
          <Link
            key={course.id}
            href={`/student/courses/${course.id}`}
            className="group bg-surface-container-lowest border border-border rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-surface-container">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url('${course.image}')` }}
              />
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${course.levelColor}`}>
                  {course.level}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-label-sm text-primary-container font-semibold mb-1">{course.category}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1.5 group-hover:text-primary-container transition-colors">{course.title}</h3>
              <p className="text-body-md text-on-surface-variant mb-4 flex-1 line-clamp-2">{course.tagline}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {course.duration}
                </div>
                <StarRating rating={course.rating} />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-body-md-bold text-on-surface">${course.price}</span>
                <span className="text-label-sm text-on-surface-variant">{course.students} enrolled</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 mb-4">search_off</span>
          <p className="text-headline-md text-on-surface-variant">No courses match your search.</p>
        </div>
      )}
    </main>
  );
}
