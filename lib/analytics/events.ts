export const ANALYTICS_EVENT_NAMES = [
  "page_view",
  "cta_click",
  "pricing_plan_click",
  "waitlist_submit",
  "dashboard_preview_click",
  "model_page_click",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENT_NAMES)[number];
