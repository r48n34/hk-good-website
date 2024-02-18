import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';

const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},

]);

function App() {
	return (
		<>
			<ColorSchemeScript defaultColorScheme="dark" />
			<MantineProvider defaultColorScheme="dark">
				<Suspense fallback={<LoadingPage />}>
					<RouterProvider router={router} />
				</Suspense>
			</MantineProvider>
		</>
	)
}

export default App