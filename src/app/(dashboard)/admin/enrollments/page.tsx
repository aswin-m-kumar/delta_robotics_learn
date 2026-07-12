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
import { CheckCircle2, XCircle, Clock } from "lucide-react";

const enrollments = [
  { id: "ENR-001", student: "Rahul Kumar", course: "Introduction to Arduino", date: "2023-11-10", amount: "₹1,500", status: "Pending Verification" },
  { id: "ENR-002", student: "Sneha Patel", course: "Advanced Robotics", date: "2023-11-09", amount: "₹3,000", status: "Approved" },
  { id: "ENR-003", student: "Vikram Singh", course: "IoT with ESP32", date: "2023-11-08", amount: "₹2,000", status: "Pending Payment" },
  { id: "ENR-004", student: "Neha Gupta", course: "Introduction to Arduino", date: "2023-11-08", amount: "₹1,500", status: "Rejected" },
  { id: "ENR-005", student: "Amit Desai", course: "Drone Building Workshop", date: "2023-11-07", amount: "₹4,500", status: "Approved" },
];

export default function EnrollmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Enrollment Pipeline</h1>
          <p className="text-muted-foreground mt-1">Review and approve student course enrollments.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <div className="border rounded-lg p-4 bg-background shadow-sm flex flex-col items-center justify-center text-center">
          <Clock className="h-8 w-8 text-orange-500 mb-2" />
          <h3 className="font-semibold text-lg">12</h3>
          <p className="text-sm text-muted-foreground">Pending Verification</p>
        </div>
        <div className="border rounded-lg p-4 bg-background shadow-sm flex flex-col items-center justify-center text-center">
          <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
          <h3 className="font-semibold text-lg">145</h3>
          <p className="text-sm text-muted-foreground">Approved this month</p>
        </div>
        <div className="border rounded-lg p-4 bg-background shadow-sm flex flex-col items-center justify-center text-center">
          <XCircle className="h-8 w-8 text-red-500 mb-2" />
          <h3 className="font-semibold text-lg">3</h3>
          <p className="text-sm text-muted-foreground">Rejected</p>
        </div>
      </div>

      <div className="border rounded-lg bg-background shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Enrollment ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollments.map((enrollment) => (
              <TableRow key={enrollment.id}>
                <TableCell className="font-medium">{enrollment.id}</TableCell>
                <TableCell>{enrollment.student}</TableCell>
                <TableCell>{enrollment.course}</TableCell>
                <TableCell>{enrollment.date}</TableCell>
                <TableCell>{enrollment.amount}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      enrollment.status === "Approved" ? "default" : 
                      enrollment.status.includes("Pending") ? "outline" : "destructive"
                    }
                    className={enrollment.status === "Approved" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {enrollment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {enrollment.status !== "Approved" && enrollment.status !== "Rejected" && (
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">Approve</Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
                    </div>
                  )}
                  {enrollment.status === "Approved" && (
                    <Button size="sm" variant="ghost" disabled>Processed</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
