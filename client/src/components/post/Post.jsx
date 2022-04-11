import './post.css'

export default function Post({post}) {
  return (
    <div className='post'>
        <img className='postImg' src='/images/pexels.jpg' alt=''/>
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit amet 
            </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis dolorum ullam, 
            voluptates cumque aspernatur, sunt voluptatibus earum ex numquam aut temporibus laboriosam praesentium nesciunt 
            in cum tempora deleniti doloremque!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis dolorum ullam, 
            voluptates cumque aspernatur, sunt voluptatibus earum ex numquam aut temporibus laboriosam praesentium nesciunt 
            in cum tempora deleniti doloremque!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis dolorum ullam, 
            voluptates cumque aspernatur, sunt voluptatibus earum ex numquam aut temporibus laboriosam praesentium nesciunt 
            in cum tempora deleniti doloremque!
        </p>
    </div>
  )
}
