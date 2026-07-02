import { Bookmark, Clock, Ellipsis, Heart, MapPin, MessageCircle, Share2 } from "lucide-react";

export default function FeedCard() {
  return (
    <div className='bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100'>
      <div className='p-3 md:p-4'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop' alt="María González" className='w-10 h-10 rounded-full object-cover border-2 border-blue-100' />
            <div>
              <div className='flex items-center gap-1.5'>
                <h3 className='font-bold text-gray-900 text-sm'>María González</h3>
                <div className='w-4 h-4 bg-[#2563EB] rounded-full flex items-center justify-center'>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="white">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                  </svg>
                </div>
              </div>
              
              <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                <MapPin size={12} strokeWidth={2} />
                <span>Miraflores</span>
                <span>•</span>
                <Clock size={12} strokeWidth={2} />
                <span>Hace 2 horas</span>
              </div>
            </div>
          </div>
          
          <button className='text-gray-400 hover:text-gray-600'>
            <Ellipsis size={18} strokeWidth={2} />
          </button>
        </div>
        
        <p className='text-gray-800 text-sm md:text-base mb-3 leading-relaxed'>
          ¡Max está de vuelta en casa! 🎉 Gracias a Huelli y su increíble sistema de matching, encontramos a Max en menos de 48 horas. La comunidad es maravillosa. #ReencuentroFeliz
        </p>
        
        <div className='flex gap-1.5 mb-3 flex-wrap'>
          <span className='px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
            🎉 Reencuentro
          </span>
          
          <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold'>
            #Reencuentro
          </span>
          
          <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold'>
            #Golden Retriever
          </span>
        </div>
      </div>
      
      <img src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&amp;h=600&amp;fit=crop" alt="Post" className='w-full max-h-96 md:max-h-[500px] object-cover' />
      
      <div className='p-3 md:p-4'>
        <div className='flex items-center justify-between mb-3 text-xs md:text-sm text-gray-600'>
          <span className='font-semibold'>247 me gusta</span>
          <div className='flex gap-2 md:gap-3'>
            <span>34 comentarios</span>
            <span>12 compartidos</span>
          </div>
        </div>
        
        <div className='flex items-center gap-1 md:gap-2 border-t border-t-gray-200 pt-3'>
          <button className='flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold transition-all text-gray-600 hover:bg-gray-50'>
            <Heart size={18} strokeWidth={2} />
            <span className='hidden md:inline'>Me gusta</span>
          </button>
          
          <button className='flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all'>
            <MessageCircle size={18} strokeWidth={2} />
            <span className='hidden md:inline'>Comentar</span>
          </button>
          
          <button className='flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all'>
            <Share2 size={18} strokeWidth={2} />
            <span className='hidden md:inline'>Compartir</span>
          </button>
          
          <button className='p-2 rounded-lg transition-all text-gray-600 hover:bg-gray-50'>
            <Bookmark size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}
