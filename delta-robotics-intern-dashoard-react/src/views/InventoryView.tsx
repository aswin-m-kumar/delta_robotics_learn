import { useState, useEffect } from 'react';
import { Search, Download, Plus, RotateCcw, Edit2, Image as ImageIcon, Minus, Filter } from 'lucide-react';
import Drawer from '../components/Drawer';

export default function InventoryView() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<'details' | 'add'>('details');

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const handleOpenDrawer = () => {
      setDrawerMode('add');
      setIsDrawerOpen(true);
    };
    window.addEventListener('open-drawer', handleOpenDrawer);
    return () => window.removeEventListener('open-drawer', handleOpenDrawer);
  }, []);

  const inventory = [
    {
      id: 1,
      name: 'Arduino Uno R3',
      sku: 'MCU-ARD-001',
      category: 'Microcontrollers',
      qty: 42,
      minStock: 10,
      status: 'In Stock',
      notes: 'Standard kits...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlb6SBjqE-UhK7JWO-ptGCYiEH5QmsIl9EtuBrwv6Tb8V32TzaBPD5pnCWKGzcZM7xmgkYccZSu24QZuVMCXRolN8hbOcMkijrSiR4ZY5ipoJKrBapPflyN0SRdzPydAQ5qQpgXUHSfqX3O_kP41oXaaAQR2NASXwS93HSDgSQxvBhS4CUncR_LNLJmLEnNJoo5uk1G1_v8RK6Vqdvg2E-pBSqVzQ-QNJzZIsMkeW6s7mPGrB7CQk8'
    },
    {
      id: 2,
      name: 'Ultrasonic HC-SR04',
      sku: 'SNR-DST-022',
      category: 'Sensors',
      qty: 8,
      minStock: 15,
      status: 'Low Stock',
      notes: 'Requires reor...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIepGuMxbUv7nSDiXYb3iOjbM9GKrlNlHCWbi9zyk4qwQ69q17_R1SWmpfw7G4zfOdbfHpOXaxq-FVQsYKkS03hesB3dmAZQc-kF5a-uC076U872rAJaKiWW3F2Qyaz_47Pc1M7K0HRV0acCA7Hvuu_273IPF5gt6c7UskEJjCLbrywy8ct9YxhyVZMJVVK5mwrKKdC9xq3BS6lhX2ilO7V1TE9GNvN0j9Vc_jWeku5AqxXEhIMY6'
    },
    {
      id: 3,
      name: 'NEMA 17 Stepper',
      sku: 'MTR-STP-048',
      category: 'Motors',
      qty: 0,
      minStock: 5,
      status: 'Out of Stock',
      notes: 'Pending deliv...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlb6SBjqE-UhK7JWO-ptGCYiEH5QmsIl9EtuBrwv6Tb8V32TzaBPD5pnCWKGzcZM7xmgkYccZSu24QZuVMCXRolN8hbOcMkijrSiR4ZY5ipoJKrBapPflyN0SRdzPydAQ5qQpgXUHSfqX3O_kP41oXaaAQR2NASXwS93HSDgSQxvBhS4CUncR_LNLJmLEnNJoo5uk1G1_v8RK6Vqdvg2E-pBSqVzQ-QNJzZIsMkeW6s7mPGrB7CQk8'
    },
    {
      id: 4,
      name: 'Raspberry Pi 4 4GB',
      sku: 'MCU-RPI-004',
      category: 'Boards',
      qty: 12,
      minStock: 4,
      status: 'In Stock',
      notes: 'Used for AI/V...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPiJ5t17CD48Ym4Cs3OIke29Qwf8J7de6gJBpoGdJwn2GqEYpdCD6YRqcZ8XmgKvHRnq421Yge2XvbAaBMyFdqa4ATBbswvXgSin8yg6eWMBQYkrU9o3Eo3ysC5LO8gd1S64RwpnaK38NuMA6sr3BASmwyvfHXnvtk8IjOKV9MKQTgTUrLRQ4VnDJclSVFY4O7RtXa9pNbWBzIi97StJ41iGoya8NTEEsWta5pXiKeVK0ZcrjsvDy'
    }
  ];

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === '' || item.category === categoryFilter;
    const matchesStatus = statusFilter === '' || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-text-main">Inventory</h2>
          <p className="text-sm text-text-muted mt-1">Manage robot parts, electronics, and mechanical components (1,482 items total)</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-10 px-4 border border-border-main rounded-lg bg-white text-text-main text-sm font-medium flex items-center gap-2 hover:bg-bg-alt transition-colors shadow-sm">
            <Download size={18} />
            Export CSV
          </button>
          <button 
            className="h-10 px-4 bg-brand hover:bg-brand-dark text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
            onClick={() => { setDrawerMode('add'); setIsDrawerOpen(true); }}
          >
            <Plus size={18} />
            Add Item
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-border-main shadow-sm shrink-0">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[240px]">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 block">Search</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
              <input 
                type="text" 
                placeholder="Filter inventory..." 
                className="w-full h-10 pl-9 pr-4 bg-white border border-border-main rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="w-48">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 block">Category</label>
            <select 
              className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Microcontrollers">Microcontrollers</option>
              <option value="Sensors">Sensors</option>
              <option value="Motors">Motors</option>
              <option value="Boards">Boards</option>
            </select>
          </div>
          <div className="w-40">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 block">Status</label>
            <select 
              className="w-full h-10 bg-white border border-border-main rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="w-48">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 block">Stock Level</label>
            <div className="h-10 bg-white border border-border-main rounded-lg px-3 flex items-center gap-3">
              <span className="text-sm text-text-muted">Min 0</span>
              <div className="flex-1 h-1.5 bg-border-main rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-brand rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-brand rounded-full shadow border-2 border-white"></div>
              </div>
            </div>
          </div>
          <button className="h-10 w-10 flex items-center justify-center text-brand hover:bg-brand-tint rounded-lg transition-colors">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white border border-border-main rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white">
              <tr className="border-b border-border-main">
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Image</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Category</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Qty</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Min Stock</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider">Notes</th>
                <th className="py-4 px-6 font-semibold text-xs text-text-muted uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-bg-alt transition-colors group">
                  <td className="py-3 px-6">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover border border-border-main bg-bg-alt" />
                  </td>
                  <td className="py-3 px-6">
                    <div className="font-medium text-text-main text-sm">{item.name}</div>
                    <div className="text-xs text-text-muted mt-0.5">SKU: {item.sku}</div>
                  </td>
                  <td className="py-3 px-6">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-bg-alt border border-border-main text-text-main uppercase tracking-wider">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <span className={`font-bold ${item.qty === 0 ? 'text-danger' : item.qty < 10 ? 'text-warning' : 'text-text-main'}`}>
                      {item.qty}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-text-muted font-medium">{item.minStock}</td>
                  <td className="py-3 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      item.status === 'In Stock' ? 'bg-success-bg text-success' : 
                      item.status === 'Low Stock' ? 'bg-warning-bg text-warning' : 
                      'bg-danger-bg text-danger'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        item.status === 'In Stock' ? 'bg-success' : 
                        item.status === 'Low Stock' ? 'bg-warning' : 
                        'bg-danger'
                      }`} />
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-text-muted">{item.notes}</td>
                  <td className="py-3 px-6 text-right">
                    <button onClick={() => { setDrawerMode('details'); setIsDrawerOpen(true); }} className="p-2 text-text-muted hover:text-text-main rounded transition-colors">
                      <Edit2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-auto px-6 py-4 border-t border-border-main flex items-center justify-between text-sm text-text-muted bg-white shrink-0">
          <span>Showing 1 to 4 of 1,482 entries</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-border-main rounded hover:bg-bg-alt transition-colors" disabled>Prev</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-brand text-white font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-bg-alt transition-colors font-medium text-text-main">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-bg-alt transition-colors font-medium text-text-main">3</button>
            <span className="w-8 flex items-center justify-center">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-bg-alt transition-colors font-medium text-text-main">371</button>
            <button className="px-3 py-1 border border-border-main rounded hover:bg-bg-alt transition-colors text-text-main">Next</button>
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={drawerMode === 'add' ? "Add Item" : "Item Details"}
        subtitle="INVENTORY MANAGEMENT"
        footer={
          <>
            <button className="px-4 h-10 rounded-lg text-text-main font-medium hover:bg-bg-alt transition-colors text-sm" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </button>
            <button className="px-4 h-10 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors shadow-sm text-sm" onClick={() => setIsDrawerOpen(false)}>
              Save Item
            </button>
          </>
        }
      >
        <div className="space-y-6">
          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Item Image</label>
            <div className="h-40 border-2 border-dashed border-border-main rounded-xl flex flex-col items-center justify-center text-center bg-bg-alt hover:bg-white transition-colors cursor-pointer">
              <ImageIcon className="text-text-muted mb-2 w-8 h-8" />
              <p className="font-medium text-text-main text-sm">Click to upload or drag & drop</p>
              <p className="text-xs text-text-muted mt-1">PNG, JPG up to 5MB</p>
            </div>
          </section>

          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Item Name</label>
            <input type="text" placeholder="e.g. Raspberry Pi Zero 2 W" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
          </section>

          <div className="grid grid-cols-2 gap-4">
            <section className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Category</label>
              <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm">
                <option>Microcontrollers</option>
                <option>Sensors</option>
                <option>Motors</option>
                <option>Boards</option>
              </select>
            </section>
            <section className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Status</label>
              <select className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm">
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <section className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Current Quantity</label>
              <div className="flex border border-border-main rounded-lg bg-white overflow-hidden h-10">
                <button className="w-10 flex items-center justify-center text-text-muted hover:bg-bg-alt transition-colors border-r border-border-main">
                  <Minus size={16} />
                </button>
                <input type="text" defaultValue="42" className="flex-1 w-full text-center focus:outline-none text-sm font-medium" />
                <button className="w-10 flex items-center justify-center text-text-muted hover:bg-bg-alt transition-colors border-l border-border-main">
                  <Plus size={16} />
                </button>
              </div>
            </section>
            <section className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Minimum Stock Level</label>
              <input type="number" defaultValue="10" className="w-full h-10 border border-border-main rounded-lg px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
            </section>
          </div>

          <section className="space-y-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Internal Notes</label>
            <textarea 
              rows={4} 
              placeholder="Enter stock locations, supplier links, or usage instructions..." 
              className="w-full border border-border-main rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand text-sm resize-none" 
            />
          </section>
        </div>
      </Drawer>
    </div>
  );
}
