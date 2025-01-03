import { WeatherWidget } from '@/components/widgets/weather';

export default function WeatherPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Weather Dashboard</h1>
      <WeatherWidget />
    </div>
  );
}