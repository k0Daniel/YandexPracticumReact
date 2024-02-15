import { Banner } from './Components/Banner/Banner';
import { CardsList } from './Components/CardsList/CardsList';
import { NewCardsFragment } from './Components/CardsList/NewCardsFragment';
import { PopularCardsFragment } from './Components/CardsList/PopularCardsFragment';
import { Promo } from './Components/Promo/Promo';

export default function Home() {
	return (
		<main>
			<Banner />
			<CardsList id='popular' title='Популярные'></CardsList>
			<CardsList id='new' title='Новинки'></CardsList>
			<Promo />
		</main>
	);
}
