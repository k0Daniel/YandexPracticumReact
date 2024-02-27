import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../Components/CardsList/CardsList';

export default function New() {
	const newGames = getGamesByCategory('runner');

	return (
		<main>
			<CardsList id='runner' title='Ранеры' data={newGames} />
		</main>
	);
}
