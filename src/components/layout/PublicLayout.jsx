import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#2563EB] via-blue-500 to-indigo-600 flex flex-col relative overflow-hidden'>
      <div className='flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10'>
        <Outlet />
      </div>

      <div className='relative z-10 pb-6'>
        <div className='flex items-center justify-center gap-6 text-white/60 text-xs'>
          <a href="#" className='hover:text-white transition-colors'>Términos</a>
          <span>•</span>
          <a href="#" className='hover:text-white transition-colors'>Privacidad</a>
          <span>•</span>
          <a href="#" className='hover:text-white transition-colors'>Ayuda</a>
        </div>
      </div>
    </div>
  );
}
