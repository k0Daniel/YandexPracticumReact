'use client';
import { useGetDataByCategory } from '../api/api-hooks';
import { CardsListSection } from '../Components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { Preloader } from '../Components/Preloader/Preloader';

export default function tdsGames() {
	const tdsGames = useGetDataByCategory(endpoints.games, 'TDS');

	return (
		<main>{tdsGames ? <CardsListSection type='slider' id='TDS' title='TDS' data={tdsGames} /> : <Preloader />}</main>
	);
}
