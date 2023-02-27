import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { About } from './sections/about/About'
import { Contact } from './sections/contact/Contact'
import { Home } from './sections/home/Home'
import { NotFound } from './sections/notfound/NotFound'
import { Animals } from './components/animals/Animals'
import { AnimalDetails } from './components/animalDetails/AnimalDetails'

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
        element: <AnimalDetails />,
      },
      {
        path: '/animals',
        element: <Animals />,
      },
    ],
  },
])
