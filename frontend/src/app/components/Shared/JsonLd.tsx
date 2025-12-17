import { ADDRESS, FIO, PHONE, TELEGRAM_LINK, WHATSUP_LINK, DIKIDI_LINK, APP_URL, SEO } from "@/app/data/constants";

import { myFeatures } from "@/app/data/features";
import { pricing } from "@/app/data/pricing";
import { questions } from "@/app/data/questions";
import { formatRuPhone } from "@/app/lib/formatRuPhone";
import Script from "next/script";
import { Answer, Article, FAQPage, Offer, Person, Product, ProfilePage, Question } from "schema-dts";

const offers: Offer[] = pricing.flatMap((section) =>
	section.cards.map(
		(card) =>
			({
				"@type": "Offer",
				name: section.title,
				price: card.price.toString(),
				priceCurrency: "RUB",
				...(card.details ? { description: card.details.join(", ") } : {}),
			} as Offer)
	)
);

const product: Product = {
	"@type": "Product",
	name: "Услуга по удалению волос с тела",
	offers: offers,
};

const person: Person = {
	"@type": "Person",
	name: FIO,
	jobTitle: "Мастер по лазерной эпиляции",
	url: APP_URL,
	telephone: `${formatRuPhone(PHONE)}`,
	sameAs: [TELEGRAM_LINK, WHATSUP_LINK, DIKIDI_LINK],
	knowsAbout: SEO.SITE_KEYWORDS,
	worksFor: {
		"@type": "LocalBusiness",
		name: SEO.SITE_NAME,
		image: `${APP_URL}/images/hero/hero.webp`,
		url: APP_URL,
		address: {
			"@type": "PostalAddress",
			streetAddress: ADDRESS,
			addressRegion: "Свердловская область",
			addressLocality: "Екатеринбург",
			addressCountry: "RU",
			postalCode: "620000",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 56.782228,
			longitude: 60.508775,
		},
		priceRange: "₽₽",
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer service",
			areaServed: "RU",
			availableLanguage: "ru",
		},
	},
};

const faqEntities: Question[] = questions.map(
	(q) =>
		({
			"@type": "Question",
			name: q.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: q.answer,
			} as Answer,
		} as Question)
);

const faqPage: FAQPage = {
	"@type": "FAQPage",
	mainEntity: faqEntities,
	keywords: SEO.SITE_KEYWORDS,
};

const articles: Article[] = [
	{
		"@type": "Article",
		"@id": "main",
		headline: `${SEO.SITE_DESCRIPTION}`,
		url: APP_URL,
		author: person,
		about: SEO.SITE_KEYWORDS,
	},
	{
		"@type": "Article",
		"@id": "features",
		headline: "Мои преимущества",
		url: `${APP_URL}/#features`,
	},
	{
		"@type": "Article",
		"@id": "pricing",
		headline: "Цены и тарифы",
		url: `${APP_URL}/#pricing`,
	},
	{
		"@type": "Article",
		"@id": "questions",
		headline: "Часто задаваемые вопросы",
		url: `${APP_URL}/#questions`,
		text: faqEntities.map((f) => `Q: ${f.name} A: ${(f.acceptedAnswer as Answer).text}`).join(" "),
	},
];

const profilePage: ProfilePage = {
	"@type": "ProfilePage",
	mainEntity: person,
	keywords: SEO.SITE_KEYWORDS,
};

export const JsonLd = () => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [...articles.map((a) => a), product, profilePage, faqPage],
	};

	return (
		<Script
			id="json-ld"
			type="application/ld+json"
			strategy="beforeInteractive"
		>
			{JSON.stringify(jsonLd)}
		</Script>
	);
};

export default JsonLd;
