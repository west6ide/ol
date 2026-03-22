import type { DashboardOverview } from '@/entities/dashboard/model/types';

export const dashboardOverviewMock: DashboardOverview = {
  highlights: [
    {
      tag: 'Architecture',
      title: 'Layered modules, clean dependencies',
      description: 'Features depend on entities and shared code, not the other way around.',
    },
    {
      tag: 'Delivery',
      title: 'Quality gates included',
      description: 'Typecheck, linting, tests, build pipeline, and CI are part of the default path.',
    },
    {
      tag: 'Scale',
      title: 'Ready for backend integration',
      description: 'Environment config and service boundaries are prepared for real APIs.',
    },
  ],
  metrics: [
    {
      label: 'Release velocity',
      value: 42,
      delta: 18,
      description: 'Feature throughput over the last quarter',
      kind: 'number',
    },
    {
      label: 'Conversion uplift',
      value: 12.4,
      delta: 4,
      description: 'Improvement after redesigning onboarding',
      kind: 'percent',
    },
    {
      label: 'Design tokens',
      value: 96,
      delta: 11,
      description: 'Documented semantic tokens available to product squads',
      kind: 'number',
    },
    {
      label: 'Error budget',
      value: 99.96,
      delta: 1,
      description: 'Stability target for mission-critical views',
      kind: 'percent',
    },
  ],
  activity: [
    {
      title: 'Platform baseline deployed',
      description: 'Routing, providers, quality gates, and design tokens are wired together.',
      time: '2h ago',
    },
    {
      title: 'Lead form added',
      description: 'Validated contact flow with typed schema and optimistic UX states.',
      time: '4h ago',
    },
    {
      title: 'Dashboard widgets connected',
      description: 'Home page now consumes entity-level data contracts through query hooks.',
      time: 'Today',
    },
  ],
};
