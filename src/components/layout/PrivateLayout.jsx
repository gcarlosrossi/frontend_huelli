import { Outlet, Navigate } from 'react-router-dom'
import Navbar from './NavBar'
import { useAuthStore } from '../../store/useAuthStore'
import MobileNavbar from './MobileNavBar';

export default function PrivateLayout() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/welcome" replace />
  }

  return (
    <div>
      <header className='hidden md:block sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm'>
        <Navbar />
      </header>

      <header className='md:hidden bg-white border-b sticky top-0 z-10 shadow-sm'>
        <MobileNavbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
