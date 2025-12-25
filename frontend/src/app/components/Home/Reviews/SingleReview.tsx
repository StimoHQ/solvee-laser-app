"use client";

import { AvitoSingleReviewType } from "@/app/data/api/Avito/getAvitoReviews";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { FC, useLayoutEffect, useRef, useState } from "react";

type Props = {
	review: AvitoSingleReviewType;
};
export const SingleReview: FC<Props> = ({ review }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false); // Состояние развернутости
	const [isClamped, setIsClamped] = useState(false); // Нужна ли кнопка "далее"
	const textRef = useRef<HTMLParagraphElement>(null);

	const createdDate = new Intl.DateTimeFormat("ru-RU").format(new Date(review.createdAt * 1000));

	useLayoutEffect(() => {
		const el = textRef.current;
		if (el) {
			// Если прокручиваемая высота больше видимой — значит текст обрезается
			setIsClamped(el.scrollHeight > el.clientHeight);
		}
	}, [review.text]);

	return (
		// Карточка
		<div
			className={clsx(
				"select-none",
				"h-full",
				"rounded-xl border border-gray-200 bg-secondary",
				"p-6 shadow-sm",
				"flex flex-col"
			)}
		>
			{/* Шапка: Имя и Рейтинг */}
			<div className={clsx("flex items-center justify-between")}>
				<h3 className={clsx("text-base font-semibold text-primary", "truncate pr-2")}>{review.sender.name}</h3>
				<div className={clsx("flex items-center gap-1", "text-amber-500")}>
					{/* Цифра рейтинга */}
					<span className={clsx("text-sm font-bold")}>{review.score.toFixed(1)}</span>
					<Icon
						icon="mdi:star"
						className={clsx("h-4", "w-4", "fill-current")}
					/>
				</div>
			</div>

			{/* Текст отзыва */}
			<div className={clsx("relative", "grow", "flex", "flex-col", "items-start", "w-full")}>
				<div className={clsx("flex", "items-center", "w-full", "gap-1.5", "my-2")}>
					<span className={clsx("text-xs", "text-primary", "whitespace-nowrap")}>{createdDate}</span>
					<div className={clsx("h-px", "grow", "bg-primary/60")}></div>
				</div>

				<p
					ref={textRef}
					className={clsx(
						"text-start text-sm text-primary/80",
						"transition-all",
						!isExpanded && "line-clamp-5" // Условный класс через запятую
					)}
				>
					{review.text}
				</p>

				{/* Кнопка "Читать далее" */}
				{isClamped && !isExpanded && (
					<button
						onClick={() => setIsExpanded(true)}
						className={clsx("mt-2", "text-[10px] font-semibold", "text-blue-600 hover:text-blue-700", "self-start")}
					>
						Читать далее
					</button>
				)}

				{/* Кнопка "Скрыть" */}
				{isExpanded && (
					<button
						onClick={() => setIsExpanded(false)}
						className={clsx("mt-2", "text-[10px] font-semibold", "text-gray-400 hover:text-gray-500", "self-start")}
					>
						Свернуть
					</button>
				)}
			</div>
		</div>
	);
};
