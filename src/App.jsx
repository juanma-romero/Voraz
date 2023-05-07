
import reactLogo from './assets/logo100w.png' 
import './App.css'
import Carousel from './Carousel'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-between'>
        <img src={reactLogo} alt="react logo" />
        <h2>Menu</h2>        
      </header>
      <main className='flex-1'>
        <Carousel />
      </main>
      <footer>
        <p>Made by <a href='https://febo.digital'>Febo</a></p>
      </footer>
      
    </div>
  )
}

export default App
