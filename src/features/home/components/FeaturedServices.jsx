import Link from '@mui/material/Link';

export default function FeaturedServices() {
  return (
    <div className='bg-white rounded-2xl p-4 shadow-lg border border-gray-100'>
      <h3 className='font-bold text-gray-900 mb-3 flex items-center justify-between'>
        <span className='flex items-center gap-2'>
          <span className='text-xl'>📢</span>
          <span className='text-sm'>Servicios Destacados</span>
        </span>
        <Link className='text-[#2563EB] text-xs font-semibold hover:underline' to='/services'>Ver todos</Link>
      </h3>
      
      <div className='space-y-2'>
        <a className='block bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition-colors border border-gray-200' href='/service/veterinaria'>
          <div className='flex items-center gap-3'>
            <div className='text-3xl'>🏥</div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-bold text-sm text-gray-900'>Veterinaria</h4>
              <p className='text-xs text-gray-600 truncate'>24 proveedores</p>
              <p className='text-xs font-semibold text-[#2563EB]'>Desde S/ 80</p>
            </div>
          </div>
        </a>
        
        <a className='block bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition-colors border border-gray-200' href='/service/grooming'>
          <div className='flex items-center gap-3'>
            <div className='text-3xl'>✂️</div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-bold text-sm text-gray-900'>Grooming</h4>
              <p className='text-xs text-gray-600 truncate'>18 proveedores</p>
              <p className='text-xs font-semibold text-[#2563EB]'>Desde S/ 45</p>
            </div>
          </div>
        </a>
        
        <a className='block bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition-colors border border-gray-200' href='/service/guardería'>
          <div className='flex items-center gap-3'>
            <div className='text-3xl'>🏨</div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-bold text-sm text-gray-900'>Guardería</h4>
              <p className='text-xs text-gray-600 truncate'>12 proveedores</p>
              <p className='text-xs font-semibold text-[#2563EB]'>Desde S/ 60</p>
            </div>
          </div>
        </a>
      </div>
      
      <a className='block mt-3 bg-gradient-to-r from-[#2563EB] to-blue-600 text-white py-2.5 rounded-xl font-bold text-center text-sm shadow-lg hover:shadow-xl transition-all' href='/services'>
        Explorar Servicios
      </a>
    </div>
  )
}
