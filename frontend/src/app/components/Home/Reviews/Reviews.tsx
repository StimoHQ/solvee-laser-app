import getAvitoReviews, { type AvitoReviewsType } from "@/app/data/api/Avito/getAvitoReviews";

const Reviews = async () => {
	const reviewJson: AvitoReviewsType = await getAvitoReviews();

	if (!reviewJson) return <p>Отзывов нет!</p>;

	return reviewJson.reviews.filter((r) => r.score === 5 && r.stage === "done").map((r, i) => <p key={i}>{r.text}</p>);
};

export default Reviews;
