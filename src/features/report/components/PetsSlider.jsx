import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

export default function PetsSlider() {
  return (
    <div className='px-4 md:px-6 mb-6 max-w-4xl mx-auto'>
      <div className='relative'>
        <div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4' style={{ borderColor: 'rgb(16, 185, 129)' }}>
          <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&amp;h=400&amp;fit=crop" alt="Gato Naranja" className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'></div>
          <div className='absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold flex items-center gap-2 bg-green-600'>✓ ENCONTRADA</div>
          <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2'>
            <MapPin size={16} strokeWidth={2} className='text-[#2563EB]' />
            <span className='font-bold text-gray-900 text-sm'>1.2 km</span>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-6'>
            <h2 className='text-white font-bold text-3xl mb-2'>Gato Naranja</h2>
            <p className='text-white/90 mb-2'>Gato común</p>
            <div className='flex items-center gap-4 mb-4 text-white/90 text-sm'>
              <span>📍 Miraflores</span>
              <span>⏰ Hace 1 día</span>
            </div>
            <div className='bg-yellow-500 text-gray-900 px-4 py-2 rounded-xl inline-flex items-center gap-2 font-bold mb-4'>💰 Recompensa: S/ 200</div>
            <a href="tel:+51 912 345 678" className='block bg-white text-[#2563EB] px-6 py-3 rounded-xl font-bold text-center hover:shadow-xl transition-all'>
              📞 Contactar Ahora
            </a>
          </div>
        </div>

        <button className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white'>
          <ChevronLeft size={24} strokeWidth={2} />
        </button>
        <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white'>
          <ChevronRight size={24} strokeWidth={2} />
        </button>
        
        <div className='flex justify-center gap-2 mt-4'>
          <button className='h-2 rounded-full transition-all bg-[#2563EB] w-8'>
          </button>
          <button className='h-2 rounded-full transition-all bg-gray-300 w-2'>
          </button>
        </div>
      </div>
    </div>
  )
}
