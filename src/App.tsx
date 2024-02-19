import '@mantine/core/styles.css';
import 'atropos/css'

import { lazy, Suspense } from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingPage from './components/LoadingPage';
import HeadersComp from './components/HeadersComp';

const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));

const router = createBrowserRouter([
	{
		path: "/",
        element: <HeadersComp />,
        children: [
			{
                path: "/",
                element: <HomePage />,
            },
			{
                path: "/category/:type",
                element: <CategoryPage />,
            },
		]
	},
]);

function App() {
	return (
		<>
		<ColorSchemeScript defaultColorScheme="light" />
		<AnimatePresence mode="wait" initial={true}>
			<MantineProvider defaultColorScheme="light">
				<Suspense fallback={<LoadingPage />}>
					<RouterProvider router={router} />
				</Suspense>
			</MantineProvider>
		</AnimatePresence>
		</>
	)
}

export default App