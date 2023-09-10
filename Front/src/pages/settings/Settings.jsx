import "./settings.css"                                         
import Sidebar from "../../components/sidebar/Sidebar"
import { useState,useContext } from "react"
import { Context } from "../../context/Context"
import axios from "axios"


export default function Settings() {
  const [file, setFile] = useState(null) ;   

  const [username, setUsername] = useState("") ;   
  const [email, setEmail] = useState("") ;   
  const [password, setPassword] = useState("") ;  

  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://blogapi-gpp7.onrender.com/api/auth/login/upload", data);
      } catch (err) {}
    }
    try {
      await axios.put("https://blogapi-gpp7.onrender.com/api/auth/login/users/"+ user._id, updatedUser);
    } catch (err) {}
  };

  return (
    <div className="settings">
        setting
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle"><b> Update Your Account </b></span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form  className="settingsForm" onSubmit={handleSubmit}>
            <label >Profile Picture</label>
            <div className="settingsPP">
                <img src={user.profilePic} alt="" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input
                 type="file" 
                 id="fileInput" 
                 style={{display:"none"}} 
                  onChange={(e) => setFile(e.target.files[0])}  
                /> {/* by id fileInput when we click the icon the pop for selecting files shown */}
            </div>
            <label>Username</label>
            {/* by placeholder whatever we will write  in it initially it'll be shown that only  */}
            <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value) }/>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value) }/> 
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value) }/>
            <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
