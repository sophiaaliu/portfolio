import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { NavigationBar } from '../../components/NavigationBar';
import { useCallback, useState } from 'react';

export const App = () => {
	const [workSectionTop, setWorkSectionTop] = useState<number>(0);

	const scrollToWorkSection = useCallback(() => {
		window.scrollTo(0, workSectionTop);
	}, [workSectionTop]);

	return (
		<HashRouter>
			<NavigationBar scrollToWorkSection={scrollToWorkSection} />
			<Routes>
				<Route path="/*" element={<Home setWorkSectionTop={setWorkSectionTop} />} />
			</Routes>
		</HashRouter>
	);
};
