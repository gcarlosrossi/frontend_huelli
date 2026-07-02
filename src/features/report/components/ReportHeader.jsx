export default function ReportHeader() {
  return (
    <div className='bg-gradient-to-r from-[#2563EB] to-blue-600 text-white p-4 md:p-6 sticky top-0 md:top-16 z-20'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl md:text-3xl font-bold mb-2'>📢 Reportar</h1>
        <p className='text-blue-100 text-sm md:text-base'>
          Reporta mascotas perdidas o encontradas en tu zona
        </p>
      </div>
    </div>
  )
}
