import Button from '@mui/material/Button'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <>
      <div className='mb-8'>
        <div className='bg-white rounded-3xl p-8 shadow-2xl'>
          <div className='flex items-center gap-3 '>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className='transition-transform hover:scale-110'>
              <circle cx="20" cy="16" r="6" fill="#2563EB" style={{transform: 'scale(1.08489)', transformOrigin: '50% 50%', transformBox: 'fill-box'}}></circle>
              <circle cx="32" cy="12" r="6" fill="#2563EB" style={{transform: 'scale(1.06555)', transformOrigin: '50% 50%', transformBox: 'fill-box'}}></circle>
              <circle cx="44" cy="16" r="6" fill="#2563EB" style={{transform: 'scale(1.04093)', transformOrigin: '50% 50%', transformBox: 'fill-box'}}></circle>
              <circle cx="52" cy="26" r="5" fill="#2563EB" style={{transform: 'scale(1.01189)', transformOrigin: '50% 50%', transformBox: 'fill-box'}}></circle>
              <g>
                <path d="M32 28 C24 28, 18 34, 18 42 C18 50, 32 62, 32 62 C32 62, 46 50, 46 42 C46 34, 40 28, 32 28 Z" fill="#10B981" style={{transform: 'translateY(-1.69787px)', transformOrigin: '50% 50%', 'transformBox': 'fill-box'}}></path>
                <path d="M32 38 C30 36, 26 36, 26 40 C26 44, 32 48, 32 48 C32 48, 38 44, 38 40 C38 36, 34 36, 32 38 Z" fill="#FFFFFF" style={{transform: 'scale(1.14732)', transformOrigin: '50% 50%', transformBox: 'fill-box'}}></path>
              </g>
            </svg>
            <span className='font-bold text-[#2563EB] tracking-wide text-4xl'>HUELLI</span>
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='h-1 w-32 bg-white/40 rounded-full mx-auto mb-4'></div>
        <p className='text-white text-xl font-semibold text-center'>Cada huella vuelve a casa</p>
        <div className='h-1 w-32 bg-white/40 rounded-full mx-auto mt-4'></div>
      </div>

      <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl max-w-md'>
        <p className='text-white text-center text-2xl font-bold leading-relaxed'>"Reencuentra, protege y cuida a tu mascota en un solo lugar."</p>
      </div>

      <div className='grid grid-cols-3 gap-4 mb-12 max-w-md w-full'>
        <div className='text-center'>
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-2'>
            <span className='text-4xl'>🔍</span>
          </div>
          <p className='text-white text-xs font-semibold'>Encuentra<br></br>perdidas</p>
        </div>
        
        <div className='text-center'>
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-2'>
            <span className='text-4xl'>🏥</span>
          </div>
          <p className='text-white text-xs font-semibold'>Servicios<br></br>completos</p>
        </div>
        
        <div className='text-center'>
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-2'>
            <span className='text-4xl'>❤️</span>
          </div>
          <p className='text-white text-xs font-semibold'>Comunidad<br></br>activa</p>
        </div>
      </div>

      <div className='w-full max-w-md flex flex-col gap-4'>
        <Button variant='contained' color='secondary' className='py-4' endIcon={<ArrowForward />} onClick={handleSignUp}>
          Crear cuenta
        </Button>

        <Button variant='outlined' color='secondary' onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </div>

      <button className='mt-8 text-white/80 text-sm font-semibold hover:text-white transition-colors underline decoration-white/40 hover:decoration-white'>
        Explorar sin cuenta
      </button>

      <p className='mt-8 text-white/60 text-xs'>Huelli • Cada huella vuelve a casa</p>
    </>
  )
}

export default Welcome
