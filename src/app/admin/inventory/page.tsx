"use client";

import { useState } from "react";
import type { InventoryItem, InventoryLog } from "@/lib/types";

const CATEGORIES = [
  "Electronics",
  "Stationery",
  "Furniture",
  "Sports",
  "Medical Equipment",
  "Laboratory",
  "Computer Accessories",
];

const mockItems: InventoryItem[] = [
  { id: "fd53fd1b-9c89-4a1b-a799-c730efc70a13", name: "Projector", category: "8b0d73ef-f38d-4725-b0fd-c8866e6d4ef9", category_name: "Electronics", description: "Seminar hall projector", quantity: 8, unit: "pcs", low_stock_threshold: 2, location: "Store Room", image_url: "", is_low_stock: false, created_at: "2026-07-11T10:00:00Z", updated_at: "2026-07-11T10:00:00Z" },
  { id: "31b78dc0-f09d-4830-9a29-c9166fc11cc8", name: "HDMI Cable", category: "8b0d73ef-f38d-4725-b0fd-c8866e6d4ef9", category_name: "Electronics", description: "10 meter HDMI cable", quantity: 25, unit: "pcs", low_stock_threshold: 5, location: "Shelf A", image_url: "", is_low_stock: false, created_at: "2026-07-11T10:30:00Z", updated_at: "2026-07-11T11:00:00Z" },
  { id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", name: "Arduino Uno R3", category: "8b0d73ef-f38d-4725-b0fd-c8866e6d4ef9", category_name: "Electronics", description: "Microcontroller board", quantity: 45, unit: "pcs", low_stock_threshold: 10, location: "Shelf B", image_url: "", is_low_stock: false, created_at: "2026-07-10T08:00:00Z", updated_at: "2026-07-10T08:00:00Z" },
  { id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", name: "Raspberry Pi 4 (4GB)", category: "8b0d73ef-f38d-4725-b0fd-c8866e6d4ef9", category_name: "Electronics", description: "Single-board computer", quantity: 3, unit: "pcs", low_stock_threshold: 5, location: "Shelf B", image_url: "", is_low_stock: true, created_at: "2026-07-09T09:00:00Z", updated_at: "2026-07-12T10:00:00Z" },
  { id: "c3d4e5f6-a7b8-9012-cdef-123456789012", name: "L298N Motor Driver", category: "8b0d73ef-f38d-4725-b0fd-c8866e6d4ef9", category_name: "Electronics", description: "Dual H-bridge motor driver", quantity: 120, unit: "pcs", low_stock_threshold: 20, location: "Shelf C", image_url: "", is_low_stock: false, created_at: "2026-07-08T10:00:00Z", updated_at: "2026-07-08T10:00:00Z" },
  { id: "d4e5f6a7-b8c9-0123-defa-234567890123", name: "HC-SR04 Ultrasonic Sensor", category: "c4d5e6f7-a8b9-0123-cdef-456789012345", category_name: "Sensors", description: "Distance measuring sensor", quantity: 0, unit: "pcs", low_stock_threshold: 5, location: "Shelf A", image_url: "", is_low_stock: true, created_at: "2026-07-07T11:00:00Z", updated_at: "2026-07-12T09:00:00Z" },
  { id: "e5f6a7b8-c9d0-1234-efab-345678901234", name: "SG90 Micro Servo", category: "d5e6f7a8-b9c0-1234-defa-567890123456", category_name: "Motors", description: "180-degree micro servo", quantity: 8, unit: "pcs", low_stock_threshold: 10, location: "Shelf D", image_url: "", is_low_stock: true, created_at: "2026-07-06T12:00:00Z", updated_at: "2026-07-11T15:00:00Z" },
  { id: "f6a7b8c9-d0e1-2345-fabc-678901234567", name: "Jumper Wires (M-M)", category: "e6f7a8b9-c0d1-2345-abcd-789012345678", category_name: "Accessories", description: "Male-to-male jumper wires pack", quantity: 500, unit: "pcs", low_stock_threshold: 50, location: "Shelf A", image_url: "", is_low_stock: false, created_at: "2026-07-05T14:00:00Z", updated_at: "2026-07-05T14:00:00Z" },
];

const mockLogs: InventoryLog[] = [
  { id: "7dc3c60f-f0d2-4893-a548-8909efda85d0", item: "31b78dc0-f09d-4830-9a29-c9166fc11cc8", item_name: "HDMI Cable", change_type: "add", quantity_change: 5, reason: "Inventory updated", performed_by: "2cbf4bc1-9a5b-48d0-a7b5-04d9d927ce47", performed_by_name: "John Doe", created_at: "2026-07-11T11:00:00Z" },
  { id: "8e4d5a6b-c7d8-9012-efab-345678901234", item: "b2c3d4e5-f6a7-8901-bcde-f12345678901", item_name: "Raspberry Pi 4 (4GB)", change_type: "remove", quantity_change: -2, reason: "Issued to workshop", performed_by: "2cbf4bc1-9a5b-48d0-a7b5-04d9d927ce47", performed_by_name: "John Doe", created_at: "2026-07-12T10:00:00Z" },
  { id: "9f5e6b7c-d8e9-0123-fabc-456789012345", item: "d4e5f6a7-b8c9-0123-defa-234567890123", item_name: "HC-SR04 Ultrasonic Sensor", change_type: "adjustment", quantity_change: -15, reason: "Stock count correction", performed_by: "3dbf4bc1-9a5b-48d0-a7b5-04d9d927ce48", performed_by_name: "Jane Smith", created_at: "2026-07-12T09:00:00Z" },
  { id: "a6f7c8d9-e0f1-2345-abcd-567890123456", item: "e5f6a7b8-c9d0-1234-efab-345678901234", item_name: "SG90 Micro Servo", change_type: "add", quantity_change: 20, reason: "New stock arrival", performed_by: "2cbf4bc1-9a5b-48d0-a7b5-04d9d927ce47", performed_by_name: "John Doe", created_at: "2026-07-11T15:00:00Z" },
  { id: "b7a8d9e0-f1a2-3456-bcde-678901234567", item: "fd53fd1b-9c89-4a1b-a799-c730efc70a13", item_name: "Projector", change_type: "adjustment", quantity_change: -1, reason: "Moved to conference room", performed_by: "3dbf4bc1-9a5b-48d0-a7b5-04d9d927ce48", performed_by_name: "Jane Smith", created_at: "2026-07-10T14:00:00Z" },
];

const changeTypeConfig = {
  add: { label: "Added", className: "bg-green-100 text-success border border-green-200" },
  remove: { label: "Removed", className: "bg-red-100 text-danger border border-red-200" },
  adjustment: { label: "Adjusted", className: "bg-blue-100 text-blue-700 border border-blue-200" },
};

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<"items" | "logs">("items");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [lowStockOnly, setLowStockOnly] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [isQtyDialogOpen, setIsQtyDialogOpen] = useState(false);
  const [qtyItem, setQtyItem] = useState<InventoryItem | null>(null);
  const [qtyChange, setQtyChange] = useState(0);
  const [qtyReason, setQtyReason] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filteredItems = mockItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category_name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category_name === categoryFilter;
    const matchesLowStock = !lowStockOnly || item.is_low_stock || item.quantity === 0;
    return matchesSearch && matchesCategory && matchesLowStock;
  });

  const stats = {
    total: mockItems.length,
    lowStock: mockItems.filter((i) => i.is_low_stock && i.quantity > 0).length,
    outOfStock: mockItems.filter((i) => i.quantity === 0).length,
    categories: new Set(mockItems.map((i) => i.category_name)).size,
  };

  function openCreateDrawer() {
    setEditingItem(null);
    setIsDrawerOpen(true);
  }

  function openEditDrawer(item: InventoryItem) {
    setEditingItem(item);
    setIsDrawerOpen(true);
  }

  function openQtyDialog(item: InventoryItem) {
    setQtyItem(item);
    setQtyChange(0);
    setQtyReason("");
    setIsQtyDialogOpen(true);
  }

  function handleQtyUpdate() {
    setIsQtyDialogOpen(false);
    setQtyItem(null);
  }

  function handleDelete(id: string) {
    setDeleteConfirm(null);
  }

  return (
    <div className="p-container-padding flex-1 overflow-y-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Inventory Management</h2>
          <p className="text-secondary mt-1">Track and manage robotics components and tools.</p>
        </div>
        {activeTab === "items" && (
          <button
            className="flex items-center gap-2 bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all"
            onClick={openCreateDrawer}
          >
            <span className="material-symbols-outlined">add</span>
            Add Item
          </button>
        )}
      </div>

      {/* Tab Toggle */}
      <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant w-fit mb-6">
        <button
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "items" ? "bg-white shadow-sm border border-outline-variant text-primary" : "text-on-surface-variant hover:text-on-surface"}`}
          onClick={() => setActiveTab("items")}
        >
          <span className="material-symbols-outlined text-lg">inventory_2</span>
          Items
        </button>
        <button
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "logs" ? "bg-white shadow-sm border border-outline-variant text-primary" : "text-on-surface-variant hover:text-on-surface"}`}
          onClick={() => setActiveTab("logs")}
        >
          <span className="material-symbols-outlined text-lg">history</span>
          Logs
        </button>
      </div>

      {activeTab === "items" ? (
        <>
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-surface-container-lowest border border-border rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-accent-tint p-2 rounded-lg">inventory_2</span>
                <div>
                  <p className="text-headline-sm font-bold text-on-surface">{stats.total}</p>
                  <p className="text-xs text-secondary">Total Items</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-border rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-warning bg-yellow-50 p-2 rounded-lg">warning</span>
                <div>
                  <p className="text-headline-sm font-bold text-on-surface">{stats.lowStock}</p>
                  <p className="text-xs text-secondary">Low Stock</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-border rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-danger bg-red-50 p-2 rounded-lg">block</span>
                <div>
                  <p className="text-headline-sm font-bold text-on-surface">{stats.outOfStock}</p>
                  <p className="text-xs text-secondary">Out of Stock</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-border rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary bg-blue-50 p-2 rounded-lg">category</span>
                <div>
                  <p className="text-headline-sm font-bold text-on-surface">{stats.categories}</p>
                  <p className="text-xs text-secondary">Categories</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="bg-surface border border-outline-variant rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 shadow-sm">
            <div className="flex-1 min-w-[200px] relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="w-full pl-9 pr-4 py-2 border border-outline-variant rounded-lg text-sm bg-bg-alt focus:ring-1 focus:ring-primary outline-none"
                placeholder="Search inventory..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-outline-variant rounded-lg text-sm bg-bg-alt focus:ring-1 focus:ring-primary outline-none"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold transition-all ${lowStockOnly ? "bg-warning/10 border-warning text-warning" : "border-outline-variant text-on-surface-variant hover:text-on-surface"}`}
              onClick={() => setLowStockOnly(!lowStockOnly)}
            >
              <span className="material-symbols-outlined text-lg">warning</span>
              Low Stock Only
            </button>
          </div>

          {/* Items Table */}
          <div className="bg-surface-container-lowest border border-border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-secondary font-label-sm uppercase tracking-wider border-b border-border bg-surface-bright">
                    <th className="p-4 font-semibold">Name</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Quantity</th>
                    <th className="p-4 font-semibold">Unit</th>
                    <th className="p-4 font-semibold">Location</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 text-right font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-body-md text-on-surface divide-y divide-border">
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-secondary">
                        <span className="material-symbols-outlined text-3xl mb-2 block">inventory_2</span>
                        <p>No items found</p>
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item) => (
                      <tr key={item.id} className="hover:bg-bg-alt transition-colors">
                        <td className="p-4 font-medium">{item.name}</td>
                        <td className="p-4 text-secondary">{item.category_name}</td>
                        <td className="p-4">
                          <span className={`font-bold ${item.quantity === 0 ? "text-danger" : item.is_low_stock ? "text-warning" : ""}`}>
                            {item.quantity}
                          </span>
                        </td>
                        <td className="p-4 text-secondary">{item.unit}</td>
                        <td className="p-4 text-secondary">{item.location}</td>
                        <td className="p-4">
                          {item.quantity === 0 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-danger border border-red-200">
                              Out of Stock
                            </span>
                          ) : item.is_low_stock ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-warning border border-yellow-200">
                              Low Stock
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-success border border-green-200">
                              In Stock
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-1">
                            <button
                              className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-secondary hover:text-primary"
                              title="Update Quantity"
                              onClick={() => openQtyDialog(item)}
                            >
                              <span className="material-symbols-outlined text-lg">edit_note</span>
                            </button>
                            <button
                              className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-secondary hover:text-primary"
                              title="Edit Item"
                              onClick={() => openEditDrawer(item)}
                            >
                              <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors text-secondary hover:text-danger"
                              title="Delete Item"
                              onClick={() => setDeleteConfirm(item.id)}
                            >
                              <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Logs Tab */}
          <div className="bg-surface-container-lowest border border-border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="p-4 border-b border-border bg-surface-bright">
              <h3 className="font-headline-md text-headline-md text-on-surface">Inventory Change Logs</h3>
              <p className="text-xs text-secondary mt-0.5">Automatically recorded whenever item quantities change.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-secondary font-label-sm uppercase tracking-wider border-b border-border bg-surface-bright">
                    <th className="p-4 font-semibold">Item</th>
                    <th className="p-4 font-semibold">Change Type</th>
                    <th className="p-4 font-semibold">Qty Change</th>
                    <th className="p-4 font-semibold">Reason</th>
                    <th className="p-4 font-semibold">Performed By</th>
                    <th className="p-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="text-body-md text-on-surface divide-y divide-border">
                  {mockLogs.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-secondary">
                        <span className="material-symbols-outlined text-3xl mb-2 block">history</span>
                        <p>No logs recorded yet</p>
                      </td>
                    </tr>
                  ) : (
                    mockLogs.map((log) => {
                      const config = changeTypeConfig[log.change_type];
                      return (
                        <tr key={log.id} className="hover:bg-bg-alt transition-colors">
                          <td className="p-4 font-medium">{log.item_name}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
                              {config.label}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`font-bold ${log.quantity_change > 0 ? "text-success" : "text-danger"}`}>
                              {log.quantity_change > 0 ? `+${log.quantity_change}` : log.quantity_change}
                            </span>
                          </td>
                          <td className="p-4 text-secondary">{log.reason}</td>
                          <td className="p-4 text-secondary">{log.performed_by_name}</td>
                          <td className="p-4 text-secondary">{new Date(log.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Side Drawer (Create/Edit) */}
      <div
        className={`fixed inset-0 bg-on-background/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-[500px] bg-surface shadow-2xl transition-transform duration-500 flex flex-col ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-bright">
            <div>
              <h3 className="text-headline-md font-bold text-on-surface">{editingItem ? "Edit Item" : "Add Item"}</h3>
              <p className="text-xs text-on-surface-variant">{editingItem ? "Update inventory item details" : "Add a new item to inventory"}</p>
            </div>
            <button
              className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant"
              onClick={() => setIsDrawerOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Item Name</label>
              <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="text" defaultValue={editingItem?.name || ""} placeholder="e.g. Arduino Uno R3" />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Category</label>
              <select className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" defaultValue={editingItem?.category_name || CATEGORIES[0]}>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Description</label>
              <textarea className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" rows={3} defaultValue={editingItem?.description || ""} placeholder="Brief description of the item" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1.5">Quantity</label>
                <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="number" defaultValue={editingItem?.quantity || 0} />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1.5">Unit</label>
                <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="text" defaultValue={editingItem?.unit || "pcs"} placeholder="pcs, kg, meters" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1.5">Low Stock Threshold</label>
                <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="number" defaultValue={editingItem?.low_stock_threshold || 5} />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1.5">Location</label>
                <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="text" defaultValue={editingItem?.location || ""} placeholder="e.g. Shelf A" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Image URL</label>
              <input className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white" type="text" defaultValue={editingItem?.image_url || ""} placeholder="https://..." />
            </div>
          </div>

          <div className="p-6 border-t border-outline-variant bg-surface-bright flex gap-3">
            <button
              className="flex-1 py-3 border border-outline-variant rounded-lg text-sm font-bold text-on-surface hover:bg-bg-alt transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Cancel
            </button>
            <button
              className="flex-1 py-3 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition-all"
              onClick={() => setIsDrawerOpen(false)}
            >
              {editingItem ? "Save Changes" : "Add Item"}
            </button>
          </div>
        </div>
      </div>

      {/* Quantity Update Dialog */}
      <div
        className={`fixed inset-0 bg-on-background/40 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isQtyDialogOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsQtyDialogOpen(false)}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface rounded-xl shadow-2xl border border-outline-variant p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-headline-md font-bold text-on-surface">Update Quantity</h3>
            <button className="p-1 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant" onClick={() => setIsQtyDialogOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {qtyItem && (
            <div className="mb-4 p-3 bg-bg-alt rounded-lg border border-border">
              <p className="font-medium text-on-surface">{qtyItem.name}</p>
              <p className="text-xs text-secondary">Current quantity: <span className="font-bold">{qtyItem.quantity}</span> {qtyItem.unit}</p>
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Quantity Change</label>
              <div className="flex gap-2">
                <button
                  className="px-3 py-2 border border-outline-variant rounded-lg text-sm font-bold text-danger hover:bg-red-50 transition-colors"
                  onClick={() => setQtyChange(Math.max(-999, qtyChange - 1))}
                >
                  -1
                </button>
                <input
                  className="flex-1 px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white text-center font-bold"
                  type="number"
                  value={qtyChange}
                  onChange={(e) => setQtyChange(Number(e.target.value))}
                />
                <button
                  className="px-3 py-2 border border-outline-variant rounded-lg text-sm font-bold text-success hover:bg-green-50 transition-colors"
                  onClick={() => setQtyChange(Math.min(999, qtyChange + 1))}
                >
                  +1
                </button>
              </div>
              <p className="text-xs text-secondary mt-1">Use negative values to reduce stock, positive to add.</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Reason</label>
              <input
                className="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none bg-white"
                type="text"
                value={qtyReason}
                onChange={(e) => setQtyReason(e.target.value)}
                placeholder="e.g. New stock arrival, Issued to workshop"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              className="flex-1 py-3 border border-outline-variant rounded-lg text-sm font-bold text-on-surface hover:bg-bg-alt transition-colors"
              onClick={() => setIsQtyDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="flex-1 py-3 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
              disabled={qtyChange === 0 || !qtyReason.trim()}
              onClick={handleQtyUpdate}
            >
              Update Stock
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <div
        className={`fixed inset-0 bg-on-background/40 backdrop-blur-sm z-[70] transition-opacity duration-300 ${deleteConfirm ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setDeleteConfirm(null)}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-surface rounded-xl shadow-2xl border border-outline-variant p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center mb-4">
            <span className="material-symbols-outlined text-4xl text-danger mb-2 block">warning</span>
            <h3 className="text-headline-md font-bold text-on-surface">Delete Item</h3>
            <p className="text-sm text-secondary mt-1">Are you sure you want to delete this item? This action cannot be undone.</p>
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 py-3 border border-outline-variant rounded-lg text-sm font-bold text-on-surface hover:bg-bg-alt transition-colors"
              onClick={() => setDeleteConfirm(null)}
            >
              Cancel
            </button>
            <button
              className="flex-1 py-3 bg-danger text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition-all"
              onClick={() => handleDelete(deleteConfirm!)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}