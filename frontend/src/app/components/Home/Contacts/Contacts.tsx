import { ADDRESS, DIKIDI_LINK, FIO, PHONE, TELEGRAM_LINK, WHATSUP_LINK } from "@/app/data/constants";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import YandexMap from "../../API/YandexMap/YandexMap";

const Contacts = () => {
	return (
		<section
			aria-label="Контактная информация"
			id="contacts"
			className={clsx("relative", "overflow-x-hidden", "bg-primary", "scroll-mt-15")}
		>
			<div className={clsx("container", "mx-auto", "lg:max-w-xl", "sm:px-4", "px-8")}>
				<h2 className={clsx("md:text-5xl", "sm:text-4xl", "text-3xl", "font-semibold", "text-secondary", "pb-8")}>
					Контакты
				</h2>
				<div className="flex md:flex-row flex-col items-stretch justify-center sm:gap-28 gap-8">
					<div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
						<div>
							<span className="text-secondary text-xl font-bold">Мастер</span>
							<p className="text-secondary/70 font-normal text-base max-w-80 pt-3 pb-7">{FIO}</p>
						</div>
					</div>
					<div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
						<div className="flex flex-col h-full justify-between">
							<span className="text-secondary text-xl font-bold">Адрес</span>
							<address className="text-secondary/70 font-normal text-base max-w-80 pt-3 pb-7 not-italic">
								{ADDRESS}
							</address>
						</div>
					</div>
					<div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
						<div className="flex flex-col h-full gap-3">
							<span className="text-secondary text-xl font-bold">Соц. сети</span>
							<div className="flex flex-row gap-3">
								<a href={TELEGRAM_LINK}>
									<Icon
										aria-label="Открыть Telegram"
										icon="mdi:telegram"
										className="w-9 h-9 text-white bg-blue-500 rounded-full p-0.5"
									/>
								</a>
								<a href={WHATSUP_LINK}>
									<Icon
										aria-label="Открыть WhatsApp"
										icon="mdi:whatsapp"
										className="w-9 h-9 text-white bg-green-500 rounded-full p-0.5"
									/>
								</a>
								<a
									aria-label="Записаться через сервис Dikidi"
									href={DIKIDI_LINK}
									className={clsx(
										"btn",
										"px-2",
										"py-2",
										"rounded-lg",
										"text-base",
										"font-semibold",
										"text-white",
										"border"
									)}
								>
									Записаться
								</a>
							</div>
						</div>
					</div>
				</div>
				<YandexMap
					key="yandexMap"
					className="w-full h-125 pt-5 md:pt-0"
				/>
			</div>
		</section>
	);
};

export default Contacts;
