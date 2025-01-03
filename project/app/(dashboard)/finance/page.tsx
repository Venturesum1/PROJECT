import { FinanceWidget } from '@/components/widgets/finance';

export default function FinancePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Financial Overview</h1>
      <FinanceWidget />
    </div>
  );
}