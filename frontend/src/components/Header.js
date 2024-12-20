import {FaSignInAlt} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>GoalSetter </Link>
        </div>
        <ul>
            <li><Link to='/login'><FaSignInAlt /> Login</Link></li>
            <li><Link to='/register'><FaUser /> Register</Link></li>
            {/* <li><Link to='/logout'><FaSignOutAlt /> Logout</Link></li>   */}
        </ul>
    </header>
  )
}

export default Header