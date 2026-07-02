import { Plus } from "lucide-react";

export default function MyPets() {
  return (
    <div className='bg-white p-4 border-b border-b-gray-200'>
      <div className='flex items-center justify-between mb-3'>
        <div>
          <h3 className='font-bold text-gray-900'>Mis Mascotas</h3>
          <p className='text-sm text-gray-600'>3 mascotas registradas</p>
        </div>
        
        <a className='bg-[#27AE60] text-white p-2 rounded-full hover:shadow-lg transition-all' href="/add-pet">
          <Plus size={20} strokeWidth={2} />
        </a>
      </div>
      
      <div className='flex gap-3 overflow-x-auto pb-2 mb-4'>
        <button className='flex-shrink-0 flex flex-col items-center gap-2 opacity-60'>
          <div className='w-20 h-20 rounded-full border-4 overflow-hidden transition-all border-gray-300'>
            <img src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=200&amp;h=200&amp;fit=crop" alt="Luna" className='w-full h-full object-cover' />
          </div>
          <p className='text-sm font-semibold text-gray-600'>Luna</p>
        </button>
        
        <button className='flex-shrink-0 flex flex-col items-center gap-2 opacity-60'>
          <div className='w-20 h-20 rounded-full border-4 overflow-hidden transition-all border-gray-300'>
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&amp;h=200&amp;fit=crop" alt="Max" className='w-full h-full object-cover' />
          </div>
          <p className='text-sm font-semibold text-gray-600'>Max</p>
        </button>
        
        <button className='flex-shrink-0 flex flex-col items-center gap-2 opacity-60'>
          <div className='w-20 h-20 rounded-full border-4 overflow-hidden transition-all border-gray-300'>
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&amp;h=200&amp;fit=crop" alt="Mimi" className='w-full h-full object-cover' />
          </div>
          <p className='text-sm font-semibold text-gray-600'>Mimi</p>
        </button>
      </div>
    </div>
  )
}
