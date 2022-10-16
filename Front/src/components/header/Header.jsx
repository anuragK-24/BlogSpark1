import './header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span   className="headerTitleSm">React & Node</span>
          <span   className="headerTitleLg">Blog</span>
        </div>
        <img 
          className="headerImg"   
          src="https://media.istockphoto.com/photos/typewriter-header-picture-id649544350?b=1&k=20&m=649544350&s=170667a&w=0&h=_0aibhXmpkh2J3VD6yQNypAA8HFJ6Lb3F7WQcW16xxE="
          alt="" 
        />
      </div>
    </>
  )
}
