import './write.css'

export default function Write() {

    return (
        <div className='write'>
            <form className='writeForm'>
                <img src="/images/pexels2.jpg" alt="" className="writeImg" />
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea className='writeInput writeText' type="text" placeholder='Tell your story...'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
