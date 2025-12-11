"use client";
import Image from "next/image";
import React from "react";
import useGlobalStore from "@/app/store/global";
import clsx from "clsx";

const Logo: React.FC<{ from: "header" | "navBar" | "priceDialog" }> = ({ from }) => {
	const { isSticky, setSideBarOpen, setPriceDialogOpen } = useGlobalStore();

	return (
		<a
			href="/"
			aria-label="Перейти на главную страницу"
		>
			<Image
				onClick={() => {
					from === "navBar" && setSideBarOpen(false);
					from === "priceDialog" && setPriceDialogOpen(false);
				}}
				src="/images/logo/logo.svg"
				alt="Логотип студии Solvee Laser"
				width={from === "header" && !isSticky ? 130 : 100}
				height={42}
				className={clsx("h-auto")}
				priority
			/>
		</a>
	);
};

export default Logo;
