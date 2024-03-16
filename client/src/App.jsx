import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './components/header.jsx'
import Home from './pages/home.jsx'
import Signup from './pages/sign-up.jsx'
import Video from './pages/video_call.jsx'
import Footer from './components/footer.jsx'


function App() {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sign-up' element={<Signup/>} />
                <Route path='/call' element={<Video/>} />
            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
