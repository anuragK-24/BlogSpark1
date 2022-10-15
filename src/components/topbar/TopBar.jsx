import  './topbar.css'

export default function TopBar() {
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
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li  className='topListItem'>Logout</li>
            </ul>
            
        </div>
        <div className="topRight">
            <img className='topImage' src="https://www.bollywoodhungama.com/wp-content/uploads/2022/08/18850dc2-1d5b-45b5-b516-55a6d0ba60b6.jpg" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
