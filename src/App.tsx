
import { Route, Routes } from 'react-router'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Layouts/Contact/Contact'
import HomePage from './Components/Layouts/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className='App'>
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
    </div>
    
    </>
  )
}

export default App
