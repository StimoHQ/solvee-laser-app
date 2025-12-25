"use client";

import { AvitoSingleReviewType } from "@/app/data/api/Avito/getAvitoReviews";
import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { SingleReview } from "./SingleReview";
import clsx from "clsx";

type Props = {
	reviews: AvitoSingleReviewType[];
};
export const ReviewCarousel: FC<Props> = ({ reviews }: Props) => {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		align: "start",
		slidesToScroll: 1,
	});

	return (
		<div className={clsx("relative", "group")}>
			<div
				className={clsx("overflow-hidden", "cursor-grab active:cursor-grabbing")}
				ref={emblaRef}
			>
				{/* Контейнер слайдов */}
				<div className={clsx("flex", "-ml-4", "pb-4")}>
					{reviews.map((review) => (
						<div
							key={review.id}
							className={clsx("flex-[0_0_auto]", "min-w-0", "pl-4", "basis-full", "md:basis-1/3")}
						>
							{/* Вставляем карточку */}
							<SingleReview review={review} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
