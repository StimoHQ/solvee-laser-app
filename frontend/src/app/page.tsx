import Faq from "@/Components/Home/FAQ/Faq";
import Features from "./components/Home/Features/Features";
import Hero from "./components/Home/Hero/Hero";
import Pricing from "./components/Home/Pricing/Pricing";
import Contacts from "./components/Home/Contacts/Contacts";

const Home = () => {
	return (
		<main>
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Contacts />
		</main>
	);
};

export default Home;
