import cls from 'classnames';
import styles from './index.module.css';
import { useWindowSize } from '../../lib/hooks';
import { Suspense } from 'react';

export type WorkProps = {
	title: string;
	description: string;
	className?: string;
	imageSrc: string;
	imageHref: string;
};

export const Work = (props: WorkProps) => {
	const { imageSrc, imageHref, title, description, className } = props;
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
			<Suspense fallback={<div className={styles.background} />}>
				<img
					src={imageSrc}
					className={cls(styles.image)}
					onClick={() => {
						window.open(imageHref);
					}}
				/>
			</Suspense>
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
