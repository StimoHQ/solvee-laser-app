import Faq from "@/Components/Home/FAQ/Faq";
import Features from "./components/Home/Features/Features";
import Hero from "./components/Home/Hero/Hero";
import Pricing from "./components/Home/Pricing/Pricing";
import Contacts from "./components/Home/Contacts/Contacts";
import Reviews from "./components/Home/Reviews/Reviews";

const Home = () => {
	return (
		<main>
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Reviews />
			<Contacts />
		</main>
	);
};

export default Home;
