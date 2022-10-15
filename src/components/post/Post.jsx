import './post.css'

export default function Post() {
  return (
    <>
      <div className="post">
        <img className='postImg' src="https://image.shutterstock.com/image-photo/photo-young-businessman-typing-on-260nw-1675115017.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <div className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quaerat! Veritatis, explicabo blanditiis voluptas aut non nesciunt itaque repellendus excepturi obcaecati laboriosam enim eius a doloremque alias vero ea rem.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam obcaecati hic eaque eveniet nam, odit, praesentium voluptatum esse sequi facilis iste in cum. Modi laboriosam minima perspiciatis dolorum at.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur illo reprehenderit, quae odit impedit doloribus molestias non eligendi delectus sapiente, alias expedita corporis obcaecati ex. Quisquam maxime in incidunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reprehenderit excepturi laboriosam quibusdam corporis perspiciatis ducimus eveniet veritatis error incidunt! Commodi sed quae qui animi non fuga ad excepturi doloribus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iure doloremque dolorum dicta sequi eveniet iusto ea harum, explicabo laudantium officia ipsa distinctio velit reiciendis quae voluptate consequuntur inventore at!
        </div>
      </div>
    </>
  )
}
