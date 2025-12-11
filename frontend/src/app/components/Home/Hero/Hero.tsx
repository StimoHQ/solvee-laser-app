import { MotionProps } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";
import MotionWrapper from "../../Shared/MotionWrapper";
import { DIKIDI_LINK } from "@/app/data/constants";

const Hero = () => {
	const leftAnimation: MotionProps = {
		initial: { x: "-25%", opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 1, delay: 0.8 },
	};
	const rightAnimation: MotionProps = {
		initial: { x: "25%", opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 1, delay: 0.8 },
	};

	return (
		<section
			aria-label="Главный блок сайта"
			id="hero"
			className={clsx("relative", "overflow-x-hidden", "pt-36", "md:pb-7.5")}
		>
			<div className={clsx("container", "lg:max-w-xl", "mx-auto")}>
				<div className={clsx("grid-cols-12", "grid", "z-1", "items-center")}>
					<div className={clsx("lg:col-span-6", "col-span-12", "px-4")}>
						<MotionWrapper options={leftAnimation}>
							<h1
								className={clsx(
									"flex",
									"flex-col",
									"gap-5",
									"text-secondary",
									"mb-0",
									"md:text-5xl",
									"sm:text-4xl",
									"text-3xl"
								)}
							>
								<span>Лазерная эпиляция</span>
								<span>Диодный лазер</span>
							</h1>
							<h2 className={clsx("text-lg", "font-medium", "text-secondary/80", "sm:py-1.875", "py-5")}>
								начни курс сейчас и будешь готова к следующему лету на все 100%
							</h2>
							<div className={clsx("text-center", "md:text-start")}>
								<a
									aria-label="Записаться на курс лазерной эпиляции через Dikidi"
									href={DIKIDI_LINK}
									className={clsx(
										"btn",
										"sm:px-2.188",
										"px-4",
										"sm:py-1.125",
										"py-2",
										"rounded-lg",
										"text-base",
										"font-semibold",
										"text-white",
										"inline-block",
										"md:mb-0",
										"mb-6",
										"border"
									)}
								>
									Записаться
								</a>
							</div>
						</MotionWrapper>
					</div>
					<div className={clsx("lg:col-span-6", "col-span-12", "px-4")}>
						<MotionWrapper options={rightAnimation}>
							<Image
								src="/images/hero/hero.webp"
								alt="Основатель студии и лазерный аппарат для эпиляции"
								width={700}
								height={700}
								className={clsx("h-full", "w-full")}
								priority
							/>
						</MotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
