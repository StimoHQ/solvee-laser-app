"use client";
import { motion, MotionProps, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
	children: ReactNode;
	options: MotionProps;
	className?: string | undefined;
	inView?: boolean;
};

export default function MotionWrapper({ children, options, className, inView }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const view = inView
		? useInView(ref, {
				once: true,
				initial: false,
				amount: 0.25,
		  })
		: true;

	return (
		<motion.div
			ref={ref}
			className={className}
			{...options}
			animate={view ? options.animate : undefined}
		>
			{children}
		</motion.div>
	);
}
