import { logo } from '../assets'

const Navbar = () => {
  return (
    <nav className='flex items-center bg-[#111606] w-full fixed top-0 z-[88888] px-16 py-2 justify-between'>
        <div className='flex items-start cursor-pointer'>
          <img src={logo} alt="logo" className='h-9 w-9 object-contain' />
        </div>
        <ul className='flex cursor-pointer items-center hidde space-x-5 font-Panchang-Semibold text-[14px]'>
            <li>Abouts</li>
            <li>Contacts</li>
            <li>Works</li>
        </ul>
    </nav>
  )
}

export default Navbar