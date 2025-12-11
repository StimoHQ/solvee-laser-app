"use client";
import useGlobalStore from "@/app/store/global";
import clsx from "clsx";
import Logo from "@/Components/Logo/Logo";
import { Icon } from "@iconify/react";
import { pricing } from "@/app/data/pricing";

const PriceDialog = () => {
	const { isPriceDialogOpen, setPriceDialogOpen } = useGlobalStore();
	const priceList = pricing || [];

	return (
		<section
			role="dialog"
			aria-modal="true"
			aria-labelledby="pricing-dialog-title"
			className={clsx(
				"fixed",
				"z-50",
				"flex",
				"items-center",
				"justify-center",
				"bg-gray-900/50",
				isPriceDialogOpen ? "inset-0" : "top-full"
			)}
		>
			<div
				className={clsx(
					"relative",
					"transition-transform",
					"duration-500",
					"bg-primary",
					"px-6",
					"rounded-lg",
					"max-h-full",
					"w-auto",
					"md:w-[50%]",
					"overflow-y-auto",
					isPriceDialogOpen ? "inset-0" : "translate-y-full"
				)}
			>
				<div
					className={clsx(
						"z-70",
						"bg-primary",
						"sticky",
						"mt-6",
						"top-0",
						"w-full",
						"flex",
						"justify-center",
						"items-center"
					)}
				>
					<Logo from="priceDialog" />
					<button
						aria-label="Закрыть"
						onClick={() => setPriceDialogOpen(false)}
						className={clsx("cursor-pointer", "w-5", "h-5", "absolute", "right-1", "top-1", "text-cream/80")}
					>
						<Icon
							icon="ph:x-circle"
							width="36"
							height="36"
						/>
					</button>
				</div>

				<div className={clsx("z-3", "relative", "my-8", "text-center")}>
					<span
						className={clsx("z-1", "absolute", "left-0", "top-1/2", "block", "h-px", "w-full", "bg-secondary")}
					></span>
					<h2
						className={clsx(
							"text-body-secondary",
							"relative",
							"z-10",
							"inline-block",
							"bg-primary",
							"px-3",
							"text-base",
							"text-secondary"
						)}
					>
						Price List
					</h2>
				</div>

				{priceList.map((item) => {
					return (
						<article
							key={item.title}
							className={clsx("mb-6")}
						>
							<h3
								className={clsx(
									"relative",
									"text-start",
									"mb-4",
									"md:text-3xl",
									"text-xl",
									"text-secondary",
									"before:content-['']",
									"before:absolute",
									"before:w-full",
									"before:h-0.5",
									"before:bg-white",
									"before:left-0",
									"before:bottom-0"
								)}
							>
								{item.title}
							</h3>
							<div className={clsx("flex", "flex-col", "mx-auto")}>
								{item.cards.map((card) => {
									return (
										<div
											key={card.id}
											className={clsx("mb-1")}
										>
											<div className={clsx("flex", "justify-between", "text-secondary/80")}>
												<p className={clsx("md:text-2xl", "text-base")}>{card.text} </p>
												<p className={clsx("md:text-2xl", "text-base")}>
													{card.price}
													<span className={clsx("md:text-xl", "text-xs", "pl-0.5")}>р</span>
												</p>
											</div>
											<div className={clsx("flex", "flex-col", "items-start", "text-secondary/60")}>
												{card.details &&
													card.details.map((detail, index) => {
														return (
															<span
																key={index}
																className={clsx("md:text-base", "text-xs")}
															>
																{detail}
															</span>
														);
													})}
											</div>
										</div>
									);
								})}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default PriceDialog;
