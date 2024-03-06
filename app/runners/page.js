import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, 'runner');

	return (
		<main>
			<CardsList id='runner' title='Ранеры' data={runnerGames} />
		</main>
	);
}
