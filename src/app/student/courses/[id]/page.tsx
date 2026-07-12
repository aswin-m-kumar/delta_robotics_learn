"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const courseData: Record<string, {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  level: string;
  levelColor: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  duration: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  prerequisites: string[];
  skills: string[];
  curriculum: { module: string; lessons: string[] }[];
  reviews: { name: string; avatar: string; rating: number; date: string; text: string }[];
}> = {
  "ros2-intro": {
    id: "ros2-intro",
    title: "Intro to ROS 2",
    tagline: "Master the Robot Operating System for real-world robotics applications.",
    description: "This comprehensive course takes you from ROS 2 fundamentals to advanced robotics application development. You'll learn how to build distributed robotic systems using ROS 2's powerful communication infrastructure. Through hands-on projects, you'll master topics, services, actions, and parameters while building real robot applications. By the end, you'll be able to design, implement, and deploy ROS 2 nodes for autonomous systems.",
    category: "Embedded",
    level: "Intermediate",
    levelColor: "text-amber-600 bg-amber-50",
    instructor: "Dr. Sarah Chen",
    instructorRole: "Senior Robotics Engineer",
    instructorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0i8GkJ5kycQpWMhYbYnUGvfZ-YFZYGEELK8PS3mF2Ye0GtM9WJYmiQFPHEYwv0aqRN5Au2ddXkcnBMFq85tmkH3sXRs7vQ_ZpB0B8CFg",
    duration: "12 Weeks",
    price: 1299,
    rating: 4.8,
    students: 342,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNA9wx-SR0bqA0pNKUNtz6mvtOuUhSBOlwAMWlHe7cMTmkte5-Une9wUepzHp_rTWSIGkBc_w2vee1LvXasW3w2F-n_JxvDeXGI0okjNUHROCY7oaRfglA7QW1uZj8ZzMz_RBm4VEUAr5gD8BMYhmuT28xZBbiSDMTP8BG6Uw1Ez3BsJsfx6ZNIf9PF65Z5kPijKz0KfEeCuT8bq_ibmw5tzhVW9buYIZuV-YT8XNZ_AIIGlzwXte8g",
    prerequisites: ["Basic programming in Python or C++", "Understanding of Linux command line", "Basic knowledge of robotics concepts"],
    skills: ["ROS 2 Node Architecture", "Topics, Services & Actions", "Robot Simulation (Gazebo)", "SLAM & Navigation Stack", "Multi-robot Systems"],
    curriculum: [
      { module: "Module 1: ROS 2 Foundations", lessons: ["Introduction to ROS 2 Ecosystem", "Workspace Setup & Colcon Build", "Nodes, Topics & Publishers/Subscribers", "Hands-On: Your First ROS 2 Node"] },
      { module: "Module 2: Communication Patterns", lessons: ["Services & Clients", "Actions & Action Servers", "Parameters & Dynamic Configuration", "Interfaces: msg, srv & action Files"] },
      { module: "Module 3: Tools & Debugging", lessons: ["RViz2 Visualization", "ros2cli Command Tools", "Bag Files & Data Recording", "TF2 Coordinate Frames"] },
      { module: "Module 4: Simulation & Navigation", lessons: ["URDF Robot Modeling", "Gazebo Simulation Setup", "SLAM Toolbox Integration", "Nav2 Path Planning & Control"] },
      { module: "Module 5: Capstone Project", lessons: ["Project Architecture Design", "Sensor Integration Pipeline", "Autonomous Navigation Stack", "Final Demo & Evaluation"] },
    ],
    reviews: [
      { name: "Alex M.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7B2U4U5V6W7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6", rating: 5, date: "Jan 2026", text: "Best ROS 2 course I've taken. The hands-on projects really cemented the concepts." },
      { name: "Priya K.", avatar: "", rating: 5, date: "Dec 2025", text: "Excellent structure. The progression from basics to capstone is very well paced." },
      { name: "James W.", avatar: "", rating: 4, date: "Nov 2025", text: "Great content. Would love more advanced examples in future updates." },
    ],
  },
  "computer-vision": {
    id: "computer-vision",
    title: "Computer Vision Basics",
    tagline: "Implement object detection and spatial reasoning for autonomous platforms.",
    description: "Dive into the world of computer vision with a focus on robotics applications. This course covers image processing fundamentals, feature detection, object recognition, and 3D vision techniques. Using OpenCV and deep learning frameworks, you'll build vision systems that can detect, track, and interpret visual information in real-time environments.",
    category: "AI & Vision",
    level: "Intermediate",
    levelColor: "text-amber-600 bg-amber-50",
    instructor: "Prof. Michael Torres",
    instructorRole: "Computer Vision Lead",
    instructorAvatar: "",
    duration: "8 Weeks",
    price: 950,
    rating: 4.6,
    students: 287,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUwCJgyFV3EO_osRDHCBtmDC31vl0d2nLbfqHzMZ4nPdGh-G0ACyhMQmSPjUu7jNC6au5yXnfLcISeSPNaXB9uWAwOYgMqi74-hOxUKrZVLhO0rUrSH5ZBPHyrqsHDe2wnxXOmLKpAA_3tZOUYk3Rk7ZNbvzi4ASOnoEiAaSaRkrP8V7D7vVKb1p8WcpHhjmywF3tuGeEfrYITdv__o_zvKxnAITSbkpD9kZMK71FT9ayv54esgUaWw",
    prerequisites: ["Python programming experience", "Basic linear algebra", "Familiarity with NumPy"],
    skills: ["Image Processing with OpenCV", "Feature Detection & Matching", "Object Detection (YOLO)", "Camera Calibration", "3D Reconstruction Basics"],
    curriculum: [
      { module: "Module 1: Image Fundamentals", lessons: ["Digital Image Representation", "Color Spaces & Transformations", "Filtering & Edge Detection", "Image Morphology"] },
      { module: "Module 2: Feature Detection", lessons: ["Corner Detection (Harris, FAST)", "SIFT & ORB Features", "Feature Matching & Homography", "Panorama Stitching Project"] },
      { module: "Module 3: Deep Learning for Vision", lessons: ["CNNs Architecture Overview", "Object Detection with YOLO", "Semantic Segmentation", "Model Deployment on Edge"] },
      { module: "Module 4: 3D Vision & Depth", lessons: ["Stereo Vision & Disparity", "Structure from Motion", "Depth Estimation with ML", "Final Project: Visual SLAM Pipeline"] },
    ],
    reviews: [
      { name: "Maria G.", avatar: "", rating: 5, date: "Feb 2026", text: "Incredible depth for an introductory course. The YOLO module was fantastic." },
      { name: "Tom L.", avatar: "", rating: 4, date: "Jan 2026", text: "Well structured. Could use more practical exercises in module 2." },
    ],
  },
};

function StarRating({ rating, size = "text-sm" }: { rating: number; size?: string }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        let icon = "star_outline";
        if (i < full) icon = "star";
        else if (i === full && half) icon = "star_half";
        return (
          <span key={i} className={`material-symbols-outlined text-amber-400 ${size}`} style={{ fontVariationSettings: icon === "star" ? "'FILL' 1" : "'FILL' 0" }}>
            {icon}
          </span>
        );
      })}
    </div>
  );
}

export default function CourseDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState<"about" | "curriculum" | "reviews">("about");
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const course = courseData[id];

  if (!course) {
    return (
      <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 mb-4">help</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Course Not Found</h1>
          <p className="text-body-md text-on-surface-variant mb-6">The course you're looking for doesn't exist.</p>
          <Link href="/student/courses" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold">
            Browse Courses
          </Link>
        </div>
      </main>
    );
  }

  const toggleModule = (idx: number) => {
    setExpandedModules((prev) => prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]);
  };

  return (
    <main className="flex-1 bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${course.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${course.levelColor}`}>{course.level}</span>
              <span className="text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider bg-white/20 text-white">{course.category}</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg md:text-4xl text-white font-bold mb-2">{course.title}</h1>
            <p className="text-white/80 text-body-md max-w-2xl">{course.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              {(["about", "curriculum", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-body-md-bold capitalize pb-4 -mb-4 border-b-2 transition-colors ${
                    activeTab === tab ? "border-primary-container text-primary-container" : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab === "reviews" ? `Reviews (${course.reviews.length})` : tab}
                </button>
              ))}
            </div>

            {activeTab === "about" && (
              <div>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">{course.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      {course.prerequisites.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                          <span className="material-symbols-outlined text-sm text-primary-container mt-0.5">check_circle</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Skills You'll Gain</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((s, i) => (
                        <span key={i} className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-sm font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container">person</span>
                  </div>
                  <div>
                    <div className="font-body-md-bold text-on-surface">{course.instructor}</div>
                    <div className="text-label-sm text-on-surface-variant">{course.instructorRole}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-3">
                {course.curriculum.map((mod, idx) => {
                  const isOpen = expandedModules.includes(idx);
                  return (
                    <div key={idx} className="border border-border rounded-xl overflow-hidden bg-surface-container-lowest">
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low transition-colors"
                      >
                        <div>
                          <div className="font-body-md-bold text-on-surface">{mod.module}</div>
                          <div className="text-label-sm text-on-surface-variant mt-0.5">{mod.lessons.length} lessons</div>
                        </div>
                        <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${isOpen ? "rotate-180" : ""}`}>expand_more</span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4">
                          <ul className="space-y-1">
                            {mod.lessons.map((lesson, li) => (
                              <li key={li} className="flex items-center gap-3 px-3 py-2 rounded-lg text-body-md text-on-surface-variant hover:bg-surface-container-low">
                                <span className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">{li + 1}</span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                {course.reviews.map((review, i) => (
                  <div key={i} className="p-5 bg-surface-container-lowest border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container text-sm">person</span>
                      </div>
                      <div>
                        <div className="font-body-md-bold text-on-surface">{review.name}</div>
                        <div className="text-label-sm text-on-surface-variant">{review.date}</div>
                      </div>
                      <div className="ml-auto">
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                    <p className="text-body-md text-on-surface-variant">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-24 bg-surface-container-lowest border border-border rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="text-3xl font-bold text-on-surface mb-1">${course.price}</div>
              <div className="text-label-sm text-on-surface-variant mb-6">One-time payment — full access</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary-container">schedule</span>
                  {course.duration}
                </div>
                <div className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary-container">signal_cellular_alt</span>
                  {course.level}
                </div>
                <div className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary-container">group</span>
                  {course.students} enrolled
                </div>
              </div>
              <Link
                href={`/student/courses/${course.id}/enroll`}
                className="block w-full text-center bg-primary-container text-on-primary rounded-lg px-6 py-3 font-bold hover:bg-primary transition-colors mb-3"
              >
                Enroll Now
              </Link>
              <button className="w-full text-center border border-border text-on-surface-variant rounded-lg px-6 py-3 font-bold hover:bg-surface-container-low transition-colors text-sm">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
