import "./singlePost.css"
import {useEffect , useState} from "react";
import { useLocation  } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
  const location =  useLocation();
  const path = location.pathname.split("/")[2];
  // for finding id from => "/post/634efa3f36e9ce677730a0d9" we applied the above thing
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
    const res =await axios.get("/posts/" + path) 
    setPost(res.data)
    };
    getPost();
  }, [path])
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

        {post.photo && <img src={post.photo} alt="" className="singlePostImg"/>}

        <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor"> 
            Author :
             <Link className="link" to={`/?user=${post.username}`}>
             <b>{post.username}</b> 
             </Link></span>
            <span className="singlePostDate"> { new Date(post.createdAt).toDateString() } </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  )
}
