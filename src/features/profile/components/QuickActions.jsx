export default function QuickActions() {
  return (
    <div className='px-4 mb-6'>
      <h3 className='font-bold text-gray-900 mb-3'>Acciones Rápidas</h3>
      <div className='grid grid-cols-2 gap-3'>
        <a className='bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-4 text-white shadow-lg' href="/report-lost-pet">
          <div className='text-3xl mb-2'>😢</div>
          <p className='font-bold text-sm'>Reportar perdida</p>
        </a>
        
        <a className='bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white shadow-lg' href="/report-found">
          <div className='text-3xl mb-2'>🎉</div>
          <p className='font-bold text-sm'>Encontré mascota</p>
        </a>
      </div>
    </div>
  )
}
