import { MessageSquare, MessagesSquare } from "lucide-react";

export default function UpcomingBookings() {
  return (
    <div className='p-4 mb-4'>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='font-bold text-gray-900'>Próximas Reservas</h3>
        <a className='text-[#27AE60] text-sm font-bold hover:underline' href="/services">Reservar →</a>
      </div>
      
      <div className='space-y-3'>
        <div className='bg-white rounded-xl p-4 shadow-md'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h4 className='font-bold text-gray-900'>Grooming Premium</h4>
              <p className='text-sm text-gray-600'>Pet Spa Miraflores</p>
            </div>
            <span className='bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold'>✓ Confirmada</span>
          </div>
          <div className='flex items-center gap-4 text-sm text-gray-600 mb-2'>
            <span>🐕 Luna</span>
            <span>📅 25 Feb 2026</span>
            <span>🕐 10:00 AM</span>
          </div>
          <div className='flex items-center justify-between pt-2 border-t border-t-gray-200'>
            <p className='text-[#27AE60] font-bold'>S/ 80</p>
            <button className='flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900'>
              <MessageSquare size={16} strokeWidth={2} />
              Chat con proveedor
            </button>
          </div>
        </div>
        
        <div className='bg-white rounded-xl p-4 shadow-md'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h4 className='font-bold text-gray-900'>Consulta Veterinaria</h4>
              <p className='text-sm text-gray-600'>Veterinaria San Borja</p>
            </div>
            <span className='bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold'>✓ Confirmada</span>
          </div>
          <div className='flex items-center gap-4 text-sm text-gray-600 mb-2'>
            <span>🐕 Max</span>
            <span>📅 28 Feb 2026</span>
            <span>🕐 3:00 PM</span>
          </div>
          <div className='flex items-center justify-between pt-2 border-t border-t-gray-200'>
            <p className='text-[#27AE60] font-bold'>S/ 120</p>
            <button className='flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900'>
              <MessagesSquare size={16} strokeWidth={2} />
              Chat con proveedor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
