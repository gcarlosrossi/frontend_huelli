import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useAuthStore } from '../../../store/useAuthStore'
import { ArrowBack } from '@mui/icons-material'
import GoogleIcon from '@huelli/ui/shared/GoogleIcon'

function Login() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const fakeUser = {
      id: 1,
      name: "Juan",
      token: "abc123",
    };

    login(fakeUser);
    navigate("/");
  };

  const handleSignUp = () => {
    navigate('/signup');
  }

  const handleWelcome = () => {
    navigate('/welcome');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>¡Bienvenido de nuevo! 🐾</h2>
        <p className='text-gray-600 text-sm'>Inicia sesión para continuar</p>
      </div>

      <Button variant='outlined' startIcon={<GoogleIcon />} onClick={handleLogin}>
        Continuar con Google
      </Button>

      <div className='flex items-center gap-3'>
        <div className='flex-1 h-px bg-gray-300'></div>
        <span className='text-gray-500 text-sm'>o</span>
        <div className='flex-1 h-px bg-gray-300'></div>
      </div>

      <Button variant='contained' color='primary' onClick={handleSignUp}>
        Crear cuenta
      </Button>

      <Button variant='text' color='info' startIcon={<ArrowBack />} onClick={handleWelcome}>
        Volver al inicio
      </Button>
    </div>
  )
}

export default Login
