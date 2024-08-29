import cls from 'classnames';
import styles from './index.module.css';
import { BrowseWorkPrompt } from '../../components/BrowseWorkPrompt';
import { Work } from '../../components/Work';
import { useWindowSize } from '../../lib/hooks';
import { Layout1 } from './Layout1';
import { Layout2 } from './Layout2';
import { useRef } from 'react';
import { Easing, Tween } from '@tweenjs/tween.js';
import { LANDING_PAGE_ABOUT } from '../../lib/constants';

export const Home = () => {
	const { width } = useWindowSize();
	const landingPageRef = useRef<HTMLDivElement>(null);

	const getLayout = () => {
		if (width >= 800) return <Layout1 />;
		return <Layout2 />;
	};

	const getAboutFootSize = () => {
		if (width >= 1000) return '20px';
		else return '16px';
	};

	const getLinkFontSize = () => {
		if (width >= 1000) return '20px';
		else return '16px';
	};

	const onBrowseWork = () => {
		if (!landingPageRef.current) return;
		let animationId = -1;
		const tween = new Tween({ scrollTop: window.scrollY })
			.to({ scrollTop: landingPageRef.current?.getBoundingClientRect().height }, 500)
			.easing(Easing.Quadratic.In)
			.onUpdate(({ scrollTop }) => {
				window?.scrollTo(0, scrollTop);
			})
			.start();

		const animate = () => {
			animationId = window.requestAnimationFrame(animate);
			const isAnimationRunning = tween.update();
			if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
		};

		animate();
	};

	return (
		<div className={styles.home}>
			<div className={styles.backgroundImage} />
			<div
				ref={landingPageRef}
				className={cls(
					styles.landingPage,
					width >= 800 ? styles.defaultPaddingTop : styles.smallPaddingTop,
				)}
			>
				{getLayout()}
				<div
					className={styles.about}
					style={{
						fontSize: getAboutFootSize(),
					}}
				>
					{LANDING_PAGE_ABOUT}
				</div>
				<div className={styles.links}>
					<div
						className={styles.link}
						style={{
							fontSize: getLinkFontSize(),
						}}
					>
						Email
					</div>
					<div
						className={styles.link}
						style={{
							fontSize: getLinkFontSize(),
						}}
					>
						Linkedin
					</div>
				</div>
				<div className={styles.browseProjectsPrompt}>
					<BrowseWorkPrompt onClick={onBrowseWork} />
				</div>
			</div>
			<div
				className={cls(
					styles.workPage,
					width >= 800 ? styles.defaultPaddingTop : styles.smallPaddingTop,
				)}
			>
				<Work
					imageSrc="./images/develop_for_good.png"
					imageHref="https://sophias-stellar-site-f53327.webflow.io/work/project-1"
					title="Horizon: Silver Lining Mentoring"
					description="How I designed for 1-1 relationship growth in the foster care community"
					className={cls(styles.work, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				<Work
					imageSrc="./images/tempo.png"
					imageHref="https://sophias-stellar-site-f53327.webflow.io/work/project-1"
					title="Tempo Labs"
					description="How I streamlined the flow of idea to MVP for start-up founders"
					className={cls(styles.work, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				<Work
					imageSrc="./images/wayfarer.png"
					imageHref="https://sophiaa-liu-wayfarer.webflow.io/project-1"
					title="Wayfarer AI"
					description="How I designed for AI co-pilot in a travel-planning app"
					className={cls(styles.work, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				{/*<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Contact Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Learn More About Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>My Resume</span>
				</div>*/}
			</div>
		</div>
	);
};
