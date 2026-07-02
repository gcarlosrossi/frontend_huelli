export default function ReportActions() {
  return (
    <div className='px-4 md:px-6 max-w-4xl mx-auto mb-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <a className='bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl font-bold text-center hover:shadow-2xl transition-shadow' href="/report-lost-pet">
          <div className='text-4xl mb-3'>😢</div>
          <div className='text-xl mb-2'>Reportar mascota perdida</div>
          <p className='text-sm text-white/80'>Mi mascota está perdida</p>
        </a>
        
        <a className='bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl font-bold text-center hover:shadow-2xl transition-shadow' href="/report-found">
          <div className='text-4xl mb-3'>🎉</div>
          <div className='text-xl mb-2'>Encontré una Mascota</div>
          <p className='text-sm text-white/80'>Reportar hallazgo</p>
        </a>
      </div>
    </div>
  )
}
