import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>} >
          <Route path='/about'element={<h1>About Page</h1>} />
          <Route path='/contact'element={<h1>Contact Page</h1>} />
          <Route path='/login'element={<h1>Login Page</h1>} />
          <Route path='/register'element={<h1>Register Here</h1>} />
          </Route>
          <Route path='/user'element={<h1>User DashBoard Page</h1>} >
          <Route path='cart'element={<h1>My Cart Page</h1>} />
          <Route path='order'element={<h1>My Order Page</h1>} />
          <Route path='profile'element={<h1>View Profile Page</h1>} />
          <Route path='logout'element={<h1>Logout Successfully </h1>} />
          </Route>
          <Route path='/admin'element={<h1>Admin DashBoard Page</h1>} >
          <Route path='additem'element={<h1>Add Item</h1>} />
          <Route path='viewitem 'element={<h1>View Item</h1>} />
          <Route path='adduser'element={<h1>Add User</h1>} />
          <Route path='viewuser'element={<h1>View User</h1>} />
          <Route path='logout'element={<h1>Logout Successfully </h1>} />
          </Route>
          <Route path='*'element={<h1>404 Error Page</h1>} />
       </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
