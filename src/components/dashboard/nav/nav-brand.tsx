import Link from "next/link";

export function DashboardNavBrand() {
  return (
    <Link href="/dashboard" className="text-xl font-bold gradient-text">
      DocRAG
    </Link>
  );
}