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

 import TempBlog from '@c/blog/tempblog';
 import CreateBlog from '@c/blog/create-blog';
 import MyBlogs from '@c/blog/my-blog';
 import BlogDisplay from '@c/blog/blogs';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<div><Header loggedIn={false} /><Homepage /></div>}></Route>

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
              <Outlet/>
            </div>
          }>
            <Route path="subscriptions" element={<Subscriptions></Subscriptions>}>
              <Route path="purchase"></Route>
            </Route>
            
            <Route path="my-settings"/>

            <Route path="my-plans"/>
            <Route path="my-workouts"/>
            <Route path="my-meal-plans"/>
            <Route path="my-statistics"/>
            <Route path="my-home"/>
            <Route path="my-goals"/>
            <Route path="my-blogs" element={<MyBlogs/>}/>

            <Route path="create-blog" element={<CreateBlog/>}/>

            <Route path="public">
                <Route path="blogs" element={<TempBlog/>}>
                    <Route path="blog" element={<BlogDisplay/>}/>
                </Route>
                <Route path="workouts">
                    <Route path="workout">
                      <Route path="workout-script"/>
                    </Route>
                </Route>
            </Route>

          </Route>
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


