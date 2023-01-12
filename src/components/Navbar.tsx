import { logo } from '../assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center bg-[#111606] w-full fixed top-0 z-[88888] px-16 py-2 justify-between'>
        <div className='flex items-start cursor-pointer'>
          <img src={logo} alt="logo" className='h-9 w-9 object-contain' />
        </div>
        <ul className='flex cursor-pointer items-center hidde space-x-5 font-Panchang-Semibold text-[9px]'>
            <Link to='/'>About</Link>
            <Link to='/'>Contacs</Link>
            <Link to='/'>Works</Link>
        </ul>
    </nav>
  )
}

export default Navbar