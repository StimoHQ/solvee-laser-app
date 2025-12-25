import getAvitoReviews, { type AvitoReviewsType } from "@/app/data/api/Avito/getAvitoReviews";
import clsx from "clsx";
import { ReviewCarousel } from "./ReviewCarousel";

const Reviews = async () => {
	const reviews = await getAvitoReviews();

	if (!reviews) return;

	return (
		<section
			aria-label="Отзывы"
			id="reviews"
			className={clsx("relative", "overflow-x-hidden", "bg-primary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl", "text-center", "sm:px-4", "px-8")}>
				<h2 className={clsx("md:text-6xl", "sm:text-40", "text-3xl", "font-semibold", "text-secondary", "pb-10")}>
					Отзывы
				</h2>
				<ReviewCarousel reviews={reviews} />
			</div>
		</section>
	);
};

export default Reviews;

//
