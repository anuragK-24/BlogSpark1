import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://media.istockphoto.com/photos/isolated-yellow-note-picture-id144324690?b=1&k=20&m=144324690&s=612x612&w=0&h=I6Y1NAgSNA3l6b7Dv5O90Pwk7RSAru-MZXKG9IFOc-U=" alt="" className="singlePostImg"/>
        <h1 className="singlePostTitle">
            First Blog 
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor"> Author : <b>Anurag Kumar</b> </span>
            <span className="singlePostDate"> 1 hour ago </span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate ea blanditiis architecto eos id animi aut non, eligendi asperiores exercitationem ipsam, libero praesentium impedit porro ab consequuntur quaerat fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima veniam maiores! Odio consectetur, quia odit similique, nemo ipsa minus vitae officia quam mollitia at inventore voluptatibus accusamus temporibus nihil.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non saepe illum porro eligendi a voluptas, eos doloribus aperiam omnis dolorem id commodi voluptatibus perferendis explicabo! Adipisci itaque reiciendis debitis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente eius suscipit nam aliquid quod provident beatae, non sint deleniti totam adipisci! A assumenda explicabo, quaerat minus totam iure quis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum quos inventore architecto tempora! Cupiditate sequi sunt molestias porro aliquid sapiente aperiam neque inventore magnam consequuntur, necessitatibus, laborum autem voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptatem reiciendis? A soluta maxime nulla dicta enim, blanditiis dolorem sed dolor voluptas voluptate veniam qui illo vitae totam assumenda!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cum minima perspiciatis expedita delectus adipisci suscipit saepe molestiae fugiat tempore neque reprehenderit debitis explicabo amet illum in doloribus eveniet voluptatum?

        </p>
      </div>
    </div>
  )
}
