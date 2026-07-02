import { Settings, Star } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className='bg-gradient-to-r from-[#27AE60] to-emerald-600 p-6 text-white'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold'>Mi Perfil</h2>
        <button className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30'>
          <Settings size={24} strokeWidth={2} />
        </button>
      </div>
      
      <div className='flex items-center gap-4 mb-4'>
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&amp;h=200&amp;fit=crop" alt="Carlos González" className='w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg' />
        <div className='flex-1'>
          <h3 className='text-xl font-bold mb-1'>Carlos González</h3>
          <p className='text-green-100 text-sm mb-1'>📍 Miraflores, Lima</p>
          <div className='flex items-center gap-3 text-sm'>
            <span className='flex items-center gap-1'>
              <Star size={14} strokeWidth={2} className='fill-yellow-400 text-yellow-400' />
              4.9
            </span>
            <span>•</span>
            <span>12 reservas</span>
          </div>
        </div>
      </div>
      
      <p className='text-green-100 text-sm'>Miembro desde Enero 2024</p>
    </div>
  )
}
