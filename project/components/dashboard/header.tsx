"use client"

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}