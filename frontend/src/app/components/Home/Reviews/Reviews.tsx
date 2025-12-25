import getAvitoReviews, { type AvitoReviewsType } from "@/app/data/api/Avito/getAvitoReviews";
import clsx from "clsx";

const Reviews = async () => {
	const reviewJson: AvitoReviewsType = await getAvitoReviews();

	if (!reviewJson) return;

	return (
		<section
			aria-label="Отзывы"
			id="reviews"
			className={clsx("relative", "overflow-x-hidden", "bg-primary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl", "text-center", "sm:px-4", "px-8")}>
				<h2 className={clsx("md:text-6xl", "sm:text-40", "text-3xl", "font-semibold", "text-secondary", "pb-8")}>
					Отзывы
				</h2>
				{/* <Slider {...sliderSettings}>
					{reviewJson.reviews
						.filter((r) => r.score === 5 && r.stage === "done")
						.map((r, i) => (
							<p key={i}>{r.text}</p>
						))}
				</Slider> */}
			</div>
		</section>
	);
};

export default Reviews;

// reviewJson.reviews.filter((r) => r.score === 5 && r.stage === "done").map((r, i) => <p key={i}>{r.text}</p>);
