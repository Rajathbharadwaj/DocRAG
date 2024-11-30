import { DashboardHeader } from "@/components/dashboard/header";
import { ProjectList } from "@/components/dashboard/project-list";
import { CreateProjectButton } from "@/components/dashboard/create-project-button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <DashboardHeader />
        <CreateProjectButton />
      </div>
      <ProjectList />
    </div>
  );
}