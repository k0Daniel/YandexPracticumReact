import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, 'TDS');

	return (
		<main>
			<CardsList id='TDS' title='TDS' data={tdsGames} />
		</main>
	);
}
