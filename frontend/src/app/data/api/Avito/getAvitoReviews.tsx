import { avitoIsOn } from "./avitoIsOn";

type AvitoTokenType =
	| {
			access_token: string;
			expires_in: number;
			token_type: string;
	  }
	| undefined;

type AvitoTokenRequestType = {
	client_id: string;
	client_secret: string;
	grant_type: "client_credentials";
};

type AvitoReviewsRequestType = {
	offset: string;
	limit: string;
};

export type AvitoReviewsType =
	| {
			total: number;
			reviews: {
				id: number;
				sender: { name: string };
				score: number;
				text: string;
				createdAt: number; //Unix TimeStamp создания отзыва
				stage: "done" | "fell_through" | "not_agree" | "not_communicate";
			}[];
	  }
	| undefined;

const REVILIDATE_TIME = parseInt(process.env.AVITO_REVALIDATE_TIME ?? "86400", 10); //Один день

const avitoGetToken = async (): Promise<AvitoTokenType> => {
	const params: AvitoTokenRequestType = {
		client_id: process.env.AVITO_CLIENT_ID as string,
		client_secret: process.env.AVITO_CLIENT_SECRET as string,
		grant_type: "client_credentials",
	};

	const requestBody = new URLSearchParams(params);

	try {
		const response = await fetch("https://api.avito.ru/token", {
			method: "POST",
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
			},
			body: requestBody.toString(),
			next: { revalidate: REVILIDATE_TIME },
		});

		if (!response.ok) return;

		const token: AvitoTokenType = await response.json();

		return token;
	} catch (error) {
		return;
	}
};

const getAvitoReviews = async (): Promise<AvitoReviewsType> => {
	if (!avitoIsOn()) return;

	console.info("Avito reviews is on");

	const token: AvitoTokenType = await avitoGetToken();

	if (!token) return;

	const params: AvitoReviewsRequestType = {
		offset: "0",
		limit: "10",
	};

	const requestParams = new URLSearchParams(params);

	try {
		const response = await fetch(`https://api.avito.ru/ratings/v1/reviews?${requestParams.toString()}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token.access_token}`,
			},
			next: { revalidate: REVILIDATE_TIME },
		});

		if (!response.ok) return;

		return await response.json();
	} catch (error) {
		return;
	}
};

export default getAvitoReviews;
