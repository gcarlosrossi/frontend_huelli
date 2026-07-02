export default function PetRegister() {
  return (
    <div className='bg-gradient-to-r from-[#2563EB] to-blue-600 rounded-2xl p-4 text-white text-center shadow-lg'>
      <div className='text-3xl mb-2'>🐕</div>
      <h3 className='text-sm font-bold mb-1'>¿Registraste a tu mascota?</h3>
      <p className='text-blue-100 text-xs mb-3'>Recibe alertas personalizadas</p>
      <a className='bg-white text-[#2563EB] px-4 py-2 rounded-xl font-bold inline-block hover:shadow-xl transition-shadow text-xs' href='/add-pet'>
        Registrar ahora
      </a>
    </div>
  )
}
