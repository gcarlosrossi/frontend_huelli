import { MapPin, Search } from 'lucide-react'

export default function AdoptFilters() {
  return (
    <div className='bg-white rounded-2xl p-4 shadow-lg mb-4'>
      <div className='relative mb-4'>
        <Search size={20} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
        <input type="text" placeholder="Buscar por nombre, raza o albergue..." className='w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-[#10B981] focus:outline-none text-sm' />
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
          <label className='block text-xs font-semibold text-gray-700 mb-2'>Tipo de Animal</label>
          <select className='w-full px-3 py-2 bg-gray-50 rounded-lg border-2 border-transparent focus:border-[#10B981] focus:outline-none text-sm'>
            <option value="all">Todos</option>
            <option value="dog">🐕 Perros</option>
            <option value="cat">🐱 Gatos</option>
            <option value="other">🐾 Otros</option>
          </select>
        </div>
        
        <div>
          <label className='block text-xs font-semibold text-gray-700 mb-2'>Distrito</label>
          <select className='w-full px-3 py-2 bg-gray-50 rounded-lg border-2 border-transparent focus:border-[#10B981] focus:outline-none text-sm'>
            <option value="all">Todos los distritos</option>
            <option value="San Borja">San Borja</option>
            <option value="Miraflores">Miraflores</option>
            <option value="Surco">Surco</option>
            <option value="San Isidro">San Isidro</option>
          </select>
        </div>
        
        <div>
          <label className='block text-xs font-semibold text-gray-700 mb-2'>Ubicación</label>
          <button className='w-full px-3 py-2 rounded-lg text-sm font-semibold transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200'>
            <MapPin size={16} strokeWidth={2} className='inline mr-2' />
            Cerca de mí
          </button>
        </div>
      </div>
    </div>
  )
}
