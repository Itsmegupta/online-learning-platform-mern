"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Search, Bell, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useSession, signOut } from "next-auth/react"; // Import signOut

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session, status } = useSession(); // Get session data from NextAuth

  // Handle login status based on session
  useEffect(() => {
    if (status === "authenticated") {
      // User is logged in
    } else if (status === "unauthenticated") {
      // User is not logged in
    }
    // No need for isLoggedIn state since we can use status directly
  }, [status]);

  // Handle dark mode toggle
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
            SS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            StackSpire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                          href="/courses"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">All Courses</div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our comprehensive library of programming courses
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/courses/web-development" title="Web Development">
                      HTML, CSS, JavaScript, React, and more
                    </ListItem>
                    <ListItem href="/courses/mobile-development" title="Mobile Development">
                      React Native, Flutter, and Swift
                    </ListItem>
                    <ListItem href="/courses/data-science" title="Data Science">
                      Python, R, Machine Learning, and Data Analysis
                    </ListItem>
                    <ListItem href="/courses/backend" title="Backend Development">
                      Node.js, Express, MongoDB, and APIs
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learning Paths</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="/learning-paths/web-development" title="Web Developer">
                      Become a full-stack web developer
                    </ListItem>
                    <ListItem href="/learning-paths/data-science" title="Data Scientist">
                      Master data analysis and machine learning
                    </ListItem>
                    <ListItem href="/learning-paths/mobile-development" title="Mobile Developer">
                      Build cross-platform mobile applications
                    </ListItem>
                    <ListItem href="/learning-paths/devops" title="DevOps Engineer">
                      Learn cloud infrastructure and CI/CD pipelines
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/challenges" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Challenges</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {status === "authenticated" ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Bell className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-80 overflow-y-auto">
                      <div className="p-3 hover:bg-muted rounded-md cursor-pointer">
                        <p className="font-medium text-sm">New course available</p>
                        <p className="text-xs text-muted-foreground">Advanced React Patterns is now available</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                      <div className="p-3 hover:bg-muted rounded-md cursor-pointer">
                        <p className="font-medium text-sm">Your certificate is ready</p>
                        <p className="text-xs text-muted-foreground">
                          JavaScript Fundamentals certificate is ready to download
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="p-2 text-center">
                      <Link href="/notifications" className="text-xs text-primary hover:underline">
                        View all notifications
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Image
                        src={session?.user?.image || "https://randomuser.me/api/portraits/men/32.jpg"} // Use session image if available
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {session?.user?.name || "My Account"} {/* Dynamic name */}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="hidden lg:inline-flex bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 dark:border-blue-800 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30"
                  asChild
                >
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  asChild
                >
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 animate-in slide-in-from-top-5 z-50">
          <div className="container max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses, challenges, and more..." className="pl-10 pr-10" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="border rounded-md overflow-hidden">
              <button className="flex items-center justify-between w-full p-3 text-left" onClick={() => {}}>
                <span className="text-lg font-medium">Courses</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <div className="border-t p-3 bg-muted/50">
                <div className="space-y-2">
                  <Link
                    href="/courses/web-development"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/courses/mobile-development"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mobile Development
                  </Link>
                  <Link
                    href="/courses/data-science"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Science
                  </Link>
                  <Link
                    href="/courses/backend"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Backend Development
                  </Link>
                </div>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <button className="flex items-center justify-between w-full p-3 text-left" onClick={() => {}}>
                <span className="text-lg font-medium">Learning Paths</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <div className="border-t p-3 bg-muted/50">
                <div className="space-y-2">
                  <Link
                    href="/learning-paths/web-development"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Web Developer
                  </Link>
                  <Link
                    href="/learning-paths/data-science"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Scientist
                  </Link>
                  <Link
                    href="/learning-paths/mobile-development"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mobile Developer
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/challenges" className="block py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Challenges
            </Link>
            <Link href="/community" className="block py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Community
            </Link>
            <Link href="/about" className="block py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            {status === "authenticated" ? (
              <div className="pt-4 border-t">
                <div className="flex items-center mb-4">
                  <Image
                    src={session?.user?.image || "https://randomuser.me/api/portraits/men/32.jpg"}
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{session?.user?.name || "User"}</p>
                    <p className="text-sm text-muted-foreground">{session?.user?.email || "No email"}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/dashboard"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left p-2 hover:bg-muted rounded-md text-red-500"
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";