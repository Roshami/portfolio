import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home'



function App() {

  return (
    <>
      <div className='h-screen flex bg-gray-800'>

        <Toaster position="top-right" />
        <div className='w-full h-full hidden sm:block'>
          <Home />
        </div>

        


      </div>
    </>
  )
}

export default App
