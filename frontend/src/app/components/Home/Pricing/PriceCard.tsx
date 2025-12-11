import clsx from "clsx";
import { FC } from "react";
import CardDetail from "@/Components/Home/Pricing/CardDetail";
import { PriceCardType } from "@/app/data/pricing";
import MotionWrapper from "@/Components/Shared/MotionWrapper";

type PriceCardProps = {
	item: Required<PriceCardType>;
};

const PriceCard: FC<PriceCardProps> = ({ item }: PriceCardProps) => {
	const animation = {
		initial: { x: "-70%", opacity: 0 },
		animate: { x: 0, y: 0, opacity: 1 },
		transition: { duration: 1, delay: 0.3 },
	};

	return (
		<MotionWrapper
			options={animation}
			inView={true}
			className={clsx(
				"relative",
				"flex",
				"flex-col",
				"justify-between",
				"mb-1.875",
				"lg:mb-0",
				"shadow-card-shadow",
				"bg-secondary",
				"z-1",
				"h-full",
				"px-6",
				"sm:px-15",
				"sm:pt-3.438",
				"sm:pb-12",
				"sm:py-0",
				"py-9",
				"rounded-3xl"
			)}
		>
			<div>
				<p
					aria-label={`Цена за ${item.text} ${item.price} рублей`}
					className={clsx("relative", "mb-6")}
				>
					<sub className={clsx("text-6xl", "font-semibold", "text-main-text-pink/80 ")}>{item.price}</sub>
					<sup className={clsx("text-xl", "font-semibold", "text-main-text-pink/60", "absolute", "top-6")}>руб.</sup>
				</p>
				<h3 className="text-main-text-pink/70 text-lg mb-4 pb-4">{item.text}</h3>
				<ul className={clsx("sm:pb-6")}>
					{item.details.map((detail, i) => (
						<CardDetail
							key={i}
							text={detail}
						/>
					))}
				</ul>
			</div>
		</MotionWrapper>
	);
};

export default PriceCard;
