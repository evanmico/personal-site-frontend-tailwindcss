import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import RootLayout from './routes/layouts/RootLayout.jsx'
import Index from './routes/Index.jsx'
import About from './routes/About.jsx'
import Projects from './routes/Projects.jsx'

const root = document.getElementById('root')
//root.className += "min-h-screen flex flex-col"

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Index/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

export {root};