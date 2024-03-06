import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, 'shooter');

	return (
		<main>
			<CardsList id='shooter' title='Шутеры' data={shooterGames} />
		</main>
	);
}
