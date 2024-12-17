import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function DashboardNav() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold gradient-text">
          DocRAG
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/dashboard" className="text-sm hover:text-primary">
            Projects
          </Link>
          <Link href="/dashboard/settings" className="text-sm hover:text-primary">
            Settings
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}