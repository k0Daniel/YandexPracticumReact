import Styles from './CardsList.module.css';
import { NewCardsFragment } from './NewCardsFragment';

export const NewCardsList = () => {
	return (
		<section className={Styles.section}>
			<h2 className={Styles['section__title']} id='new'>
				Новинки
			</h2>
			<ul className={Styles.cards}>
				<NewCardsFragment />
			</ul>
		</section>
	);
};
