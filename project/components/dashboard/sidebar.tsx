"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Cloud, Newspaper, LineChart, Menu } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Cloud, label: 'Weather', href: '/weather' },
  { icon: Newspaper, label: 'News', href: '/news' },
  { icon: LineChart, label: 'Finance', href: '/finance' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'bg-card border-r flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <span className="font-semibold text-lg">Analytics</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('ml-auto', collapsed && 'mx-auto')}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
              pathname === item.href && 'bg-accent text-foreground',
              collapsed && 'justify-center'
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}