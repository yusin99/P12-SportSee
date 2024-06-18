import MainComponent from './components/layouts/App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/home'

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
            ],
        },
    ])
    return <RouterProvider router={myRoutes} />
}
