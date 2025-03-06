
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Singup from './Pages/Singup'
import Products from './Pages/Products'
import Header from './assets/Header'

function App() {

  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup'element={<Singup/>}/>
        <Route path='/Product' element={<Products/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
