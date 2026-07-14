import { useState, useEffect } from 'react';
import { Search, MoreVertical, Clock, CalendarDays, Image as ImageIcon } from 'lucide-react';
import Drawer from '../components/Drawer';

export default function CoursesView() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  useEffect(() => {
    const handleOpenDrawer = () => setIsDrawerOpen(true);
    window.addEventListener('open-drawer', handleOpenDrawer);
    return () => window.removeEventListener('open-drawer', handleOpenDrawer);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Intro to Python Robotics',
      type: 'School',
      status: 'Published',
      category: 'Programming',
      difficulty: 'Beginner',
      duration: '8 Weeks',
      price: '$299',
      lastEdited: '2 days ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlb6SBjqE-UhK7JWO-ptGCYiEH5QmsIl9EtuBrwv6Tb8V32TzaBPD5pnCWKGzcZM7xmgkYccZSu24QZuVMCXRolN8hbOcMkijrSiR4ZY5ipoJKrBapPflyN0SRdzPydAQ5qQpgXUHSfqX3O_kP41oXaaAQR2NASXwS93HSDgSQxvBhS4CUncR_LNLJmLEnNJoo5uk1G1_v8RK6Vqdvg2E-pBSqVzQ-QNJzZIsMkeW6s7mPGrB7CQk8'
    },
    {
      id: 2,
      title: 'Advanced Kinematics',
      type: 'College',
      status: 'Draft',
      category: 'Hardware',
      difficulty: 'Advanced',
      duration: '12 Weeks',
      price: '$599',
      lastEdited: '5 hrs ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIepGuMxbUv7nSDiXYb3iOjbM9GKrlNlHCWbi9zyk4qwQ69q17_R1SWmpfw7G4zfOdbfHpOXaxq-FVQsYKkS03hesB3dmAZQc-kF5a-uC076U872rAJaKiWW3F2Qyaz_47Pc1M7K0HRV0acCA7Hvuu_273IPF5gt6c7UskEJjCLbrywy8ct9YxhyVZMJVVK5mwrKKdC9xq3BS6lhX2ilO7V1TE9GNvN0j9Vc_jWeku5AqxXEhIMY6'
    },
    {
      id: 3,
      title: 'Machine Vision Basics',
      type: 'College',
      status: 'Published',
      category: 'AI',
      difficulty: 'Intermediate',
      duration: '10 Weeks',
      price: '$450',
      lastEdited: '1 week ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPiJ5t17CD48Ym4Cs3OIke29Qwf8J7de6gJBpoGdJwn2GqEYpdCD6YRqcZ8XmgKvHRnq421Yge2XvbAaBMyFdqa4ATBbswvXgSin8yg6eWMBQYkrU9o3Eo3ysC5LO8gd1S64RwpnaK38NuMA6sr3BASmwyvfHXnvtk8IjOKV9MKQTgTUrLRQ4VnDJclSVFY4O7RtXa9pNbWBzIi97StJ41iGoya8NTEEsWta5pXiKeVK0ZcrjsvDy'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesType = typeFilter === '' || course.type === typeFilter;
    const matchesStatus = statusFilter === '' || course.status === statusFilter;
    const matchesCategory = categoryFilter === '' || course.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === '' || course.difficulty === difficultyFilter;
    return matchesType && matchesStatus && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-text-main">Courses</h2>
          <p className="text-sm text-text-muted mt-1">48 Courses total</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-border-main flex flex-wrap gap-4 items-center shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <select 
            className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:ring-2 focus:ring-brand outline-none cursor-pointer"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="School">School</option>
            <option value="College">College</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select 
            className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:ring-2 focus:ring-brand outline-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select 
            className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:ring-2 focus:ring-brand outline-none cursor-pointer"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Programming">Programming</option>
            <option value="Hardware">Hardware</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select 
            className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:ring-2 focus:ring-brand outline-none cursor-pointer"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white border border-border-main rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative flex flex-col">
            <div className="h-40 bg-bg-alt relative shrink-0">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-text-main uppercase tracking-wider shadow-sm">
                {course.type}
              </div>
              <div className={`absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm ${
                course.status === 'Published' ? 'bg-success-bg text-success' : 'bg-bg-alt text-text-muted'
              }`}>
                {course.status}
              </div>
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-text-main line-clamp-1 group-hover:text-brand transition-colors text-base">{course.title}</h3>
                <button className="text-text-muted hover:text-text-main flex-shrink-0">
                  <MoreVertical size={18} />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-text-muted uppercase">
                <span className="bg-bg-alt px-2 py-1 rounded">{course.category}</span>
                <span>•</span>
                <span>{course.difficulty}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-2 text-sm border-t border-border-main pt-3 mt-auto">
                <div className="flex items-center gap-1.5 text-text-muted">
                  <Clock size={14} />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1.5 text-text-main font-bold justify-end">
                  {course.price}
                </div>
                <div className="col-span-2 text-xs text-text-muted mt-1 flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  Last edited: {course.lastEdited}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Add Course"
        footer={
          <>
            <div className="flex items-center gap-3 mr-auto">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-9 h-5 bg-border-main peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                <span className="ml-3 text-xs font-semibold text-text-main uppercase tracking-wider">Published</span>
              </label>
            </div>
            <button className="px-4 h-10 border border-border-main rounded-lg text-text-main font-medium hover:bg-bg-alt transition-colors text-sm" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </button>
            <button className="px-4 h-10 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors shadow-sm text-sm" onClick={() => setIsDrawerOpen(false)}>
              Save Course
            </button>
          </>
        }
      >
        <div className="space-y-8 text-sm">
          <div className="bg-bg-alt p-1 rounded-lg flex">
            <button className="flex-1 py-2 text-center rounded bg-white shadow-sm font-semibold text-text-main">School</button>
            <button className="flex-1 py-2 text-center rounded font-medium text-text-muted hover:text-text-main">College</button>
          </div>

          <section className="space-y-4">
            <h3 className="font-semibold text-base text-text-main border-b border-border-main pb-2">Basic Information</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase">Course Title</label>
              <input type="text" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:ring-2 focus:ring-brand outline-none transition-shadow" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-muted uppercase">Description</label>
              <textarea className="w-full border border-border-main rounded-lg p-3 bg-white focus:ring-2 focus:ring-brand outline-none transition-shadow resize-none" rows={4} />
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-semibold text-base text-text-main border-b border-border-main pb-2">Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase">Category</label>
                <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:ring-2 focus:ring-brand outline-none">
                  <option>Programming</option>
                  <option>Hardware</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase">Difficulty</label>
                <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:ring-2 focus:ring-brand outline-none">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase">Duration (Weeks)</label>
                <input type="number" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:ring-2 focus:ring-brand outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-muted uppercase">Price ($)</label>
                <input type="number" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:ring-2 focus:ring-brand outline-none" />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-semibold text-base text-text-main border-b border-border-main pb-2">Media</h3>
            <div className="border-2 border-dashed border-border-main rounded-xl p-8 flex flex-col items-center justify-center text-center bg-bg-alt hover:bg-white transition-colors cursor-pointer">
              <ImageIcon className="text-text-muted mb-2 w-8 h-8" />
              <p className="font-semibold text-text-main">Upload Thumbnail</p>
              <p className="text-xs text-text-muted mt-1">PNG, JPG up to 5MB</p>
            </div>
          </section>
        </div>
      </Drawer>
    </div>
  );
}
