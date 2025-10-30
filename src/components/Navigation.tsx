import { Link, useLocation } from "react-router-dom";
import { Home, Palette, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import ConexaLogo from "@/assets/conexa-logo.svg";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/showcase", label: "Showcase", icon: Palette },
    { path: "/icons", label: "Iconografia", icon: Boxes },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-3 mr-6">
          <img 
            src={ConexaLogo} 
            alt="Conexa" 
            className="h-8 w-auto"
          />
          <span className="font-semibold text-sm hidden lg:inline-block text-muted-foreground">
            Boilerplate
          </span>
        </Link>

        <nav className="flex items-center gap-2 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed border-2 h-10 px-4",
                  isActive 
                    ? "bg-[hsl(var(--brand-primary-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--brand-primary-400))]"
                    : "bg-transparent border-transparent text-[hsl(var(--brand-primary-300))] hover:bg-[hsl(var(--brand-primary-100))]",
                  isActive && "pointer-events-none"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden md:inline">
            v2.0.0
          </span>
        </div>
      </div>
    </header>
  );
};
