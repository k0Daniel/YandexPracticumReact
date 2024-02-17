import { Card } from '../Card/Card';

import Styles from './CardsList.module.css';

export const CardsList = props => {
	return (
		<section className={Styles.section}>
			<h2 className={Styles['section__title']} id={props.id}>
				{props.title}
			</h2>
			<ul className={Styles['cards-list']}>
				{props.data.map((item) => {
					return (
						<li className={Styles['list__item']} key={item.id}>
							<a href={item.link} target='_blank' className={Styles['list__link']}>
								<Card {...item} />
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
