import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Pages/Home'
import { Products } from '../../Pages/Products'
import { ProductsInfo } from '../../Pages/ProductsInfo'
import { NewsDetails } from '../../Pages/NewsDetails'
import { Contact } from '../../Pages/Contact'
import { Login } from '../../Pages/Login'
import { LoggedIn } from '../../Pages/LoggedIn'

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/Products' element={<Products />}/>
        <Route path='/ProductsDetails' element={<ProductsInfo />}/>
        <Route path='/News' element={<NewsDetails />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/LoggedIn' element={<LoggedIn />}/>
    </Routes>
  )
}
