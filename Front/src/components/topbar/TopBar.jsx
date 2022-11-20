import  './topbar.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context"

export default function TopBar() {  
  const { user, dispatch } = useContext(Context) ;

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }

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
                <li className='topListItem'><Link className='link' to="/Write" >Write</Link></li>
                <li  className='topListItem' onClick={handleLogout}>{user && "Logout"}</li>
            </ul>
            
        </div>
        <div className="topRight">
            
            { user ? (
                <Link to="/settings"> <img className='topImage' src={user.profilePic} alt="" /> </Link>
            ) : (<ul className="topList">
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
