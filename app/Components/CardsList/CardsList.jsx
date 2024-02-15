import { NewCardsFragment } from './NewCardsFragment';
import { PopularCardsFragment } from './PopularCardsFragment';

import Styles from './CardsList.module.css';

export const CardsList = props => {
	return (
		<section className={Styles.section}>
			<h2 className={Styles['section__title']} id={props.id}>
				{props.title}
			</h2>
			<ul className={Styles.cards}>
				{props.children} {props.id === 'popular' && <PopularCardsFragment />}
				{props.id === 'new' && <NewCardsFragment />}
			</ul>
		</section>
	);
};
