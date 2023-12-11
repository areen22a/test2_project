import React from 'react'

import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Trending from './component/Trending'
import Trailer from './component/Trailer'
import Music from './component/Music'
import Footer from './component/Footer'



function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Trending/>
      <Trailer/>
      <Music/>
      <Footer />
    </>

  )
}

export default App