import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, ArrowUpDown, AlertTriangle } from "lucide-react";

const inventory = [
  { id: "INV-001", name: "Arduino Uno R3", category: "Microcontrollers", quantity: 45, status: "In Stock" },
  { id: "INV-002", name: "Raspberry Pi 4 (4GB)", category: "Microcontrollers", quantity: 3, status: "Low Stock" },
  { id: "INV-003", name: "L298N Motor Driver", category: "Electronics", quantity: 120, status: "In Stock" },
  { id: "INV-004", name: "HC-SR04 Ultrasonic Sensor", category: "Sensors", quantity: 0, status: "Out of Stock" },
  { id: "INV-005", name: "SG90 Micro Servo", category: "Motors", quantity: 8, status: "Low Stock" },
  { id: "INV-006", name: "Jumper Wires (M-M)", category: "Accessories", quantity: 500, status: "In Stock" },
];

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage robotics components and tools.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-background p-4 border rounded-lg shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search inventory..." className="pl-8" />
        </div>
        <Button variant="outline">Filter Category</Button>
        <Button variant="outline" className="text-orange-600 border-orange-200">
          <AlertTriangle className="mr-2 h-4 w-4" /> Low Stock
        </Button>
      </div>

      <div className="border rounded-lg bg-background shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer">
                  Quantity
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-muted-foreground">{item.id}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <span className={`font-medium ${item.quantity <= 10 ? (item.quantity === 0 ? "text-red-500" : "text-orange-500") : ""}`}>
                    {item.quantity}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      item.status === "In Stock" ? "default" : 
                      item.status === "Low Stock" ? "secondary" : "destructive"
                    }
                    className={
                      item.status === "Low Stock" ? "bg-orange-100 text-orange-800 hover:bg-orange-100" : ""
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline">Update Qty</Button>
                    <Button size="icon" variant="ghost">
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
