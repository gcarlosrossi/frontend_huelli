import { Bell, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

export default function MobileNavbar() {
  const { user } = useAuthStore()

  return (
    <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop" alt="Carlos González" className='w-10 h-10 rounded-full border-2 border-[#2563EB] object-cover' />
        
        <div>
          <h2 className='font-bold text-gray-900 text-sm'>Hola, {user?.name}</h2>
          <p className='text-xs text-gray-600 flex items-center gap-1'>
            <MapPin size={12} strokeWidth={2} className="" />
            Miraflores, Lima
          </p>
        </div>
      </div>
      
      <Link className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-xs font-bold hover:shadow-lg transition-all' to="/welcome">
        🎯 Demo
      </Link>
      
      <Link className='relative' to='/notification'>
        <Bell size={24} strokeWidth={2} className='text-gray-600' />
        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
          3
        </span>
      </Link>
    </div>
  )
}
