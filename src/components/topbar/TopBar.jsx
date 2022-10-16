import  './topbar.css'
import { Link } from 'react-router-dom';
export default function TopBar() {
  const user = false;
  return (
    <div class="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCentre">
            <ul className='topList'>
                <li className='topListItem'><Link className='link' to="/" >Home</Link></li>
                <li className='topListItem'><Link className='link' to="/" >About</Link></li>
                <li className='topListItem'><Link className='link' to="/" >Contact</Link></li>
                <li className='topListItem'><Link className='link' to="/" >Write</Link></li>
                <li  className='topListItem'>{user && "Logout"}</li>
            </ul>
            
        </div>
        <div className="topRight">
            {
                user ? <img className='topImage' src="https://www.bollywoodhungama.com/wp-content/uploads/2022/08/18850dc2-1d5b-45b5-b516-55a6d0ba60b6.jpg" alt="" /> : 
                (<ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/login">Login</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/register">Register</Link>
                    </li>
                 </ul>)
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
