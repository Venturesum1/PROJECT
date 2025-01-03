"use client"

import { Header } from './header';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}