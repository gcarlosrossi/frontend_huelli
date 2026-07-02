import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useAuthStore } from '../../../store/useAuthStore'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Lock, Mail, MapPin, Phone, User } from 'lucide-react'

function SignUp() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()

    const fakeUser = {
      id: 1,
      name: "Juan",
      token: "abc123",
    }

    login(fakeUser)
    navigate("/")
  }

  const handleBack = () => {
    navigate('/login');
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Crear cuenta</h2>
        <p className='text-gray-600 text-sm'>Completa tus datos para comenzar</p>
      </div>

      <form className='flex flex-col gap-4' onSubmit={handleLogin}>
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Nombre completo *
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='Tu nombre completo'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <User size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Correo electrónico *
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='correo@ejemplo.com'
            type='email'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <Mail size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Contraseña *
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='Mínimo 6 caracteres'
            type='password'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <Lock size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Confirmar contraseña *
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='Repite tu contraseña'
            type='password'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <Lock size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Teléfono (opcional)
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='999 999 999'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <Phone size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Ciudad (opcional)
          </label>
          
          <TextField
            variant='outlined'
            className='w-full'
            placeholder='Lima, Perú'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start' className='w-6'>
                    <MapPin size={18} strokeWidth={2} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        
        <div className='flex flex-col gap-3 pt-2'>
          <Button variant='contained' color='primary' type='submit'>
            Crear mi cuenta
          </Button>

          <Button variant='contained' color='secondary' type='button' onClick={handleBack}>
            Volver
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
