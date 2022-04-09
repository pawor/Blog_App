import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="/images/pexels1.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Pawornrat</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia fugiat ex officia? Ea facilis, quam veritatis illum alias reiciendis. 
          Earum eveniet neque dolores expedita nostrum dignissimos omnis atque. Soluta, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia fugiat ex officia? Ea facilis, quam veritatis illum alias reiciendis. 
          Earum eveniet neque dolores expedita nostrum dignissimos omnis atque. Soluta, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia fugiat ex officia? Ea facilis, quam veritatis illum alias reiciendis. 
          Earum eveniet neque dolores expedita nostrum dignissimos omnis atque. Soluta, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia fugiat ex officia? Ea facilis, quam veritatis illum alias reiciendis. 
          Earum eveniet neque dolores expedita nostrum dignissimos omnis atque. Soluta, ut.
        </p>
      </div>
    </div>
  )
}
