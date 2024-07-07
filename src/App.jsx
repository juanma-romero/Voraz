import './App.css'
import imagenPrin from './assets/premGeneral.jpg'
import whatsap from './assets/WhatsAppButtonGreenSmall.png'
import face from './assets/facebook_2504903.png'
import insta from './assets/instagram_2111463.png'
import tiktok from './assets/tik-tok_3046129.png'
import conjunto from './assets/conjunto.jpg'
import premium from './assets/bocaditosArribaChica.jpg'
import eco from './assets/ecoGral.jpg'
import { Routes, Route } from 'react-router-dom'  
import Politicas from './Politicas' 
import Cookies from './Cookies'
import Terminos from './Terminos'
import { useState } from 'react'
import Modal from './Modal'

export default function App() { 
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col ">
      <header  className="mt-4 flex justify-between">          
          <p className='font-gara text-3xl'><a href={'/'}>VORAZ</a></p>
          <a className='w-1/2 md:w-60' aria-label="Chat on WhatsApp" href="https://wa.me/595985214420">
            <img className='' alt="Chat on WhatsApp" src={whatsap} />
          </a>        
      </header>
      <Routes>
        <Route index path='/' element={<MainHome />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terminos" element={<Terminos />} />
        

      </Routes>
      <Modal />
      <footer className="justify-end mt-8">
        <p className='text-center md:text-xl'>Seguinos en las redes sociales!!</p>
        <div className='flex mt-8 ml-10 md:justify-around'>
          <a href='https://www.facebook.com/vorazcde/' target="_blank"><img className='w-1/2 md:w-20' src={face}/></a>
          <a href='https://www.instagram.com/vorazcde/' target="_blank"><img className='w-1/2 md:w-20' src={insta}/></a>
          <a href='https://www.tiktok.com/@vorazcde' target="_blank"><img className='w-1/2 md:w-20' src={tiktok}/></a>


        </div>
        <div className='flex flex-row'>
          <a target="_blank" href="/Politicas" className="text-verde hover:underline mt-5 ml-4">Políticas de privacidad</a>
          <a target="_blank" href="/Cookies" className="text-verde hover:underline mt-5 ml-4">Uso de cookies</a>
          <a target="_blank" href="/Terminos" className="text-verde hover:underline mt-5 ml-4">Terminos y condiciones</a>

        </div>
        <p className='flex justify-center pt-6'>Made by&nbsp;<a className='text-yellow-500' href='/'>Febo</a></p>
      </footer>
    </div>
  )
}

function MainHome() {
  return (
    <main className="min-h-screen mt-6">
        <h1 className="text-3xl font-bold md:text-5xl">Bocaditos Deliciosos</h1>
        <img className='mt-2 md:w-1/2 mx-auto' src={imagenPrin}/>
        <p className='text-2xl mt-8 md:text-4xl'>¿Antojo de algo delicioso e irresistible?</p>
        <p className='text-xl mt-4 md:text-3xl'>¡En Voraz te tenemos cubierto! 🫡 </p>
        <p className='pt-2 md:text-xl'>Perfectas para compartir con amigos, familiares o compañeros de trabajo, nuestras creaciones son la excusa perfecta para disfrutar de un momento especial.</p>
        <img className='mt-12 md:w-1/2 mx-auto' src={conjunto}/>
        <p className='text-xl pt-4 md:text-4xl'>En Voraz, nos apasiona la calidad:</p>
        
        <ol className='pt-4'>
          <li className='pt-2 md:text-xl'>😋&nbsp;&nbsp;<b>Ingredientes frescos y de primera calidad:</b> <p className='pl-4'>Utilizamos solo los mejores ingredientes para garantizar un sabor excepcional.</p></li>
          <li className='pt-2 md:text-xl'>😋&nbsp;&nbsp;<b>Elaborados con amor y cuidado:</b> <p className='pl-4'>Cada bocadito se crea con pasión y dedicación para ofrecerte la mejor experiencia.</p></li>
          <li className='pt-2 md:text-xl'>😋&nbsp;&nbsp;<b>Opciones personalizadas:</b> <p className='pl-4'>¡Contáctanos para crear el bocadito perfecto para tu evento o celebración!</p></li>
        </ol>
        <h2 className='text-2xl mt-10 md:text-4xl'>Sabores y Precios</h2>
        <p className='md:text-xl'>Tenemos varios sabores para que elijas los que mas te gustan o probar alguno que nunca hayas saboreado</p>
        <p className='text-xl mt-3 text-center text-violeta md:text-2xl'>PRECIOS <u>CADA 10 UNIDADES</u></p>
        <table className="mt-3 mx-auto md:mt-6 text-2xl">          
          <tbody>
            <tr>
              <td className="tg-0lax">Sandw. Mila de Pollo</td>
              <td className="tg-0lax pl-4">20 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Empanaditas</td>
              <td className="tg-0lax pl-4">15 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Canastitas</td>
              <td className="tg-0lax pl-4">15 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Mini Burger</td>
              <td className="tg-0lax pl-4">20 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Croquetas</td>
              <td className="tg-0lax pl-4">10 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Pizetas</td>
              <td className="tg-0lax pl-4">10 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Sandw miga JyQ</td>
              <td className="tg-0lax pl-4">10 000 gs</td>
            </tr>            
          </tbody>
          </table>
                    
        <h2 className='text-2xl mt-10 md:text-4xl'>Combos</h2>
          <p className='md:text-xl'>Contamos con dos combos a precio promocional para que pruebes una variedad de nuestros productos</p>
            <h3 className='text-center mt-4 text-xl underline md:text-3xl'>Combo Economico</h3>
            <img className='mt-6 md:mx-auto' src={eco}/>
            <p className='text-center text-violeta md:text-xl mt-4'>100 000 gs por 100 unidades</p>
            <ol className='text-center md:text-2xl mt-6'>
              <li>20 Sandw Jamon y Queso</li>
              <li>20 Croquetas</li>
              <li>20 Pizzetas</li>
              <li>20 Empanaditas</li>
              <li>20 Milanesas de Pollo</li>
            </ol>
            <h3 className='text-center text-xl underline md:text-3xl mt-10'>Combo Premium</h3>
            <img className='mt-6 md:mx-auto' src={premium}/>
            <p className='text-center text-violeta  md:text-xl mt-4'>130 000 gs por 100 unidades</p>
            <ol className='text-center md:text-2xl mt-6'>
              <li>20 Sandw Milanesa de Pollo</li>
              <li>20 Canastitas</li>
              <li>20 Pizzetas</li>
              <li>20 Empanaditas</li>
              <li>20 Mini Burger</li>
            </ol>            
        <h2 className='text-2xl mt-10 md:text-4xl'>Pedidos y Delivery</h2>
          <p className='mt-6 md:text-xl'>Contamos con disponibilidad de pedidos en el día, aproximadamente una hora. Pero siempre es mejor hacer tu pedio con anticipacion para asegurarte la disponibilidad</p>
          <p className='mt-6 md:text-xl'>Tenemos servicio de Delivery, tiene costo por distancia. Por ejemplo:</p>
          <p className='mt-2 md:text-xl'>*&nbsp;Hasta 5 km cuesta 20 000 gs</p>
          <p className='mt-2 md:text-xl'>*&nbsp;de 5 km hasta cuesta 25 000 gs</p>
          <p> por otras distancia consulte al contacto de Whatsapp</p>
        <h2 className='text-2xl mt-10 md:text-4xl'>Horarios</h2>
          <p className='mt-6 md:text-xl'>Estamos elaborando nuestros productos de Lunes a Sabado de 7:00 a 19:00. De todas formas podes hacer tu pedido en cualquier monento. Tambien tomamos pedidos para dias Domingo con pedido hecho con por lo menos un dia de anticipacion</p>
        <h2 className='text-2xl mt-10 md:text-4xl'>Ubicacion</h2>
        <p className='mt-6 md:text-xl'>Estamos en el barrio Villa Fanny de Ciudad del Este.</p>
        <a href='https://maps.app.goo.gl/1KmjSXHz6rPAKvfH6' target="_blank" className='mt-4 text-violeta md:text-xl'>Hace click para ver en Google Maps &#128506;</a>
      </main>
  )
} 