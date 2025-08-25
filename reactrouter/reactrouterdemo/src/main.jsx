import About from './compponents/About.jsx'
import Contact from './compponents/Contact.jsx'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import { Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Home from './compponents/Home.jsx'
import Users from './compponents/Users.jsx'
import UsersSearch from './compponents/UsersSearch.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Users' element={<Users />}/>

      <Route path='/Users/:userId' element={<UsersSearch />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
