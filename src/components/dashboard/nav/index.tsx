import { DashboardNavBrand } from "./nav-brand";
import { DashboardNavLinks } from "./nav-links";
import { DashboardNavActions } from "./nav-actions";
import { NavContainer } from "./nav-container";

export function DashboardNav() {
  return (
    <NavContainer>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <DashboardNavBrand />
        <nav className="flex items-center gap-6">
          <DashboardNavLinks />
          <DashboardNavActions />
        </nav>
      </div>
    </NavContainer>
  );
}