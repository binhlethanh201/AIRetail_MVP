import React from 'react';
import InventorySidebar from '../components/InventorySidebar';
import InventoryTopbar from '../components/InventoryTopbar';
import KPICard from '../components/KPICard';
import FinanceMetric from '../components/FinanceMetric';
import StockTrendChart from '../components/StockTrendChart';
import ImportExportChart from '../components/ImportExportChart';
import NewsAndTrends from '../components/NewsAndTrends';
import RecentTransactions from '../components/RecentTransactions';
import CashFlowWidget from '../components/CashFlowWidget';
import AiChatButton from '../components/AiChatButton';
import { dashboardKpis, financeKpis } from '../data/inventoryMockData';

const InventoryDashboard = () => {
  return (
    <div className="min-h-screen bg-[#faf9fc] font-sans text-slate-900 antialiased">
      <InventorySidebar />
      <InventoryTopbar />

      <main className="ml-[260px] p-6 pt-[88px]">
        <div className="mx-auto max-w-[1600px] space-y-6">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardKpis.map((kpi) => (
              <KPICard key={kpi.id} {...kpi} />
            ))}
            {financeKpis.map((metric) => (
              <FinanceMetric key={metric.id} {...metric} />
            ))}
          </section>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              <StockTrendChart />
              <ImportExportChart />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <NewsAndTrends />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <RecentTransactions />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <CashFlowWidget />
            </div>
          </div>
        </div>
      </main>

      <AiChatButton />
    </div>
  );
};

export default InventoryDashboard;
