import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { NavigationBar } from '../../components/NavigationBar';

export const App = () => {
	return (
		<HashRouter>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</HashRouter>
	);
};
