import { ContactSalesForm } from '@/features/contact-sales/ui/ContactSalesForm';
import { useDashboardOverview } from '@/entities/dashboard/model/use-dashboard-overview';
import { ActivityFeed } from '@/widgets/activity/ui/ActivityFeed';
import { HeroPanel } from '@/widgets/hero/ui/HeroPanel';
import { MetricsGrid } from '@/widgets/metrics/ui/MetricsGrid';
import { UiShowcase } from '@/widgets/ui-showcase/ui/UiShowcase';
import { ErrorState } from '@/shared/ui/ErrorState';
import { LoadingState } from '@/shared/ui/LoadingState';

export function HomePage() {
  const dashboardQuery = useDashboardOverview();

  if (dashboardQuery.isLoading) {
    return <LoadingState />;
  }

  if (dashboardQuery.isError || !dashboardQuery.data) {
    return <ErrorState />;
  }

  const { highlights, metrics, activity } = dashboardQuery.data;

  return (
    <div className="page-grid">
      <HeroPanel highlights={highlights} />
      <MetricsGrid metrics={metrics} />
      <div className="page-grid__split">
        <ActivityFeed items={activity} />
        <ContactSalesForm />
      </div>
      <UiShowcase />
    </div>
  );
}
