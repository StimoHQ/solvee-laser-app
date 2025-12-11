import { FeatureType } from "@/app/data/features";
import clsx from "clsx";
import { FC } from "react";
import MotionWrapper from "../../Shared/MotionWrapper";

type SingleFeatureProps = {
	feature: FeatureType;
};

const SingleFeature: FC<SingleFeatureProps> = ({ feature }: SingleFeatureProps) => {
	const rightAnimation = {
		initial: { x: "-10%", opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 1, delay: 0.3 },
	};
	const { description, text } = feature;
	return (
		<div className={clsx("md:col-span-6", "col-span-12")}>
			<MotionWrapper
				options={rightAnimation}
				inView={true}
				className={clsx(
					"shadow-card-shadow",
					"p-10",
					"rounded-3xl",
					"h-full",
					"bg-primary",
					"flex",
					"flex-col",
					"justify-between"
				)}
			>
				<div className={clsx("flex", "flex-col", "gap-6")}>
					<div className={clsx("flex", "items-center", "gap-6")}>
						<div className={clsx("rounded-full", "bg-cream", "p-3", "w-3", "h-3")} />
						<h3 className={clsx("text-22", "font-semibold", "text-secondary")}>{text}</h3>
					</div>
					<p className={clsx("text-base", "font-medium", "text-secondary/80")}>{description}</p>
				</div>
			</MotionWrapper>
		</div>
	);
};

export default SingleFeature;
