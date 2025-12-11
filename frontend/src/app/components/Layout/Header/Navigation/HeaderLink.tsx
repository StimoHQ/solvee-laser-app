import { HeaderItem } from "../../../../data/headerData";
import { clsx } from "clsx";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
	return (
		<li>
			<a
				href={item.href}
				className={clsx("text-base", "flex", "font-normal", "text-secondary", "grow-underline")}
			>
				{item.label}
			</a>
		</li>
	);
};

export default HeaderLink;
