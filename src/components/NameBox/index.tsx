import cls from 'classnames';
import styles from './index.module.css';

export type NameBoxProps = {
	name: string;
	note: string;
	className?: string;
	size?: 'default' | 'large' | 'small' | 'smallVertical';
};

export const NameBox = (props: NameBoxProps) => {
	const { name, note, className, size = 'default' } = props ?? {};

	return (
		<div className={cls(styles.nameBox, className)}>
			<div className={cls(styles.note, styles[size])}>{note}</div>
			<div className={cls(styles.name, styles[size])}>{name}</div>
		</div>
	);
};
