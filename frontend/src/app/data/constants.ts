import { LngLat, YMapLocationRequest } from "@yandex/ymaps3-types";

// Личная инофрмация
export const ADDRESS = "г. Екатеринбург, ул. Академика Парина, 35/2, 4 этаж";
export const FIO = "Абакумова Екатерина";
export const PHONE = "79955622776";
export const EMAIL = "solveelaser@yandex.ru";
//Внешние ссылки
export const TELEGRAM_LINK = "https://t.me/solveelaser";
export const WHATSUP_LINK = `https://wa.me/${PHONE}`;
export const DIKIDI_LINK = "https://dikidi.net/1637735";
//Яндекс карта
export const LOCATION: LngLat = [60.50787, 56.78272];
export const LOCATION_REQUEST: YMapLocationRequest = {
	center: LOCATION, // starting position [lng, lat]
	zoom: 14, // starting zoom
};
//Приложение
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL as string;
export const APP_DOMEN = process.env.NEXT_PUBLIC_APP_DOMAIN as string;
export const SEO = {
	SITE_NAME: "Solvee Laser",
	SITE_DESCRIPTION: "Лазерная эпиляция в Екатеринбургe | 15% СКИДКА первое посещение | Работаю ТОЛЬКО на РЕЗУЛЬТАТ",
	SITE_KEYWORDS: [
		"Solvee Laser",
		"лазерная эпиляция",
		"эпиляция",
		"диодный лазер",
		"уход за кожей",
		"уход за волосами",
		"екатеринбург эпиляция",
		"екатеринбург",
		"академ",
		"академический район",
		"-15% скидка",
	],
};
