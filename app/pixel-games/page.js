import { CardsList } from '../Components/CardsList/CardsList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { endpoints } from '../api/config';

export default async function New() {
	const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, 'pixel');

	return (
		<main>
			<CardsList id='pixel' title='Пиксельные игры' data={pixelGames} />
		</main>
	);
}
