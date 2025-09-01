// app/providers.tsx
"use client";
import { SidebarProvider } from "@/context/SidebarContext";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <HeroUIProvider className="flex flex-col min-h-lvh">
        {children}
      </HeroUIProvider>
    </SidebarProvider>
  );
}
