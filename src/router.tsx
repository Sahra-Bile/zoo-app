import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { About } from './sections/about/About'
import { Contact } from './sections/contact/Contact'
import { Home } from './sections/home/Home'
import { NotFound } from './sections/notfound/NotFound'
import { SingelAnimal } from './components/singelAnimal/SingelAnimal'
import { Animals } from './components/animals/Animals'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/animal/:id',
        element: <SingelAnimal />,
      },
      {
        path: '/animals',
        element: <Animals />,
      },
    ],
  },
])
