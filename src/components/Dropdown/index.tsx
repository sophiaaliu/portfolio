import cls from 'classnames';
import styles from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import Arrow from '../../../public/svgs/dropdown.svg';

export type DropdownOption = {
	label: string;
	value: string;
};

export type DropdownProps = {
	className?: string;
	options: DropdownOption[];
	note: string;
	theme: 'orange' | 'purple';
	size?: 'default' | 'large' | 'small' | 'smallVertical';
	dropdownZIndex?: number;
};

const getDisplayedOptions = (options: DropdownOption[], selectedOption: DropdownOption) => {
	const displayedOptions = [];
	for (const option of options) {
		if (option.value !== selectedOption.value) displayedOptions.push(option);
	}
	return displayedOptions;
};

export const Dropdown = (props: DropdownProps) => {
	const {
		className,
		options: propOptions,
		note,
		theme,
		size = 'default',
		dropdownZIndex = 0,
	} = props ?? {};
	const [selectedOption, setSelectedOption] = useState<DropdownOption>(propOptions[0]);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const displayedOptions = getDisplayedOptions(propOptions, selectedOption);
	const selectedRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (
			!selectedRef.current?.contains(e.target as any) &&
			!dropdownRef.current?.contains(e.target as any)
		) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);

		return () => window.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div className={cls(styles.dropdown, className)}>
			<div className={cls(styles.note, styles[size])}>{note}</div>
			<div
				className={cls(styles.selected, styles[size], styles[theme], {
					[styles.isDropdownOpen]: isDropdownOpen,
				})}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				ref={selectedRef}
			>
				<div className={styles.label}>{selectedOption.label}</div>
				<img
					src={`./svgs/${theme}Arrow.svg`}
					className={cls(styles.arrow, {
						[styles.inverted]: !isDropdownOpen,
					})}
				/>
				{isDropdownOpen && (
					<div
						className={cls(styles.options, styles[size])}
						ref={dropdownRef}
						style={{ zIndex: dropdownZIndex }}
					>
						{displayedOptions.map(({ label, value }) => (
							<div
								className={cls(styles.option, styles[size], styles[theme])}
								onClick={() => {
									setSelectedOption({ label, value });
									setIsDropdownOpen(false);
								}}
							>
								{label}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
