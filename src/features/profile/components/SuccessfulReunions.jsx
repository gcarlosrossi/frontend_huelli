import { MessageSquare } from "lucide-react";

export default function SuccessfulReunions() {
  return (
    <div className='p-4 mb-4'>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='font-bold text-gray-900'>Reencuentros Exitosos</h3>
        <a className='text-[#27AE60] text-sm font-bold hover:underline' href="/reunions">Ver todos →</a>
      </div>
      
      <div className='space-y-3'>
        <div className='bg-white rounded-xl p-4 shadow-md'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h4 className='font-bold text-gray-900'>Luna</h4>
              <p className='text-sm text-gray-600'>Golden Retriever</p>
            </div>
            <span className='bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold'>✓ Reencontrado</span>
          </div>
          <div className='flex items-center gap-4 text-sm text-gray-600 mb-2'>
            <span>📅 12 Feb 2026</span>
            <span>📍 Miraflores</span>
          </div>
          <div className='flex items-center justify-between pt-2 border-t border-t-gray-200'>
            <p className='text-[#27AE60] font-bold'>��� 94%</p>
            <button className='flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900'>
              <MessageSquare size={16} strokeWidth={2} />
              Ver testimonio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
