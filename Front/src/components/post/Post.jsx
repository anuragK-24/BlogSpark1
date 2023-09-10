import './post.css'
import {Link} from "react-router-dom"
import { marked } from 'marked';

export default function Post({post}) {
  const PF = "https://blogapi-gpp7.onrender.com/images/"

  return (
    <>
      <div className="post">
        <Link to={`/post/${post._id}`}  className="link">
        { <img className='postImg' src={post.photo} alt="" />}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(
                <span className="postCats">{c.name}</span>
              ))}
            </div>
              <span className="postTitle">{post.title}</span>

            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                        {/* this line is used to display date in proper format  */}
        </div>
        <div className="postDesc"   dangerouslySetInnerHTML={{ __html: marked(post.desc) }} />
        {/* <p className="postDesc" >{post.desc}</p> */}
        </Link>
      </div>
    </>
  )
}
