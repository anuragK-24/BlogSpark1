import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img  className="writeImg"
       src="https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835__480.jpg" alt="" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              {/* to add the more than one class name we can do it by placing both into one " "  */}
              <i className="writeIcon  fa-solid fa-plus"></i>  
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea 
              placeholder="Tell your story..." 
              type="text" 
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
