import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function Layout({ children }) {
  // Mock user data - replace with real user data from auth
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberId: "AA-2025-001"
  };

  return (
    <DashboardLayout user={mockUser}>
      {children}
    </DashboardLayout>
  );
}