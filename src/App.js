import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/restaurantMenu'

const App = () => {
    return (
        <div className='main'>
            <Header />
            <div className='body w-[70%] mx-[15%]'>
                <Outlet />
            </div>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ]

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)