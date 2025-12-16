import clsx from "clsx";
import Image from "next/image";
import MotionWrapper from "../../Shared/MotionWrapper";
import { myFeatures, featuresAfter as features } from "@/app/data/features";
import SingleFeature from "./SingleFeature";

const Features = () => {
	const rightAnimation = {
		initial: { x: "10%", opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 1, delay: 0.3 },
	};

	const featuresAfter = features?.description.split(",") || [];

	return (
		<section
			aria-label="Преимущества лазерной эпиляции у меня"
			id="features"
			className={clsx("relative", "overflow-x-hidden", "bg-secondary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl")}>
				<div className={clsx("grid", "grid-cols-12")}>
					<div className={clsx("xl:col-span-6", "col-span-12", "px-3")}>
						<h2 className={clsx("md:text-5xl", "sm:text-40", "text-3xl", "font-semibold", "text-primary", "pb-8")}>
							Мои Преимущества
						</h2>
						<div className={clsx("grid", "grid-cols-12", "gap-6")}>
							{myFeatures.map((item, index) => (
								<SingleFeature
									key={index}
									feature={item}
								/>
							))}
						</div>
					</div>
					<MotionWrapper
						className={clsx("xl:col-span-6", "col-span-12", "xl:ml-10")}
						options={rightAnimation}
						inView={true}
					>
						<h3 className={clsx("text-primary", "text-lg", "pb-8", "pt-10", "xl:pt-0", "mb-0", "text-center")}>
							Последствия шугаринга
						</h3>
						<div className={clsx("flex", "flex-col", "xl:flex-row", "gap-5", "items-baseline", "xl:items-center")}>
							<figure className={clsx("border-2", "border-primary", "p-5", "mx-10", "xl:mx-0")}>
								<Image
									src="/images/features/features-1.webp"
									alt="Кожа после шугаринга"
									width={336}
									height={300}
									className={clsx("h-full", "xl:w-full")}
								/>
							</figure>
							<ul
								className={clsx("flex", "flex-col", "gap-6", "h-full", "text-base", "text-primary", "ml-10", "xl:ml-0")}
							>
								<li className="li-dash">Кожа огрубевшая </li>
								<li className="li-dash">Темная пигментация </li>
								<li className="li-dash">Раздражение </li>
								<li className="li-dash">Волосы врастают от постоянного выдергивания </li>
							</ul>
						</div>
						<h3 className={clsx("text-primary", "text-2xl", "my-6", "text-center")}>После 7 процедур</h3>
						<div className={clsx("flex", "flex-col", "xl:flex-row", "items-baseline", "xl:items-center")}>
							<ul
								className={clsx(
									"flex",
									"flex-col",
									"gap-5",
									"h-full",
									"text-base",
									"text-primary",
									"ml-10",
									"xl:ml-0",
									"pb-5",
									"xl:pb-0"
								)}
							>
								{featuresAfter.map((item, i) => (
									<li
										key={i}
										className="li-dash"
									>
										{" "}
										{item}{" "}
									</li>
								))}
							</ul>
							<figure className={clsx("border-2", "border-primary", "p-5", "mx-10", "xl:mx-0")}>
								<Image
									src="/images/features/features-2.webp"
									alt="Кожа после курса процедур лазерной эпиляции"
									width={336}
									height={300}
									className={clsx("xl:w-full", "h-full")}
								/>
							</figure>
						</div>
					</MotionWrapper>
				</div>
			</div>
		</section>
	);
};

export default Features;
