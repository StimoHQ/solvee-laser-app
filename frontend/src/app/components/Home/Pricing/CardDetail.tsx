import { Icon } from "@iconify/react";
import clsx from "clsx";

const CardDetail = ({ text }: { text: string }) => {
	return (
		<li className={clsx("flex gap-2", "text-main-text-pink", "text-start", "text-lg", "pb-1.125", "items-center")}>
			<span
				role="img"
				aria-hidden="true"
			>
				<Icon
					aria-hidden="true"
					icon="tabler:circle-check"
					width="25"
					height="25"
					className={clsx("font-semibold", "text-success")}
				/>
			</span>
			<span>{text}</span>
		</li>
	);
};

export default CardDetail;
