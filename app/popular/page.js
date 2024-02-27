import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../Components/CardsList/CardsList';

export default function New() {
	const newGames = getGamesByCategory('popular');

	return (
		<main>
			<CardsList id='popular' title='Популярные' data={newGames} />
		</main>
	);
}
