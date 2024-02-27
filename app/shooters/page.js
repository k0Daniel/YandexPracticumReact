import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../Components/CardsList/CardsList';

export default function New() {
	const newGames = getGamesByCategory('shooter');

	return (
		<main>
			<CardsList id='shooter' title='Шутеры' data={newGames} />
		</main>
	);
}
