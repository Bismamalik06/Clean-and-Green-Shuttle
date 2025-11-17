
"use client";

import Link from "next/link";
import {
  Home,
  Map,
  Leaf,
  MessageSquare,
  Shield,
  PanelLeft,
  Menu,
  BookUser,
  Info,
  FileText,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/track", label: "Track", icon: Map },
  { href: "/sustainability", label: "Sustainability", icon: Leaf },
  { href: "/about", label: "About", icon: Info },
  { href: "/analysis", label: "Analysis", icon: BookUser },
  { href: "/details", label: "Details", icon: FileText },
  { href: "/safety", label: "Safety", icon: Shield },
  { href: "/feedback", label: "Feedback", icon: MessageSquare },
];

const sectionsByRoute: Record<string, { label: string; href: string }[]> = {
  "/": [
    { label: "Meet Our Fleet", href: "/#fleet" },
    { label: "Impact", href: "/#impact" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  
  "/sustainability": [
    { label: "Hero", href: "/sustainability#hero" },
    { label: "Stats", href: "/sustainability#stats" },
    { label: "Comparison", href: "/sustainability#comparison" },
    { label: "SDGs", href: "/sustainability#sdgs" },
  ],
  "/about": [
    { label: "Hero", href: "/about#hero" },
    { label: "Our Mission", href: "/about#our-mission" },
    { label: "Students’ Challenges", href: "/about#students-challenges" },
    { label: "Triple Bottom Line", href: "/about#triple-bottom-line" },
    { label: "Revenue (Model 1)", href: "/about#revenue-1" },
    { label: "Journey Roadmap", href: "/about#journey" },
    { label: "Validation & Precedent", href: "/about#validation-precedent" },
    { label: "Project Challenges", href: "/about#project-challenges" },
    { label: "Legal & IP", href: "/about#legal" },
    { label: "Presentation Highlights", href: "/about#presentation" },
    { label: "Revenue (Model 2)", href: "/about#revenue-2" },
    { label: "Call To Action", href: "/about#cta" },
  ],
  "/analysis": [
    { label: "Hero", href: "/analysis#hero" },
    { label: "Challenges", href: "/analysis#challenges" },
    { label: "Solution", href: "/analysis#solution" },
  ],
  "/details": [
    { label: "Introduction", href: "/details#introduction" },
    { label: "Triple Bottom Line", href: "/details#tbl" },
    { label: "Analysis", href: "/details#analysis" },
    { label: "Validation", href: "/details#validation" },
    { label: "Financial Planning", href: "/details#financial" },
    { label: "OPEX & LCC", href: "/details#opex" },
    { label: "Revenue", href: "/details#revenue" },
    { label: "Operations", href: "/details#operations" },
    { label: "SDGs", href: "/details#sdgs" },
    { label: "Roadmap", href: "/details#roadmap" },
    { label: "References", href: "/details#references" },
  ],
  "/safety": [
    { label: "Commitment", href: "/safety#commitment" },
    { label: "Accessibility", href: "/safety#accessibility" },
    { label: "Code of Conduct", href: "/safety#code" },
    { label: "Emergency", href: "/safety#emergency" },
  ],
};

export function Header() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.2, ease: "power3.out" });
    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  const NavLink = ({
    href,
    label,
    icon: Icon,
    className,
  }: {
    href: string;
    label: string;
    icon: React.ElementType;
    className?: string;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
          className
        )}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    );
  };

  const NavDropdown = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
    const [open, setOpen] = useState(false);
    const isActive = pathname.startsWith(href);
    const items = sectionsByRoute[href] || [];
    return (
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Link
              href={href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          </DropdownMenuTrigger>
          {items.length > 0 && (
            <DropdownMenuContent align="start" className="min-w-[220px]">
              {items.map((it) => (
                <DropdownMenuItem key={it.href} asChild>
                  <Link href={it.href}>{it.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex flex-1 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) =>
              sectionsByRoute[link.href] ? (
                <NavDropdown key={link.href} {...link} />
              ) : (
                <NavLink key={link.href} {...link} />
              )
            )}
          </nav>
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0">
                <div className="p-4">
                  <Link href="/" className="mb-8 block">
                    <Logo />
                  </Link>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} className="text-base" />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div ref={cursorRef} className="fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <div className="h-6 w-6 rounded-full bg-primary/30 blur-md" />
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>
    </header>
  );
}

    
