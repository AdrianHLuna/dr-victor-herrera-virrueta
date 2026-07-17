"use client";

import { ReactNode } from "react";

export function FadeUp({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

