import Styles from './Card.module.css';

export function Card() {
	return (
		<div className={`card ${Styles.container}`}>
			<img className={Styles['sub-title']} src='/images/brutal.png' />
			<h3 className={Styles.title}>Брутальная крепость</h3>
			<p>выбор для смелых и непоколебимых личностей, вроде Аски</p>
		</div>
	);
}
