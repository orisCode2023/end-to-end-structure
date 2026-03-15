import { Link } from 'react-router'
import LogOut from './Logout'

function Navbar() {
  return (
    <div>
        <h1>Agent Report</h1>
        <LogOut />
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Navbar