"use client";
import useGlobalStore from "@/app/store/global";
import clsx from "clsx";

const PriceDialogButton = () => {
	const { setPriceDialogOpen, isPriceDialogOpen } = useGlobalStore();
	return (
		<button
			aria-expanded={isPriceDialogOpen}
			onClick={() => setPriceDialogOpen(!isPriceDialogOpen)}
			className={clsx(
				"px-4",
				"py-2",
				"rounded-lg",
				"text-base",
				"font-semibold",
				"text-white",
				"mt-4",
				"border",
				"btn"
			)}
		>
			Подробнее о ценах
		</button>
	);
};

export default PriceDialogButton;
