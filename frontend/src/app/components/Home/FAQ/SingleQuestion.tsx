"use client";
import { FaqType } from "@/app/data/questions";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { FC } from "react";

type FaqProps = {
	faq: FaqType;
	index: number;
};

export const SingleQuestion: FC<FaqProps> = ({ faq, index }: FaqProps) => {
	const { answer, question } = faq;

	return (
		<div className={clsx("col-span-1", "px-3")}>
			<Disclosure
				as="div"
				className={clsx("mb-4")}
			>
				{({ open }) => (
					<div>
						<DisclosureButton
							aria-expanded={open}
							aria-controls={`faq-answer-${index}`}
							className={clsx(
								"group",
								"flex",
								"w-full",
								"items-center",
								"justify-between",
								"text-start",
								"cursor-pointer",
								"bg-primary",
								"px-1.875",
								"py-1.563",
								"rounded-t-xl"
							)}
						>
							<h3 className={clsx("text-lg", "text-secondary")}>{question}</h3>
							{open ? (
								<Icon
									icon="tabler:minus"
									width="20"
									height="20"
									className={clsx("font-semibold", "text-cream", "sm:block", "hidden")}
								/>
							) : (
								<Icon
									icon="tabler:plus"
									width="20"
									height="20"
									className={clsx("font-semibold", "text-cream", "sm:block", "hidden")}
								/>
							)}
						</DisclosureButton>

						<Transition
							enter="transition duration-300 ease-out"
							enterFrom="transform scale-y-95 opacity-0"
							enterTo="transform scale-y-100 opacity-100"
							leave="transition duration-200 ease-in"
							leaveFrom="transform scale-y-100 opacity-100"
							leaveTo="transform scale-y-95 opacity-0"
						>
							<DisclosurePanel
								id={`faq-answer-${index}`}
								className={clsx("text-lg", "font-medium", "bg-primary", "text-secondary/70", "px-1.875", "pb-1.563")}
							>
								<p>{answer}</p>
							</DisclosurePanel>
						</Transition>
					</div>
				)}
			</Disclosure>
		</div>
	);
};
