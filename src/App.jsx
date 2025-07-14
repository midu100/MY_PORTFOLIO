import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<LayoutOne />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
        
        </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={ myRouter} />
      
    </>
  )
}

export default App
