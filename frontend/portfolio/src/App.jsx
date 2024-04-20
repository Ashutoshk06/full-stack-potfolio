import { useState } from 'react'

import { About,Footer,Header,Skills,Works } from './container'

import Navbar from './components/navbar/Navbar'
import { images } from './constants'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Header/>
      <About/>
      <Works/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
