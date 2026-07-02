export default function ConditionToggle() {
  return (
    <div className='px-4 md:px-6 max-w-4xl mx-auto mb-4'>
      <div className='bg-white rounded-xl p-3 shadow-md flex gap-2'>
        <button className='flex-1 py-2 rounded-lg text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 bg-[#2563EB] text-white'>Todas (4)</button>
        <button className='flex-1 py-2 rounded-lg text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 bg-red-600 text-white'>😢 Perdidas</button>
        <button className='flex-1 py-2 rounded-lg text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 bg-green-600 text-white'>🎉 Encontradas</button>
      </div>
    </div>
  )
}
