import './sidebar.css'

export default function Sidebar() {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">News</li>
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
