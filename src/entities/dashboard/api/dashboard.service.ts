import type { DashboardOverview } from '@/entities/dashboard/model/types';
import { dashboardOverviewMock } from '@/shared/api/mocks';
import { env } from '@/shared/config/env';

async function fetchRemoteDashboard(): Promise<DashboardOverview> {
  const response = await fetch(`${env.apiUrl}/dashboard`);

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return (await response.json()) as DashboardOverview;
}

export async function getDashboardOverview(): Promise<DashboardOverview> {
  if (!env.apiUrl) {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(dashboardOverviewMock), 500);
    });
  }

  try {
    return await fetchRemoteDashboard();
  } catch {
    return dashboardOverviewMock;
  }
}
