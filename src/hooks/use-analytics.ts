import { useCallback } from "react";

interface AnalyticsEvent {
  category?: string;
  action: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (action: string, params?: object) => void;
  }
}

export function useAnalytics() {
  const track = useCallback((event: AnalyticsEvent) => {
    // Check if analytics is available (e.g., Google Analytics, Mixpanel)
    if (typeof window !== "undefined" && window.gtag) {
      // Pass all event properties as a single object
      window.gtag("event", {
        event_name: event.action,
        event_params: {
          category: event.category,
          label: event.label,
          value: event.value,
        },
      });
    }

    // Optionally log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics Event:", event);
    }
  }, []);

  return {
    track,
  };
}
