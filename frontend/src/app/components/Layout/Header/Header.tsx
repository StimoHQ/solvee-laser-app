"use client";
import HeaderLink from "./Navigation/HeaderLink";
import Logo from "../../Logo/Logo";
import { clsx } from "clsx";
import useGlobalStore from "@/app/store/global";
import HeaderSideBarLink from "./Navigation/HeaderSideBarLink";
import { ADDRESS } from "@/app/data/constants";
import headerData from "../../../data/headerData";

const Header = () => {
	const { isSticky, isSideBarOpen, setSideBarOpen } = useGlobalStore();

	return (
		<header
			className={clsx(
				"fixed",
				"top-0",
				"py-1",
				"z-50",
				"w-full",
				"transition-all",
				"duration-300",
				isSticky && !isSideBarOpen ? ["shadow-lg", "bg-pink-400"] : "shadow-none"
			)}
		>
			<nav
				aria-label="Главная навигация сайта"
				className={clsx(
					"container",
					"grid",
					"grid-cols-3",
					"items-center",
					"mx-auto",
					"lg:max-w-xl",
					"md:max-w-3xl",
					"transition-all",
					"duration-300",
					"nav-menu-border",
					isSticky ? ["py-2", "nav-menu-border-hide"] : "py-5",
					isSideBarOpen && "opacity-0"
				)}
			>
				{/* Меню */}
				<ul className={clsx("hidden", "lg:flex", "justify-end", "xl:gap-5", "gap-3")}>
					{headerData.map((item) => (
						<HeaderLink
							key={item.href}
							item={item}
						/>
					))}
				</ul>
				{/* Лого */}
				<div className={clsx("flex", "justify-center", "col-start-2")}>
					<Logo from="header" />
				</div>

				{/* Адрес */}
				<address className={clsx("hidden lg:flex justify-start text-secondary text-[14px] font-normal not-italic")}>
					<a
						href="/#contacts"
						className="grow-underline"
						aria-label="Перейти к контактам студии"
					>
						{ADDRESS}
					</a>
				</address>

				{/* Кнопка для открытия мобильной навигации */}
				<button
					onClick={() => setSideBarOpen(!isSideBarOpen)}
					className={clsx("lg:hidden", "flex", "flex-col", "items-center", "col-start-3", "gap-1.5")}
					aria-label="Открыть мобильную навигацию сайта"
					aria-expanded={isSideBarOpen}
				>
					<span className={clsx("w-6", "h-0.5", "bg-secondary")}></span>
					<span className={clsx("w-6", "h-0.5", "bg-secondary")}></span>
					<span className={clsx("w-6", "h-0.5", "bg-secondary")}></span>
				</button>
			</nav>

			{/* Затемнение экрана */}
			{isSideBarOpen && (
				<div
					className={clsx("fixed", "inset-0", "bg-black/70", "z-40")}
					onClick={() => setSideBarOpen(false)}
				/>
			)}

			{/* SideBar для мобильной навигации */}
			<nav
				aria-label="Мобильная навигация сайта"
				aria-hidden={!isSideBarOpen}
				className={clsx(
					"rounded-4xl",
					"rounded-r-none",
					"fixed",
					"top-0",
					"right-0",
					"h-full",
					"w-[60%]",
					"bg-primary",
					"transition-transform",
					"duration-300",
					"ease-in-out",
					"z-50",
					isSideBarOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div className={clsx("flex", "justify-center", "p-4")}>
					<Logo from="navBar" />
				</div>

				<ul className={clsx("flex", "items-center", "flex-col", "pt-28", "md:pt-5", "gap-10", "md:gap-5")}>
					{headerData.map((item) => (
						<HeaderSideBarLink
							key={item.href}
							item={item}
						/>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
