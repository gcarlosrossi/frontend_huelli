import { Heart, MapPin } from "lucide-react";

export default function AdoptCard() {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group'>
      <div className='relative aspect-square overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&amp;h=400&amp;fit=crop" alt="Toby" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' />
        <div className='absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-blue-600 text-white'>♂</div>
      </div>
      <div className='p-4'>
        <h3 className='font-bold text-lg text-gray-900 mb-1'>Toby</h3>
        <p className='text-sm text-gray-600 mb-2'>Mestizo • 2 años</p>
        <div className='flex items-start gap-2 mb-3'>
          <MapPin size={14} strokeWidth={2} className='text-[#10B981] flex-shrink-0 mt-0.5' />
          <div className='min-w-0'>
            <p className='text-xs font-semibold text-gray-700'>Refugio Esperanza Animal</p>
            <p className='text-xs text-gray-500'>San Borja</p>
          </div>
        </div>
        <div className='flex gap-2 mb-3'>
          <span className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold'>✓ Vacunado</span>
          <span className='bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold'>✓ Esterilizado</span>
        </div>
        <button className='w-full bg-gradient-to-r from-[#10B981] to-emerald-600 text-white py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2'>
          <Heart size={16} strokeWidth={2} />
          Quiero Adoptar
        </button>
      </div>
    </div>
  )
}
