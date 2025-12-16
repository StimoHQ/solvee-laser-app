import Script from "next/script";

const YandexMapLoader = () => {
	return (
		<Script
			src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.YANDEX_MAP_TOKEN}&lang=ru_RU`}
			strategy="beforeInteractive"
		/>
	);
};

export default YandexMapLoader;
