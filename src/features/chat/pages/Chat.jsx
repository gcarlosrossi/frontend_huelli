import ChatCard from '../components/ChatCard'
import ChatHeader from '../components/ChatHeader'

function Chat() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='bg-gray-50 min-h-screen'>
        <ChatHeader />

        <div className='p-4 md:p-6 space-y-2 max-w-4xl mx-auto'>
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </div>
  )
}

export default Chat
