// app/layout.tsx
import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

// Export metadata from the server component
export const metadata: Metadata = {
  title: "Student Innovation - Online Learning Platform",
  description: "An interactive learning platform for programming education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}