"use client";
import { create } from "zustand";

type GlobalStore = {
	isSticky: boolean;
	isSideBarOpen: boolean;
	isPriceDialogOpen: boolean;
	setSideBarOpen: (value: boolean) => void;
	setSticky: (value: boolean) => void;
	setPriceDialogOpen: (value: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => {
	return {
		isSticky: false,
		isSideBarOpen: false,
		isPriceDialogOpen: false,
		setSideBarOpen: (value) => set({ isSideBarOpen: value }),
		setSticky: (value) => set({ isSticky: value }),
		setPriceDialogOpen: (value) => set({ isPriceDialogOpen: value }),
	};
});

export default useGlobalStore;
