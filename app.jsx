import '@s/global.css';

import react from "react"
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
 } from 'react-router-dom';

 import Header from '@c/global/header';
 import Breadcrumb from '@c/global/breadcrumb';
 import Footer from '@c/global/footer';

 import Homepage from '@c/homepage'
 import LoginPage from '@c/login';
 import RegisterPage from '@c/register';
 
 import Navbar from '@c/global/navbar';
 import ProfilePage from "@c/profile-page"

 import Subscriptions from "@c/subscriptions"

 import CreateBlog from '@c/blog/create-blog';
 import MyWorkouts from '@c/blog/my-blog';
 import MyBlogs from "@c/my-blog"
import PaymentPage from "@c/payment-page.jsx"

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={
          <div>
            <Header loggedIn={false}/>
            <Navbar></Navbar>
            <Homepage />
          </div>
        }>
        </Route>

          <Route path="/auth">
            <Route path="login"  element={<LoginPage/>}></Route>
            <Route path="register" element={<RegisterPage/>}></Route>
          </Route>

          <Route path="/user" element={
            <div>
              <Header loggedIn={true}/>
              <Breadcrumb/>
              <Navbar/>
              <ProfilePage/>
            </div>
          }/>
            

          <Route path="/user/create-blog" element={<><Header></Header> <Breadcrumb></Breadcrumb><CreateBlog/></>}/>

          <Route path="/user/subscriptions" element={<><Header></Header> <Breadcrumb></Breadcrumb><Subscriptions></Subscriptions></>}/>
          <Route path="/user/subscriptions/purchase" element={<><Header></Header> <Breadcrumb></Breadcrumb><PaymentPage/></>}/>
          <Route path="/user/my-blogs" element={<><Header></Header> <Breadcrumb></Breadcrumb><Navbar></Navbar><MyBlogs/></>}/>
          <Route path="/user/my-workouts" element={<><Header></Header> <Breadcrumb></Breadcrumb><Navbar></Navbar><MyWorkouts/></>}/>        
        </Routes>
        <Footer/>

      </Router>
    </div>
  );
}

ReactDOM.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById('root')
);


