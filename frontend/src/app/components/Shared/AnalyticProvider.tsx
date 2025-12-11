import isDev from "@/app/lib/isDev";
import { YandexMetricaProvider } from "next-yandex-metrica";

const AnalyticProvider = ({ children }: { children: React.ReactNode }) => {
	if (isDev()) return <>{children}</>;

	return (
		<YandexMetricaProvider
			initParameters={{ defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }}
			router="app"
		>
			{children}
		</YandexMetricaProvider>
	);
};

export default AnalyticProvider;
