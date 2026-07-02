import { NavLink } from 'react-router-dom'
import { Bell, Calendar, House, MessageCircle, Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-6 h-16'>
      <a className='transition-transform hover:scale-105' href='/' data-discover='true'>
        <div className='flex items-center gap-3'>
          <svg width='32' height='32' viewBox='0 0 64 64' fill='none' className='transition-transform hover:scale-110'>
            <circle cx='20' cy='16' r='6' fill='#2563EB' style={{ transform: 'scale(1.02494)', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></circle>
            <circle cx='32' cy='12' r='6' fill='#2563EB' style={{ transform: 'none', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></circle>
            <circle cx='44' cy='16' r='6' fill='#2563EB' style={{ transform: 'none', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></circle>
            <circle cx='52' cy='26' r='5' fill='#2563EB' style={{ transform: 'none', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></circle>
            <g>
              <path d='M32 28 C24 28, 18 34, 18 42 C18 50, 32 62, 32 62 C32 62, 46 50, 46 42 C46 34, 40 28, 32 28 Z' fill='#10B981' style={{ transform: 'translateY(-0.498882px)', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></path>
              <path d='M32 38 C30 36, 26 36, 26 40 C26 44, 32 48, 32 48 C32 48, 38 44, 38 40 C38 36, 34 36, 32 38 Z' fill='#FFFFFF' style={{ transform: 'scale(1.04875)', transformOrigin: '50% 50%', transformBox: 'fill-box' }}></path>
            </g>
          </svg>
          
          <span className='font-bold text-[#2563EB] tracking-wide text-xl'>HUELLI</span>
        </div>
      </a>
      
      <nav className='hidden lg:flex items-center gap-2'>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${ isActive ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-sm' : 'text-gray-600 hover:bg-gray-5' }`
          }
          to='/'
        >
          <House size={20} strokeWidth={2} />
          <span>Inicio</span>
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${ isActive ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-sm' : 'text-gray-600 hover:bg-gray-5' }`
          }
          to='/adopt'
        >
          <Search size={20} strokeWidth={2} />
          <span>Adopciones</span>
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${ isActive ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-sm' : 'text-gray-600 hover:bg-gray-5' }`
          }
          to='/report'
        >
          <Calendar size={20} strokeWidth={2} />
          <span>Reportar</span>
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${ isActive ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-sm' : 'text-gray-600 hover:bg-gray-5' }`
          }
          to='chat'
        >
          <MessageCircle size={20} strokeWidth={2} />
          <span>Chat</span>
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${ isActive ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-sm' : 'text-gray-600 hover:bg-gray-5' }`
          }
          to='/profile'
        >
          <User size={20} strokeWidth={2} />
          <span>Perfil</span>
        </NavLink>
      </nav>
      
      <div className='flex items-center gap-4'>
        <button className='relative p-2 rounded-lg hover:bg-gray-100 transition-colors'>
          <Bell size={24} strokeWidth={2} className='text-gray-600' />
          <span className='absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold'>
            3
          </span>
        </button>
        
        <button className='lg:hidden p-2 rounded-lg hover:bg-gray-100'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-menu text-gray-600'>
            <line x1='4' x2='20' y1='12' y2='12'></line>
            <line x1='4' x2='20' y1='6' y2='6'></line>
            <line x1='4' x2='20' y1='18' y2='18'></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
