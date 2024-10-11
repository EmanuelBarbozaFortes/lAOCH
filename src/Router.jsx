import { Routes, Route} from 'react-router-dom'
import { Information } from './pages/Information'
import {Home } from './pages/Home'


export function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Information' element={<Information/>}/>
    </Routes>
  )
}