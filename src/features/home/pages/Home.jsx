import { Search } from 'lucide-react';
import FeedCard from '../components/FeedCard';
import HomeHeader from '../components/HomeHeader';
import HomeSidebar from '../components/HomeSidebar';

function Home() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='bg-gray-50 min-h-screen'>
        <HomeHeader />

        <div className='px-4 md:px-6 py-4'>
          <div className='max-w-xl mx-auto'>
            <div className='relative'>
              <Search size={20} strokeWidth={2} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
              <input type="text" placeholder="Buscar en Huelli..." className='w-full pl-12 pr-4 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-[#2563EB] focus:border-[#2563EB] focus:outline-none text-sm shadow-sm transition-colors' />
            </div>
          </div>
        </div>

        <div className='px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-8 space-y-6'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-900'>Feed de Comunidad</h2>
                  <p className='text-gray-600 text-xs md:text-sm'>Historias de nuestra familia Huelli</p>
                </div>
                
                <button className='bg-gradient-to-r from-[#2563EB] to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all'>
                  + Publicar
                </button>
              </div>

              <FeedCard />
              <FeedCard />
              <FeedCard />

              <div className='text-center'>
                <button className='text-[#2563EB] font-semibold hover:underline'>
                  Ver más publicaciones →
                </button>
              </div>
            </div>
          </div>

          <HomeSidebar />
        </div>
      </div>
    </div>
  )
}

export default Home
