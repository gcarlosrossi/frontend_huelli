import Button from "@mui/material/Button";
import { MapPin } from "lucide-react";
import { useAuthStore } from "../../../store/useAuthStore";

export default function HomeHeader() {
  const { user } = useAuthStore()

  return (
    <div className='hidden md:block bg-gradient-to-r from-[#2563EB] to-blue-600 text-white px-6 py-8'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>Hola, {user?.name} 👋</h1>
          <p className='text-blue-100 flex items-center gap-2'>
            <MapPin size={16} strokeWidth={2} />
            Miraflores, Lima
          </p>
        </div>
        
        <div className='flex gap-3'>
          <Button variant='contained' color='secondary'>
            🎯 Presentación
          </Button>

          <Button variant='outlined' color='secondary'>
            🎨 Colores
          </Button>
        </div>
      </div>
    </div>
  )
}