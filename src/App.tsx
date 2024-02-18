import '@mantine/core/styles.css';
import { lazy, Suspense } from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoadingPage from './components/LoadingPage';
import HeadersComp from './components/HeadersComp';

const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter([
	{
		path: "/",
        element: <HeadersComp />,
        children: [
			{
                path: "/",
                element: <HomePage />,
            },
		]
	},
]);

function App() {
	return (
		<>
			<ColorSchemeScript defaultColorScheme="light" />
			<MantineProvider defaultColorScheme="light">
				<Suspense fallback={<LoadingPage />}>
					<RouterProvider router={router} />
				</Suspense>
			</MantineProvider>
		</>
	)
}

export default App