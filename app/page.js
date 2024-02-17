import { getGamesByCategory } from './data/data-utils';
import { Banner } from './Components/Banner/Banner';
import { CardsList } from './Components/CardsList/CardsList';
import { Promo } from './Components/Promo/Promo';

export default function Home() {
	const popularGames = getGamesByCategory('popular');
	const newGames = getGamesByCategory('new');
	return (
		<main>
			<Banner />
			<CardsList id='popular' title='Популярные' data={popularGames} />
			<CardsList id='new' title='Новинки' data={newGames} />
			<Promo />
		</main>
	);
}
