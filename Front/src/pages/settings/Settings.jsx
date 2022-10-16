import "./settings.css"                                         
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        setting
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle"><b> Update Your Account </b></span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form  className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
                <img src="https://i.pinimg.com/736x/16/63/df/1663dfe649980212d09f417d06e39cc9.jpg" alt="" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} /> {/* by id fileInput when we click the icon the pop for selecting files shown */}
            </div>
            <label>Username</label>
            {/* by placeholder whatever we will write  in it initially it'll be shown that only  */}
            <input type="text" placeholder="Anurag" />
            <label>Email</label>
            <input type="email" placeholder="Anurag@gmail.com" /> 
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
