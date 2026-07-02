import { Search } from 'lucide-react'

export default function ChatHeader() {
  return (
    <div className='bg-white p-4 md:p-6 border-b border-b-gray-200 sticky top-0 md:top-16 z-10'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Mensajes</h2>
        <div className='relative'>
          <Search size={20} strokeWidth={2} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <input type="text" placeholder="Buscar conversaciones..." className='w-full pl-10 pr-4 py-3 md:py-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB]' />
        </div>
      </div>
    </div>
  )
}
