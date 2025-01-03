"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export function NewsWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Latest News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <h3 className="font-medium">Breaking News Title {i}</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}