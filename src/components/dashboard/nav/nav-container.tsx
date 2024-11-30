interface NavContainerProps {
  children: React.ReactNode;
}

export function NavContainer({ children }: NavContainerProps) {
  return (
    <header className="border-b bg-background">
      {children}
    </header>
  );
}