import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../Components/CardsList/CardsList';

export default function New() {
	const newGames = getGamesByCategory('pixel');

	return (
		<main>
			<CardsList id='pixel' title='Пиксельные игры' data={newGames} />
		</main>
	);
}
