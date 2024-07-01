import MainComponent from './components/layouts/App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/home'
import Error from './pages/not-found';
import PbTechnique from './pages/error';

export function MyRouter() {
    const myRoutes = createBrowserRouter([
        {
            path: '/',
            element: <MainComponent />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="/user/18" />,
                },
                {
                    path: '/user/:id',
                    element: <MainPage />,
                },
                {
                    path: '/404',
                    element: <Error />,
                },
                {
                    path: '/error',
                    element: <PbTechnique />,
                },
                {
                    path: '*',
                    element: <Error />,
                }
            ],
        },
    ])
    return <RouterProvider router={myRoutes} />
}
