import type { RouteLocation } from '@derkoe/qwik-city';

interface AnalyticsProps {
	loc: RouteLocation;
}

export const Analytics = ({ loc }: AnalyticsProps) => {
	return <script dangerouslySetInnerHTML={`console.log("🧨 Analytics! ${loc.pathname}");`} />;
};
