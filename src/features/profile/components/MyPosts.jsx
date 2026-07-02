export default function MyPosts() {
  return (
    <div className='p-4 mb-4'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-bold text-gray-900'>Mis Publicaciones</h3>
        <span className='text-sm text-gray-600'>2 activas</span>
      </div>
      
      <div className='grid grid-cols-3 gap-2'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='w-full aspect-square bg-gray-100 relative'>
            <img src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&amp;h=600&amp;fit=crop" alt="Luna" className='w-full h-full object-cover' />
            <div className='absolute top-1 right-1 text-xs px-2 py-0.5 rounded-full font-semibold bg-red-500 text-white'>😢</div>
          </div>
          
          <div className='p-2'>
            <h5 className='font-bold text-xs text-gray-900 truncate mb-1'>Luna</h5>
            <p className='text-xs text-gray-600 truncate mb-1'>📍 Miraflores, Lima</p>
            <div className='flex items-center justify-between text-xs text-gray-500 mb-2'>
              <span>👁️ 234</span>
              <span className='text-[#27AE60] font-semibold'>✨ 3</span>
            </div>
            <button className='w-full bg-[#27AE60] text-white py-1.5 rounded text-xs font-semibold hover:shadow-lg transition-all'>Ver Detalles</button>
          </div>
        </div>
        
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='w-full aspect-square bg-gray-100 relative'>
            <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&amp;h=600&amp;fit=crop" alt="Gato Naranja" className='w-full h-full object-cover' />
            <div className='absolute top-1 right-1 text-xs px-2 py-0.5 rounded-full font-semibold bg-green-500 text-white'>🎉</div>
          </div>
          
          <div className='p-2'>
            <h5 className='font-bold text-xs text-gray-900 truncate mb-1'>Gato Naranja</h5>
            <p className='text-xs text-gray-600 truncate mb-1'>📍 San Isidro, Lima</p>
            <div className='flex items-center justify-between text-xs text-gray-500 mb-2'>
              <span>👁️ 156</span>
              <span className='text-[#27AE60] font-semibold'>✨ 1</span>
            </div>
            <button className='w-full bg-[#27AE60] text-white py-1.5 rounded text-xs font-semibold hover:shadow-lg transition-all'>Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  )
}