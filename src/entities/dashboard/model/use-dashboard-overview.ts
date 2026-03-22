import { useQuery } from '@tanstack/react-query';
import { getDashboardOverview } from '@/entities/dashboard/api/dashboard.service';

export function useDashboardOverview() {
  return useQuery({
    queryKey: ['dashboard-overview'],
    queryFn: getDashboardOverview,
  });
}
