import { APP_URL } from "@/app/data/constants";
import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={clsx("relative", "overflow-x-hidden", "bg-primary", "py-10")}>
			<div
				className={clsx(
					"relative container",
					"mx-auto",
					"lg:max-w-xl",
					"before:content-['']",
					"before:absolute",
					"before:w-full",
					"before:h-0.5",
					"before:bg-white",
					"before:left-0",
					"before:top-0"
				)}
			>
				<div
					className={clsx(
						"pt-10",
						"lg:px-4",
						"px-8",
						"flex",
						"flex-col",
						"lg:flex-row",
						"lg:justify-between",
						"gap-8",
						"lg:gap-0"
					)}
				>
					<div className={clsx("flex", "flex-col", "lg:gap-0", "gap-5")}>
						<p className={clsx("text-[12px]", "text-secondary/80", "grow-underline")}>
							<Link href={`${APP_URL}/term-of-use`}>Пользовательское соглашение</Link>
						</p>
						<p className={clsx("text-[12px]", "text-secondary/80", "grow-underline")}>
							<Link href={`${APP_URL}/privacy-policy`}>Политика конфиденциальности</Link>
						</p>
					</div>
					<div>
						<p className={clsx("text-[12px]", "text-secondary/80")}>
							Информация на сайте не является публичной офертой
						</p>
						<p className={clsx("text-[12px]", "text-secondary/80")}>
							&copy; Solvee Laser, {new Date().getFullYear()} — Все права защищены
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
