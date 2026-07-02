import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col'>
      <div className='bg-gradient-to-r from-[#2563EB] to-blue-600 text-white pt-12 pb-24 px-6 rounded-b-[40px] shadow-xl'>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg'>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="4" r="2"></circle>
              <circle cx="18" cy="8" r="2"></circle>
              <circle cx="20" cy="16" r="2"></circle>
              <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
            </svg>
          </div>
          <h1 className='text-3xl font-bold mb-2'>Huelli</h1>
          <p className='text-blue-100 text-center text-sm'>La red social para el bienestar de tus mascotas</p>
        </div>
      </div>

      <div className='flex-1 -mt-16 px-6 pb-8'>
        <div className='bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto'>
          <Outlet />
        </div>

        <div className='mt-6 text-center'>
          <p className='text-xs text-gray-500'>Huelli • Red Social para Mascotas</p>
          <p className='text-xs text-gray-400 mt-1'>Versión 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
