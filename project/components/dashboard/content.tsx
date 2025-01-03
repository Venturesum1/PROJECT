"use client"

import { WeatherWidget } from '@/components/widgets/weather';
import { NewsWidget } from '@/components/widgets/news';
import { FinanceWidget } from '@/components/widgets/finance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';

function StatCard({ title, value, description, icon: Icon }: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function DashboardContent() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="10,482"
          description="+12.3% from last month"
          icon={Users}
        />
        <StatCard
          title="Active Sessions"
          value="2,842"
          description="Current active users"
          icon={Activity}
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          description="+8.1% from last month"
          icon={DollarSign}
        />
        <StatCard
          title="Growth"
          value="24.5%"
          description="Increased by 4.3%"
          icon={TrendingUp}
        />
      </div>

      {/* Widgets Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WeatherWidget />
        <NewsWidget />
        <FinanceWidget />
      </div>
    </div>
  );
}