import cls from 'classnames';
import styles from './index.module.css';
import { useWindowSize } from '../../lib/hooks';

export type WorkProps = {
	backgroundColor: string;
	title: string;
	description: string;
	className?: string;
};

export const Work = (props: WorkProps) => {
	const { backgroundColor, title, description, className } = props;
	const { width } = useWindowSize();

	const getTitleFontSize = () => {
		if (width >= 1200) return '64px';
		else if (width >= 600) return '32px';
		else return '20px';
	};

	const getDescriptionFontSize = () => {
		if (width >= 1200) return '32px';
		else if (width >= 600) return '20px';
		else return '16px';
	};

	return (
		<div className={cls(styles.work, className)}>
			<div style={{ background: backgroundColor }} className={styles.background}></div>
			<div
				className={cls(styles.meta, {
					[styles.stack]: width < 600,
				})}
			>
				<div
					className={cls(styles.title, {
						[styles.stack]: width < 600,
					})}
					style={{
						fontSize: getTitleFontSize(),
					}}
				>
					{title}
				</div>
				<div
					className={cls(styles.description, {
						[styles.stack]: width < 600,
					})}
					style={{
						fontSize: getDescriptionFontSize(),
					}}
				>
					{description}
				</div>
			</div>
		</div>
	);
};
