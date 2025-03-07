
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Singup from './Pages/Singup'
import Products from './Pages/Products'
import Header from './assets/Header'
import PrivateComponent from './assets/PrivateComponent'
import Logout from './Pages/Logout'

function App() {

  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route element={<PrivateComponent/>}> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Products/>}/>
        </Route>
        <Route path='/Signup'element={<Singup/>}/>
        <Route path='/logout' element={<Logout/>}></Route>
        
      </Routes>
    </div>
    </>
  )
}

export default App
