import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../Components/CardsList/CardsList';

export default function New() {
	const newGames = getGamesByCategory('TDS');

	return (
		<main>
			<CardsList id='TDS' title='TDS' data={newGames} />
		</main>
	);
}
