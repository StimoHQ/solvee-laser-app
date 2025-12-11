import { PriceCardType, pricing } from "@/app/data/pricing";
import clsx from "clsx";
import PriceCard from "./PriceCard";
import PriceDialogButton from "./PriceDialogButton";
import PriceDialog from "./PriceDialog";

const Pricing = () => {
	const complexPricing = pricing.find((card) => card.title === "Комплексы")?.cards || [];
	return (
		<section
			aria-label="Цены и тарифы"
			id="pricing"
			className={clsx("relative", "overflow-x-hidden", "bg-primary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl", "text-center", "sm:px-4", "px-8")}>
				<p className="text-lg text-secondary/80 mb-1.875">Price List</p>
				<h2 className={clsx("md:text-6xl", "sm:text-40", "text-3xl", "font-semibold", "text-secondary", "pb-8")}>
					Основные комплексы
				</h2>
				<div className={clsx("grid", "grid-cols-12", "sm:gap-1.875", "gap-y-1.875")}>
					{complexPricing.map((item, i) => {
						const priceCard = item as Required<PriceCardType>;
						return (
							<article
								key={i}
								className={clsx("xl:col-span-4", "md:col-span-6", "col-span-12")}
							>
								<PriceCard item={priceCard} />
							</article>
						);
					})}

					<div
						className={clsx("xl:col-span-4", "md:col-span-6", "col-span-12", "flex", "justify-center", "items-center")}
					>
						<PriceDialogButton />
					</div>
				</div>

				<PriceDialog />
			</div>
		</section>
	);
};

export default Pricing;

//className={clsx("xl:col-span-4", "md:col-span-6", "col-span-12")}

// <div className={clsx("pt-4")}>
// 	<PriceDialogButton />
// </div>
