import '@s/App.css';

import react from "react"
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
 } from 'react-router-dom';

 import Register from '@c/register';
 import Homepage from '@c/homepage'
 import Footer from '@c/global/footer';
 import Navbar from '@c/global/navbar';
 import TempBlog from '@c/blog/tempblog';
 import CreateBlog from '@c/blog/create-blog';
 import MyBlogs from '@c/blog/my-blog';
 import BlogDisplay from '@c/blog/blogs';
 import Header from '@c/global/header';
 import LoginBox from '@c/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div><Header loggedIn={false} /><Homepage /></div>}></Route>
          <Route path="/Login"  element={<LoginBox/>} />
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/User/" element={
            <div>
              <Header loggedIn={true}/>
              <Navbar/>
              <Outlet/>
            </div>
          }>
            <Route path="Plans" />
            <Route path="Workout-Plans"/>
            <Route path="Meal-Plans"/>
            <Route path="Statistics" />
            <Route path="Home" />
            <Route path="Goals" />
            <Route path="Subscriptions" />
            <Route path="Blogs" element={<TempBlog/>} />
            <Route path="My-Blog" element={<MyBlogs/>} />
            <Route path="Create-Blog" element={<CreateBlog/>} />
            <Route path="Blog" element={<BlogDisplay/>} />
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


