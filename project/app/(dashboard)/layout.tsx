import { DashboardShell } from '@/components/dashboard/shell';
import { Sidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <DashboardShell>{children}</DashboardShell>
    </div>
  );
}