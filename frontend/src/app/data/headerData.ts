export type HeaderItem = {
	label: string;
	href: string;
};

const headerData: HeaderItem[] = [
	{ label: "Цены", href: "/#pricing" },
	{ label: "Вопросы", href: "/#questions" },
	{ label: "Отзывы", href: "/#reviews" },
	{ label: "Контакты", href: "/#contacts" },
];

export default headerData;
