
import reactLogo from './assets/logo100w.png' // buscar logo voraz en assets
import './App.css'

function App() {
  

  return (
    <>
      <header>
        <img src={reactLogo} alt="react logo" />
        <h2>header</h2>
        <ol>
          
        </ol>
      </header>
      <main>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </main>
      <footer>
        <p>Made by <a href='https://febo.digital'>Febo</a></p>
      </footer>
      
    </>
  )
}

export default App
