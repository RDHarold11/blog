import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


import Login from "./pages/Login"
import Register from "./pages/Register"
import SingleBlog from "./pages/SingleBlog"
import MyBlogs from './pages/MyBlogs'
import Write from './pages/Write'
import SharedLayout from './pages/SharedLayout'
import NotFound from './pages/NotFound'
import UserPosts from './pages/UserPosts'
import Posts from './pages/Posts';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='blog/:id' element={<SingleBlog></SingleBlog>}></Route>
          <Route path='category/:category'></Route>
          <Route path="myBlogs" element={<MyBlogs/>}></Route>
          <Route path="write" element={<Write/>}></Route>
          <Route path='userPost/:name' element={<UserPosts/>}></Route>
          <Route path='post' element={<Posts/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
