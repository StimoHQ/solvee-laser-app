"use client";
import useGlobalStore from "@/app/store/global";
import { HeaderItem } from "../../../../data/headerData";
import clsx from "clsx";

const HeaderSideBarLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
	const { setSideBarOpen } = useGlobalStore();
	return (
		<li>
			<a
				onClick={() => setSideBarOpen(false)}
				href={item.href}
				className={clsx("text-secondary", "focus:outline-none")}
			>
				{item.label}
			</a>
		</li>
	);
};

export default HeaderSideBarLink;
