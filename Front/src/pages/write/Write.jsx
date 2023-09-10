import { useContext ,useState  } from "react"
import "./write.css"
import axios from "axios";
import { Context } from "../../context/Context";
import { redirect } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("") ;   
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      photo,
    };
    try {
      const res = await axios.post("https://blogapi-gpp7.onrender.com/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
      // above line is used to redirect the URL
    } catch (err) {}
  };

  return (
    <div className="write">
      { photo && photo.length===0 && (
      <img  className="writeImg"
         src={photo} alt="" />
      )}
      <form action="POST" className="writeForm"  onSubmit={handleSubmit}>
        <div className="writeFormGroup">          
          <input 
            type="text"
            placeholder="Image URL" 
            className="writeInput Url" 
            onChange={(e) => setPhoto(e.target.value)}
          />
          </div>          
          <div className="writeFormGroup">
          <input 
            type="text" 
            placeholder="Title" 
            className="writeInput" 
            autoFocus={true} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}
