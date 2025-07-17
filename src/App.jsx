import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<LayoutOne />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact'   element={<Contact />} />
        
        </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={ myRouter} />
      <AnimatedCursor color='255,255,255'/>
      
    </>
  )
}

export default App
