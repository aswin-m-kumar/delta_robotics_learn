"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const courseModules: Record<string, {
  title: string;
  progress: number;
  modules: {
    title: string;
    status: "completed" | "in-progress" | "locked";
    lessons: { title: string; duration: string; status: "completed" | "in-progress" | "locked" }[];
  }[];
}> = {
  "ros2-intro": {
    title: "Intro to ROS 2",
    progress: 65,
    modules: [
      {
        title: "Module 1: ROS 2 Foundations",
        status: "completed",
        lessons: [
          { title: "Introduction to ROS 2 Ecosystem", duration: "12:30", status: "completed" },
          { title: "Workspace Setup & Colcon Build", duration: "15:45", status: "completed" },
          { title: "Nodes, Topics & Publishers/Subscribers", duration: "18:20", status: "completed" },
          { title: "Hands-On: Your First ROS 2 Node", duration: "22:00", status: "completed" },
        ],
      },
      {
        title: "Module 2: Communication Patterns",
        status: "completed",
        lessons: [
          { title: "Services & Clients", duration: "14:10", status: "completed" },
          { title: "Actions & Action Servers", duration: "16:30", status: "completed" },
          { title: "Parameters & Dynamic Configuration", duration: "11:45", status: "completed" },
          { title: "Interfaces: msg, srv & action Files", duration: "19:00", status: "in-progress" },
        ],
      },
      {
        title: "Module 3: Tools & Debugging",
        status: "in-progress",
        lessons: [
          { title: "RViz2 Visualization", duration: "13:20", status: "in-progress" },
          { title: "ros2cli Command Tools", duration: "10:55", status: "locked" },
          { title: "Bag Files & Data Recording", duration: "17:40", status: "locked" },
          { title: "TF2 Coordinate Frames", duration: "20:15", status: "locked" },
        ],
      },
      {
        title: "Module 4: Simulation & Navigation",
        status: "locked",
        lessons: [
          { title: "URDF Robot Modeling", duration: "21:30", status: "locked" },
          { title: "Gazebo Simulation Setup", duration: "25:00", status: "locked" },
          { title: "SLAM Toolbox Integration", duration: "28:15", status: "locked" },
          { title: "Nav2 Path Planning & Control", duration: "32:00", status: "locked" },
        ],
      },
      {
        title: "Module 5: Capstone Project",
        status: "locked",
        lessons: [
          { title: "Project Architecture Design", duration: "15:00", status: "locked" },
          { title: "Sensor Integration Pipeline", duration: "18:30", status: "locked" },
          { title: "Autonomous Navigation Stack", duration: "22:00", status: "locked" },
          { title: "Final Demo & Evaluation", duration: "10:00", status: "locked" },
        ],
      },
    ],
  },
};

const resources = [
  { name: "ros2-f64d8.zip", type: "Code Bundle", size: "2.4 MB", icon: "folder_zip" },
  { name: "cheatsheet-ros2.pdf", type: "Cheat Sheet", size: "180 KB", icon: "description" },
  { name: "module3-slides.pdf", type: "Slides", size: "4.1 MB", icon: "slideshow" },
];

function ModuleIcon({ status }: { status: "completed" | "in-progress" | "locked" }) {
  if (status === "completed") return <span className="material-symbols-outlined text-success text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>;
  if (status === "in-progress") return <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>;
  return <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">lock</span>;
}

export default function LearningPortalPage() {
  const params = useParams();
  const id = params.id as string;
  const course = courseModules[id];

  const [activeModuleIdx, setActiveModuleIdx] = useState(2);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!course) {
    return (
      <main className="flex-1 p-4 md:p-10 bg-background min-h-screen max-w-[1440px] mx-auto w-full">
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 mb-4">help</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Course Not Found</h1>
          <p className="text-body-md text-on-surface-variant mb-6">The learning content you're looking for isn't available.</p>
          <Link href="/student/courses" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold inline-block">
            Browse Courses
          </Link>
        </div>
      </main>
    );
  }

  const activeModule = course.modules[activeModuleIdx];
  const activeLesson = activeModule.lessons[activeLessonIdx];
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = course.modules.reduce((acc, m) => acc + m.lessons.filter((l) => l.status === "completed").length, 0);

  return (
    <div className="flex-1 flex flex-col bg-surface-container-lowest min-h-screen">
      <div className="border-b border-border bg-surface-container-lowest px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span className="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
          <div>
            <div className="font-headline-md text-headline-md text-on-surface">{course.title}</div>
            <div className="text-label-sm text-on-surface-variant">Module {activeModuleIdx + 1}: {activeModule.title}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-32 h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full" style={{ width: `${course.progress}%` }} />
            </div>
            <span className="text-label-sm text-on-surface-variant">{course.progress}%</span>
          </div>
          <Link href="/student/dashboard" className="text-label-sm text-primary-container hover:underline">Exit</Link>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <aside className={`w-72 shrink-0 border-r border-border bg-surface-container-low overflow-y-auto ${sidebarOpen ? "fixed left-0 top-0 z-40 h-full shadow-xl" : "hidden"} md:block`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 md:hidden">
              <span className="font-headline-md text-headline-md text-on-surface">Modules</span>
              <button onClick={() => setSidebarOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: `${(completedLessons / totalLessons) * 100}%` }} />
              </div>
              <span className="text-label-sm text-on-surface-variant">{completedLessons}/{totalLessons}</span>
            </div>
            <nav className="space-y-1">
              {course.modules.map((mod, mi) => {
                const isActiveModule = mi === activeModuleIdx;
                return (
                  <div key={mi}>
                    <button
                      onClick={() => { setActiveModuleIdx(mi); setActiveLessonIdx(0); setSidebarOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        isActiveModule ? "bg-primary-container/10 text-primary-container font-medium" : "text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      <ModuleIcon status={mod.status} />
                      <span className="text-sm flex-1">{mod.title}</span>
                    </button>
                    {isActiveModule && (
                      <div className="ml-7 mt-1 space-y-0.5">
                        {mod.lessons.map((lesson, li) => {
                          const isActiveLesson = mi === activeModuleIdx && li === activeLessonIdx;
                          return (
                            <button
                              key={li}
                              onClick={() => { setActiveLessonIdx(li); setSidebarOpen(false); }}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                                isActiveLesson ? "bg-primary-container/5 text-primary-container font-medium" : "text-on-surface-variant hover:bg-surface-container"
                              }`}
                            >
                              <ModuleIcon status={lesson.status} />
                              <span className="flex-1 truncate">{lesson.title}</span>
                              <span className="text-on-surface-variant/50 shrink-0">{lesson.duration}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="bg-surface-container rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-surface-container" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-3xl">play_arrow</span>
                </div>
                <span className="text-headline-md text-on-surface-variant">Lesson Video</span>
                <span className="text-label-sm text-on-surface-variant">{activeLesson.title} &bull; {activeLesson.duration}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
                <span>Module {activeModuleIdx + 1}</span>
                <span className="mx-1">&bull;</span>
                <span>Lesson {activeLessonIdx + 1} of {activeModule.lessons.length}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-3">{activeLesson.title}</h1>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                In this lesson, you'll learn about the core concepts and practical applications of {activeLesson.title.toLowerCase()}. 
                Follow along with the video and complete the exercises to reinforce your understanding.
              </p>
            </div>

            <div className="border border-border rounded-xl p-5 bg-surface-container-lowest mb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Lesson Resources</h3>
              <div className="space-y-2">
                {resources.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-primary-container">{r.icon}</span>
                    <div className="flex-1">
                      <div className="text-body-md text-on-surface font-medium">{r.name}</div>
                      <div className="text-label-sm text-on-surface-variant">{r.type} &bull; {r.size}</div>
                    </div>
                    <button className="text-primary-container text-sm font-medium hover:underline">Download</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-8 pb-8">
              <button
                disabled={activeModuleIdx === 0 && activeLessonIdx === 0}
                onClick={() => {
                  if (activeLessonIdx > 0) setActiveLessonIdx(activeLessonIdx - 1);
                  else if (activeModuleIdx > 0) {
                    const prevModule = course.modules[activeModuleIdx - 1];
                    setActiveModuleIdx(activeModuleIdx - 1);
                    setActiveLessonIdx(prevModule.lessons.length - 1);
                  }
                }}
                className="flex items-center gap-1 text-body-md text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Previous
              </button>

              <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                Mark Complete
              </button>

              <button
                disabled={activeModuleIdx === course.modules.length - 1 && activeLessonIdx === activeModule.lessons.length - 1}
                onClick={() => {
                  if (activeLessonIdx < activeModule.lessons.length - 1) setActiveLessonIdx(activeLessonIdx + 1);
                  else if (activeModuleIdx < course.modules.length - 1) {
                    setActiveModuleIdx(activeModuleIdx + 1);
                    setActiveLessonIdx(0);
                  }
                }}
                className="flex items-center gap-1 text-body-md text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
