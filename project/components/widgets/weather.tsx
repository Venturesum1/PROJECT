"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Droplets, Wind } from 'lucide-react';

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5" />
          Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="h-8 w-8" />
              <div>
                <p className="text-2xl font-bold">72°F</p>
                <p className="text-sm text-muted-foreground">Partly Cloudy</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">New York</p>
              <p className="text-xs text-muted-foreground">United States</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Humidity: 65%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Wind: 8 mph</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}