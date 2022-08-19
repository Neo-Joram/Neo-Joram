import React from 'react'
import './app.css'
import {Navbar, CTA, Brand} from './components'
import {Header, Blog, Possibility, Footer, Features, Zenom} from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Zenom />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App