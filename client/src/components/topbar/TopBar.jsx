import './topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
    const user = false

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>

            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className='topRight'>
                {user ? (
                    <img className='topImg' src='/images/8239.jpg' alt=''/>
                    ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link' to="/login">LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className='link' to="/register">REGISTER</Link>
                        </li>
                    </ul>)
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
    </div>
  )
}
