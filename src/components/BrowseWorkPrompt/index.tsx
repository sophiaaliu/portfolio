import cls from 'classnames';
import styles from './index.module.css';
import ArrowIcon from './svgs/arrow.svg';
import { useWindowSize } from '../../lib/hooks';

type BrowseWorkPromptProps = {
	onClick?: () => void;
};

export const BrowseWorkPrompt = (props: BrowseWorkPromptProps) => {
	const { onClick = () => undefined } = props;
	const { width } = useWindowSize();

	const getSize = () => {
		if (width >= 1000) return 'default';
		else return 'small';
	};

	return (
		<div className={styles.prompt} onClick={onClick}>
			<div className={cls(styles.text, styles[getSize()])}>Browse my work</div>
			<img
				src={'./svgs/BrowseWorkPromptArrow.svg'}
				className={cls(styles.arrow, styles[getSize()])}
			/>
		</div>
	);
};
