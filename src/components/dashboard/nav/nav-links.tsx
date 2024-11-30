import Link from "next/link";

export function DashboardNavLinks() {
  return (
    <>
      <Link href="/dashboard/projects" className="text-sm hover:text-primary">
        Projects
      </Link>
      <Link href="/dashboard/settings" className="text-sm hover:text-primary">
        Settings
      </Link>
    </>
  );
}