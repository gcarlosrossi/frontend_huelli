import MyPets from "../components/MyPets"
import MyPosts from "../components/MyPosts"
import ProfileHeader from "../components/ProfileHeader"
import QuickActions from "../components/QuickActions"
import SuccessfulReunions from "../components/SuccessfulReunions"
import UpcomingBookings from "../components/UpcomingBookings"

function Profile() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='bg-gray-50 min-h-screen pb-20'>
        <ProfileHeader />

        <div className='bg-gradient-to-r from-purple-600 to-pink-600 p-4 mb-4'>
          <a className='block bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-xl font-bold text-center shadow-lg hover:bg-white/30 transition-all border-2 border-white/30' href="/pet-hogar-presentation">
            🎯 Ver Presentación Ejecutiva Huelli
          </a>
        </div>

        <MyPets />

        <MyPosts />

        <UpcomingBookings />

        <SuccessfulReunions />

        <QuickActions />
      </div>
    </div>
  )
}

export default Profile
