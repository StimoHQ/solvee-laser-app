"use client";
import useGlobalStore from "../../store/global";
import { useEffect } from "react";

export const GlobalEffects = () => {
	const { setSticky, isSideBarOpen, isPriceDialogOpen } = useGlobalStore();

	useEffect(() => {
		const handleScroll = () => {
			setSticky(window.scrollY >= 40);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", isSideBarOpen || isPriceDialogOpen);
	}, [isSideBarOpen, isPriceDialogOpen]);

	return null;
};
