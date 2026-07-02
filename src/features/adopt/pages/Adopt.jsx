import AdoptCard from "../components/AdoptCard"
import AdoptFilters from "../components/AdoptFilters"
import AdoptHeader from "../components/AdoptHeader"

function Adopt() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='bg-gray-50 min-h-screen'>
        <AdoptHeader />

        <div className='px-4 md:px-6 py-6 max-w-6xl mx-auto'>
          <AdoptFilters />

          <div className='mb-4 flex items-center justify-between'>
            <p className='text-sm text-gray-600'>4 mascotas disponibles</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <AdoptCard />
            <AdoptCard />
            <AdoptCard />
            <AdoptCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adopt
