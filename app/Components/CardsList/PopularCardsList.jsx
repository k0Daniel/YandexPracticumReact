import Styles from './CardsList.module.css';
import { PopularCadsFragment } from './PopularCardsFragment';

export const PopularCardsList = () => {
	return (
		<section className={Styles.section}>
			<h2 className={Styles['section__title']} id='popular'>
				Популярное
			</h2>
			<ul className={Styles.cards}>
				<PopularCadsFragment />
			</ul>
		</section>
	);
};
