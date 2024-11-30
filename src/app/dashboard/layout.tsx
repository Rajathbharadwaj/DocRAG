import { DashboardNav } from "@/components/dashboard/nav";
import { PageContainer } from "@/components/layout/page-container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <PageContainer>{children}</PageContainer>
    </div>
  );
}