import { Card } from '../Card/Card';

import Link from 'next/link';
import Styles from './CardsList.module.css';

export const CardsList = props => {
	return (
		<section className={Styles.section}>
			<h2 className={Styles['section__title']} id={props.id}>
				{props.title}
			</h2>
			<ul className={Styles['cards-list']}>
				{props.data.map(item => {
					return (
						<li className={Styles['list__item']} key={item.id}>
							<Link href={`/games/${item.id}`} className={Styles['list__link']}>
								<Card {...item} />
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
