import './App.css'
import imagenPrin from './assets/premGeneral.jpg'
import whatsap from './assets/WhatsAppButtonGreenSmall.png'
import face from './assets/facebook_2504903.png'
import insta from './assets/instagram_2111463.png'
import tiktok from './assets/tik-tok_3046129.png'

function App() {
  

  return (
    <div className="flex flex-col ">
      <header  className="pt-4 flex justify-between">          
          <p className='font-gara text-3xl'>VORAZ</p>
          <a className='w-1/2' aria-label="Chat on WhatsApp" href="https://wa.me/595985214420">
            <img className='' alt="Chat on WhatsApp" src={whatsap} />
          </a>        
      </header>
      <main className="min-h-screen pt-6">
        <h1 className="text-3xl font-bold">
        Bocaditos Deliciosos
        </h1>
        <img className='pt-2' src={imagenPrin}/>
        <p className='text-2xl pt-4'>¿Antojo de algo delicioso e irresistible?</p>
        <p className='text-xl pt-4'>🫡 ¡En Voraz te tenemos cubierto!</p>
        <p className='pt-2'>Perfectas para compartir con amigos, familiares o compañeros de trabajo, nuestras creaciones son la excusa perfecta para disfrutar de un momento especial.</p>
        <p className='text-xl pt-4'>En Voraz, nos apasiona la calidad:</p>
        <ol className='pt-4'>
          <li><b>😋 Ingredientes frescos y de primera calidad:</b> Utilizamos solo los mejores ingredientes para garantizar un sabor excepcional.</li>
          <li><b>😋 Elaborados con amor y cuidado:</b> Cada bocadito se crea con pasión y dedicación para ofrecerte la mejor experiencia.</li>
          <li><b>😋 Opciones personalizadas:</b> ¡Contáctanos para crear el bocadito perfecto para tu evento o celebración!</li>
        </ol>
        <h2 className='text-2xl pt-4'>Sabores</h2>
        <p>Tenemos varios sabores para que elijas los que mas te gustan o probar alguno que nunca hayas saboreado</p>
          <ol>
            <li ><svg className='text-violeta size-6 inline' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Sandwich de Milanesa de Pollo
            </li>      

            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Empanaditas (de Carne , de Pollo o de Jamon y queso)
            </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Canastitas (de Napolitana, de Capresse, de Fugazzeta o de Choclo)
            </li>
            <li>
              Mini Burger
            </li>
            <li>
              Croquetas
            </li>
            <li>
              Pizzetas
            </li>
            <li>
              Sandwich de miga de Jamonn y Queso
            </li>

          </ol>
        <h2>Combos</h2>
          <p>Contamos con dos combos a precio promocional para que pruebes una variedad de nuestros productos</p>
            <ol>
              <li>Combo Economicos</li>
              <li>Combo Premium</li>
            </ol>
        <h2>Pedidos</h2>
          <p>Contamos con disponibilidad en el dia, aproximadamente una hora. Pero siempre es mejor hacer tu pedio con anticipacion para asegurarte la disponibilidad</p>
          <h3>Horarios</h3>
      </main>
      
      <footer className="justify-end">
        <div className='flex'>
          <a href='https://www.facebook.com/vorazcde/' target="_blank"><img className='w-1/2' src={face}/></a>
          <a href='https://www.instagram.com/vorazcde/' target="_blank"><img className='w-1/2' src={insta}/></a>
          <a href='https://www.tiktok.com/@vorazcde' target="_blank"><img className='w-1/2' src={tiktok}/></a>


        </div>
        <p className='flex justify-center pt-6'>Made by&nbsp;<a className='text-yellow-500' href='/'>Febo</a></p>
      </footer>
    </div>
  )
}

export default App
