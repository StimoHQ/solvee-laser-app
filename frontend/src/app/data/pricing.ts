export type PriceCardType = {
	id: number;
	price: number;
	text: string;
	details?: string[];
};

export type PriceType = {
	title: string;
	cards: PriceCardType[];
};

export const pricing: PriceType[] = [
	{
		title: "Лицо",
		cards: [
			{
				id: 1,
				text: "Любая зона лица",
				price: 500,
			},
			{
				id: 2,
				text: "Верхняя губа",
				price: 500,
			},
			{
				id: 3,
				text: "Лицо полностью",
				price: 1000,
			},
		],
	},
	{
		title: "Ноги",
		cards: [
			{
				id: 1,
				text: "Бедра",
				price: 1500,
			},
			{
				id: 2,
				text: "Голени",
				price: 1300,
			},
			{
				id: 3,
				text: "Ноги полностью",
				price: 2800,
			},
		],
	},
	{
		title: "Спина/Живот/Грудь",
		cards: [
			{
				id: 1,
				text: "Спина",
				price: 2000,
			},
			{
				id: 2,
				text: "Поясница",
				price: 900,
			},
			{
				id: 3,
				text: "Декольте",
				price: 1100,
			},
			{
				id: 4,
				text: "Живот",
				price: 1100,
			},
			{
				id: 5,
				text: "Линия живота",
				price: 500,
			},
			{
				id: 6,
				text: "Ареолы",
				price: 800,
			},
		],
	},
	{
		title: "Бикини",
		cards: [
			{
				id: 1,
				text: "Тотальное",
				price: 1200,
			},
			{
				id: 2,
				text: "Классическое",
				price: 1000,
			},
			{
				id: 3,
				text: "По линии бедра",
				price: 600,
			},
		],
	},
	{
		title: "Руки",
		cards: [
			{
				id: 1,
				text: "Подмышки",
				price: 800,
			},
			{
				id: 2,
				text: "Руки до локтя",
				price: 900,
			},
			{
				id: 3,
				text: "Руки полностью",
				price: 1500,
			},
		],
	},
	{
		title: "Комплексы",
		cards: [
			{ id: 1, price: 1300, text: "Комплекс XS", details: ["Подмышки", "Тотальное бикини"] },
			{
				id: 2,
				price: 2490,
				text: "Комплекс S",
				details: ["Подмышки", "Тотальное бикини", "Голени"],
			},
			{
				id: 3,
				price: 2990,
				text: "Комплекс M",
				details: ["Подмышки", "Тотальное бикини", "Ноги полностью"],
			},
			{
				id: 4,
				price: 3490,
				text: "Комплекс L",
				details: ["Подмышки", "Тотальное бикини", "Ноги полностью", "Руки до локтя"],
			},
			{
				id: 5,
				price: 3990,
				text: "Комплекс XL",
				details: ["Подмышки", "Тотальное бикини", "Ноги полностью", "Руки полностью"],
			},
		],
	},
];
