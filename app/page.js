import { Banner } from "./Components/Banner/Banner";
import { NewCardsList } from "./Components/CardsList/NewCardsList";
import { PopularCardsList } from "./Components/CardsList/PopularCardsList";
import { Promo } from "./Components/Promo/Promo";

export default function Home() {
	return <main>
		<Banner />
		<PopularCardsList />
		<NewCardsList />
		<Promo />
	</main>;
}
