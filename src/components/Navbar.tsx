import { logo } from '../assets'
import {Link} from 'react-router-dom'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='flex items-center bg-[#b1dd40] mx-6 md:mx-9 rounded-lg text-[#111606] w-[73%] md:w-[90%] sm:w-[87%] mt-6 fixed top-0 z-[88888] px-5 py-2 justify-between'>
        <div className='flex items-start cursor-pointer'>
          <img src={logo} alt="logo" className='h-9 w-9 object-contain' />
        </div>
        <ul className='md:fle cursor-pointer items-center hidden space-x-5 font-Panchang-Semibold text-[9px]'>
            <Link to='/'>About</Link>
            <Link to='/'>Contacs</Link>
            <Link to='/'>Works</Link>
        </ul>
        <div className='bg-[#111606] h-12 w-12 flex items-center justify-center text-[#b1dd40] text-2xl rounded-full'>
       <HiOutlineMenuAlt4  />
       </div>
    </nav>
  )
}

export default Navbar