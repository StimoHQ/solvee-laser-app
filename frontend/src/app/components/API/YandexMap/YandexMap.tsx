"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify/reactify";
import { LOCATION, LOCATION_REQUEST, SEO } from "@/app/data/constants";
import Image from "next/image";
import clsx from "clsx";
import { Icon } from "@iconify/react";

type ReactifiedApi = ReactifiedModule<typeof ymaps3>;
type YandexMapProps = {
	className: string;
};

const YandexMap: React.FC<YandexMapProps> = ({ className }: YandexMapProps) => {
	if (typeof ymaps3 === "undefined") return null;

	const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

	React.useEffect(() => {
		Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]).then(([{ reactify }]) =>
			setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
		);
	}, []);

	if (!reactifiedApi) {
		return null;
	}

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactifiedApi;

	return (
		<div className={className}>
			<YMap location={LOCATION_REQUEST}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />
				<YMapMarker
					coordinates={LOCATION}
				>
					<div
						className={clsx(
							"flex",
							"flex-row",
							"items-center",
							"absolute",
							"translate-x-[-50%]",
							"translate-y-[-50%]",
							"justify-center",
							"gap-1"
						)}
					>
						<Icon
							icon="tabler:arrow-narrow-right"
							className="w-10 h-10 text-primary "
						/>
						<div className={clsx("flex", "flex-col")}>
							<Image
								src="/favicon.svg"
								alt="img"
								width={30}
								height={30}
								className={clsx("box-content", "overflow-hidden", "p-1", "h-auto")}
							/>
							<p className={clsx("text-[10px]", "text-primary", "font-bold")}>{SEO.SITE_NAME}</p>
						</div>
					</div>
				</YMapMarker>
			</YMap>
		</div>
	);
};

export default YandexMap;
