import { CircleCheckBig } from 'lucide-react'

export default function ChatCard() {
  return (
    <a className='bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow' href="/chat/1">
      <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0'>
        AT
      </div>
    
      <div className='flex-1 min-w-0'>
        <div className='flex items-center gap-2 mb-1'>
          <h4 className='font-semibold truncate'>Ana Torres</h4>
          <CircleCheckBig size={16} strokeWidth={2} className='text-green-500 flex-shrink-0' />
          <span className='bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold'>92% match</span>
        </div>
        <p className='text-sm text-gray-600 truncate'>Podemos coordinar mañana en la clínica...</p>
      </div>

      <div className='flex flex-col items-end gap-1 flex-shrink-0'>
        <span className='text-xs text-gray-500'>10:30 AM</span>
        <div className='bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>2</div>
      </div>
    </a>
  )
}
