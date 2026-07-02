import { Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateLayout from './components/layout/PrivateLayout'
import PublicLayout from './components/layout/PublicLayout'
import Login from './features/auth/pages/Login'
import Home from './features/home/pages/Home'
import Adopt from './features/adopt/pages/Adopt'
import Report from './features/report/pages/Report'
import Chat from './features/chat/pages/Chat'
import Profile from './features/profile/pages/Profile'
import Welcome from './features/welcome/pages/Welcome'
import SignUp from './features/auth/pages/SignUp'
import AuthLayout from './components/layout/AuthLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/welcome" element={<Welcome />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/report" element={<Report />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
