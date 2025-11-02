import { Link } from "react-router-dom";


export function Header(){

    return <div>
          <div className="menu-list d-flex m-2">
            <nav className= "">
                <Link to={"/home"} className = "px-2">Home</Link>
                <Link to={"/about"} className = "px-2">about</Link>
                <Link to={"/blog"}   className = "px-2">Blogs</Link>
                <Link to={"/contact"} className = "px-2">Contact</Link>
            </nav>





          </div>
    </div>
}