

// import './App.css'

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import AllBlogs from "./pages/AllBlogs/AllBlogs"
import BlogInfo from "./pages/BlogInfo/BlogInfo"
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin"
import Dashboard from "./pages/Admin/Dashboard/Dashboard"
import NoPage from "./pages/NoPage/NoPage"
import ForgotPassword from "./pages/Admin/AdminLogin/ForgotPassword"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/allblogs" element={<AllBlogs />}/>
           <Route path="/bloginfo/:id" element={<BlogInfo />}/>
            <Route path="/adminlogin" element={<AdminLogin />}/>
             <Route path="/dashboard" element={<Dashboard />}/>
             <Route path="/forgotPassword" element={<ForgotPassword/>}/>
             <Route path="/*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
