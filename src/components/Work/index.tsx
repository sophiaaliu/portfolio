import cls from 'classnames';
import styles from './index.module.css';
import { useWindowSize } from '../../lib/hooks';
import { Suspense } from 'react';

export type WorkProps = {
	title: string;
	description: string;
	summary: string;
	className?: string;
	imageSrc: string;
	imageHref: string;
};

export const Work = (props: WorkProps) => {
	const { imageSrc, imageHref, title, summary, description, className } = props;
	const { width } = useWindowSize();

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
				<div className={cls(styles.info)}>
					<div
						className={cls(styles.title, {
							[styles.smallFont]: width < 800,
						})}
					>
						{title}
					</div>
					<div
						className={cls(styles.summary, {
							[styles.smallFont]: width < 800,
						})}
					>
						{summary}
					</div>
				</div>
				<div
					className={cls(styles.description, {
						[styles.stack]: width < 600,
						[styles.smallFont]: width < 800,
					})}
				>
					{description}
				</div>
			</div>
		</div>
	);
};
