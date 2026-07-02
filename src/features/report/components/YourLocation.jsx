import { MapPin, Navigation } from "lucide-react";

export default function YourLocation() {
  return (
    <div className='px-4 md:px-6 py-4 max-w-4xl mx-auto'>
      <div className='bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-200'>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <MapPin size={20} strokeWidth={2} className='text-[#2563EB]' />
            <h3 className='font-bold text-gray-900'>Tu Ubicación</h3>
          </div>
          <button className='bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2'>
            <Navigation size={16} strokeWidth={2} />
            Activar GPS
          </button>
        </div>

        <p className='text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg'>⚠️ Activa la ubicación para ver mascotas perdidas cerca de ti</p>
        
        <div className='mt-3'>
          <label className='block text-xs font-semibold text-gray-700 mb-2'>Radio de búsqueda: 5 km</label>
          <input type="range" min="1" max="20" className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]' />
          <div className='flex justify-between text-xs text-gray-500 mt-1'>
            <span>1 km</span>
            <span>10 km</span>
            <span>20 km</span>
          </div>
        </div>
      </div>
    </div>
  )
}
