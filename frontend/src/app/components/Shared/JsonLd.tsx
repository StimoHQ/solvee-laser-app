import { ADDRESS, FIO, PHONE, TELEGRAM_LINK, WHATSUP_LINK, DIKIDI_LINK, APP_URL, SEO } from "@/app/data/constants";

import { myFeatures } from "@/app/data/features";
import { pricing } from "@/app/data/pricing";
import { questions } from "@/app/data/questions";
import { formatRuPhone } from "@/app/lib/formatRuPhone";
import Script from "next/script";
import { Article } from "schema-dts";

export const JsonLd = () => {
	const faqEntities = questions.map((q) => ({
		"@type": "Question",
		name: q.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: q.answer,
		},
	}));

	const forYandex: Article[] = [
		{
			"@type": "Article",
			"@id": "main",
			headline: `${SEO.SITE_DESCRIPTION}`,
			url: APP_URL,
			author: {
				"@type": "Person",
				name: FIO,
				knows: [TELEGRAM_LINK, DIKIDI_LINK, WHATSUP_LINK],
			},
			about: SEO.SITE_KEYWORDS,
			mainEntity: {
				"@type": "WebPage",
			},
		},
		{
			"@type": "Article",
			"@id": "features",
			url: `${APP_URL}/#features`,
		},
		{
			"@type": "Article",
			"@id": "pricing",
			url: `${APP_URL}/#pricing`,
		},
		{
			"@type": "Article",
			"@id": "questions",
			url: `${APP_URL}/#questions`,
			text: faqEntities.map((f) => `Q: ${f.name} A: ${f.acceptedAnswer.text}`).join(" "),
		},
	];

	const offers = pricing.flatMap((section) =>
		section.cards.map((card) => ({
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name: card.text,
			},
			price: card.price.toString(),
			priceCurrency: "RUB",
			...(card.details ? { description: card.details.join(", ") } : {}),
		}))
	);

	const featureEntities = myFeatures //В основную информацию
		.map((f) => ({
			"@type": "PropertyValue",
			name: f.text,
			description: f.description,
		}));

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			...forYandex.map((a) => a),
			{
				"@type": "WebSite",
				name: SEO.SITE_NAME,
				url: APP_URL,
				description: SEO.SITE_DESCRIPTION,
				publisher: {
					"@type": "Person",
					name: FIO,
				},
				inLanguage: "ru-RU",
				keywords: SEO.SITE_KEYWORDS,
			},
			{
				"@type": "Person",
				name: FIO,
				jobTitle: "Мастер по лазерной эпиляции",
				telephone: `${formatRuPhone(PHONE)}`,
				url: APP_URL,
				worksFor: {
					"@type": "BeautySalon",
					name: SEO.SITE_NAME,
					image: `${APP_URL}/images/hero/hero.webp`,
					url: APP_URL,
					telephone: `${formatRuPhone(PHONE)}`,
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
						telephone: `${formatRuPhone(PHONE)}`,
						contactType: "customer service",
						areaServed: "RU",
						availableLanguage: "ru",
					},
					sameAs: [TELEGRAM_LINK, WHATSUP_LINK, DIKIDI_LINK],
					additionalProperty: featureEntities,
				},
				sameAs: [TELEGRAM_LINK, WHATSUP_LINK, DIKIDI_LINK],
				knowsAbout: SEO.SITE_KEYWORDS,
			},
			{
				"@type": "FAQPage",
				mainEntity: faqEntities,
			},
			{
				"@type": "OfferCatalog",
				name: `Прайс ${SEO.SITE_NAME}`,
				url: `${APP_URL}/#pricing`,
				itemListElement: offers,
			},
		],
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
