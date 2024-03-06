import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new');

	return (
		<main>
			<CardsList id='new' title='Новинки' data={newGames} />
		</main>
	);
}
