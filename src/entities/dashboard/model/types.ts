export type DashboardHighlight = {
  tag: string;
  title: string;
  description: string;
};

export type DashboardMetric = {
  label: string;
  value: number;
  delta: number;
  description: string;
  kind: 'number' | 'percent';
};

export type DashboardActivity = {
  title: string;
  description: string;
  time: string;
};

export type DashboardOverview = {
  highlights: DashboardHighlight[];
  metrics: DashboardMetric[];
  activity: DashboardActivity[];
};
