import clsx from "clsx";
import { questions } from "@/app/data/questions";
import { SingleQuestion } from "@/Components/Home/FAQ/SingleQuestion";

const Faq = () => {
	return (
		<section
			id="questions"
			aria-label="Часто задаваемые вопросы"
			className={clsx("relative", "overflow-x-hidden", "bg-secondary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl", "md:max-w-3xl", "px-4")}>
				<div className={clsx("lg:mb-15", "mb-10")}>
					<h2 className={clsx("text-primary", "text-3xl", "text-center")}>Вопросы</h2>
				</div>
				<div className="mt-3.125">
					<div className="grid lg:grid-cols-2 grid-cols-1 justify-between">
						{questions.map((item, i) => (
							<SingleQuestion
								key={i}
								faq={item}
								index={i}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
