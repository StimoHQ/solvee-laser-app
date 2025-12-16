import { ADDRESS, DIKIDI_LINK, FIO, PHONE, TELEGRAM_LINK, WHATSUP_LINK } from "@/app/data/constants";
import { formatRuPhone } from "@/app/lib/formatRuPhone";
import { Icon } from "@iconify/react";
import clsx from "clsx";

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
				<div className={clsx("grid", "grid-cols-12")}>
					<div className={clsx("xl:col-span-6", "col-span-12", "px-4", "xl:py-0", "py-5")}>
						<p className={clsx("text-secondary/75", "text-base", "mb-2")}>Адрес</p>
						<address className={clsx("text-secondary", "text-base", "not-italic")}>{ADDRESS}</address>
					</div>
					<div className={clsx("xl:col-span-6", "col-span-12", "px-4", "xl:py-0", "py-5")}>
						<p className={clsx("text-secondary/75", "text-base", "mb-2")}>Мастер</p>
						<p className={clsx("text-secondary", "text-base")}>{FIO}</p>
						<p className={clsx("text-secondary", "text-base")}>
							<a
								aria-label={`Позвонить по телефону ${PHONE}`}
								href={`tel:+${PHONE}`}
							>
								{formatRuPhone(PHONE)}
							</a>
						</p>
						<p className={clsx("pt-5")}>
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
						</p>
						<div className={clsx("text-secondary", "text-xs", "py-5")}>
							<p>Для вашего удобства запись ведётся через сервис Dikidi</p>
						</div>
						<div className={clsx("flex", "gap-2")}>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
