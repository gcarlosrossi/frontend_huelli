export default function FindingPetsCard() {
  return (
    <div className='bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-2xl p-4 shadow-lg sticky top-20'>
      <div className='text-center mb-4'>
        <h3 className='font-bold text-gray-900 text-lg flex items-center justify-center gap-2 mb-1'>
          <span className='text-2xl'>💚</span>
          <span>Reuniendo Familias</span>
        </h3>
        
        <p className='text-sm text-gray-600'>Gracias a nuestra comunidad Huelli</p>
      </div>
      
      <div className='grid grid-cols-3 gap-4 mb-4'>
        <div className='bg-white rounded-xl p-4 shadow-md text-center'>
          <div className='bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2'>
            <span className='text-2xl'>🎉</span>
          </div>
          <p className='text-3xl font-bold text-green-600 mb-1'>127</p>
          <p className='text-xs text-gray-600 font-semibold'>Reencuentros</p>
        </div>
        
        <div className='bg-white rounded-xl p-4 shadow-md text-center'>
          <div className='bg-emerald-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2'>
            <span className='text-2xl'>⚡</span>
          </div>
          <p className='text-3xl font-bold text-emerald-600 mb-1'>92%</p>
          <p className='text-xs text-gray-600 font-semibold'>Éxito en 7 días</p>
        </div>
        
        <div className='bg-white rounded-xl p-4 shadow-md text-center'>
          <div className='bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2'>
            <span className='text-2xl'>📅</span>
          </div>
          <p className='text-3xl font-bold text-teal-600 mb-1'>3.2</p>
          <p className='text-xs text-gray-600 font-semibold'>Días promedio</p>
        </div>
      </div>
      
      <a className='block bg-gradient-to-r from-green-600 to-emerald-600 !text-white py-2.5 rounded-xl font-bold text-center text-sm shadow-lg hover:shadow-xl transition-all' href='/success-stories'>
        Ver Historias →
      </a>
    </div>
  )
}
