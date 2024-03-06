import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular');

	return (
		<main>
			<CardsList id='popular' title='Популярные' data={popularGames} />
		</main>
	);
}
