import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import './sidebar.css'

export default function Sidebar() {
  const [cats, setCats] = useState([]);  
  // ([])  represents that the initial state is null 
  useEffect(()=>{
  const getCats = async ()=> {
    const res = await axios.get("https://blogapi-gpp7.onrender.com/api/categories")
    setCats(res.data)
  }
  getCats()
  },[]) // after ',' we assigned empty cz we want to fire whenever it get called 
  return (
  <>
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='img' src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia similique nisi id soluta deleniti rerum sequi debitis ad atque? Quia architecto assumenda voluptate consequatur autem voluptas culpa saepe ducimus eos.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">

          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}

        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  </>
  )
}
