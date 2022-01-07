import { Link } from "react-router-dom";

export default function TempBlogComp(){
    return(
        <div>
            <Link to="/User/My-Blog">My Blog</Link>
            <Link to="/User/Create-Blog">Create Blogs</Link>
            <Link to="/User/Blog">Blog</Link>
        </div>
    )
}