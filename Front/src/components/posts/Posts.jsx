import  './posts.css'
import Post from '../post/Post'

export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.length===0 &&  <h1 className='text'>No Blog bound</h1>}
      {posts.map( (p) =>( 
          <Post post={p}/>
      ))}
    </div>
  )
}
