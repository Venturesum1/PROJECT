"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, TrendingUp, TrendingDown } from 'lucide-react';

export function FinanceWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { symbol: 'AAPL', price: '175.84', change: '+1.24%', up: true },
            { symbol: 'GOOGL', price: '138.21', change: '-0.58%', up: false },
            { symbol: 'MSFT', price: '378.85', change: '+0.89%', up: true },
          ].map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{stock.symbol}</p>
                <p className="text-sm text-muted-foreground">${stock.price}</p>
              </div>
              <div className={`flex items-center gap-1 ${stock.up ? 'text-green-500' : 'text-red-500'}`}>
                {stock.up ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm">{stock.change}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}