import './App.css'
import imagenPrin from './assets/premGeneral.jpg'
import whatsap from './assets/WhatsAppButtonGreenSmall.png'
import face from './assets/facebook_2504903.png'
import insta from './assets/instagram_2111463.png'
import tiktok from './assets/tik-tok_3046129.png'
import conjunto from './assets/conjunto.jpg'
import premium from './assets/bocaditosArribaChica.jpg'
import eco from './assets/ecoGral.jpg'
import { Routes, Route, Link } from 'react-router-dom'  
import Politicas from './Politicas' 
import Cookies from './Cookies'
import Terminos from './Terminos'
import NuevoDisenoHome from './NuevoDisenoHome'
import { useState } from 'react'
import Modal from './Modal'

import logoVoraz from './assets/pro/logo_hd.png'

export default function App() { 
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-white font-inter selection:bg-voraz-pink selection:text-white">
      <header className="py-3 px-4 sm:px-8 flex justify-between items-center bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 shadow-md">
          <Link to='/' className="flex items-center gap-3 group">
            <img src={logoVoraz} alt="Logo Voraz" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 group-hover:border-voraz-pink transition-colors" />
            <div>
              <p className='font-gara text-2xl sm:text-3xl tracking-widest text-white group-hover:text-voraz-pink transition-colors font-bold leading-none'>VORAZ</p>
              <span className='font-oswald text-[10px] sm:text-xs text-voraz-pink uppercase tracking-widest block leading-tight'>Bocaditos Deliciosos</span>
            </div>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 font-oswald uppercase text-xs tracking-wider text-gray-300">
              <a href="#combos" className="hover:text-voraz-pink transition-colors">Combos 100u</a>
              <a href="https://maps.app.goo.gl/1KmjSXHz6rPAKvfH6" target="_blank" rel="noreferrer" className="hover:text-voraz-pink transition-colors">Ubicación</a>
            </nav>
            
            <a 
              className='inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-transform hover:scale-105 shadow-md'
              aria-label="Pedir por WhatsApp" 
              href="https://wa.me/595985214420?text=Hola%20Voraz!%20Quiero%20hacer%20un%20pedido."
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              <span className="hidden sm:inline text-white/80 font-normal">0985 214 420</span>
            </a>        
          </div>
      </header>
      <Routes>
        <Route index path='/' element={<NuevoDisenoHome />} />
        <Route path="/diseno-anterior" element={<MainHome />} />
        
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
      <Modal />
      <footer className="mt-auto py-12 px-6 bg-[#080808] border-t border-white/5 text-center text-gray-400 font-inter">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center items-center gap-3">
            <img src={logoVoraz} alt="Voraz" className="w-10 h-10 rounded-full" />
            <span className="font-gara text-2xl tracking-widest text-white font-bold">VORAZ</span>
          </div>
          
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            📍 Barrio Santa Ana (a 300 mts del Hospital Regional de Ciudad del Este) · Alto Paraná, Paraguay.
          </p>
          
          <p className='text-xl font-oswald text-voraz-pink uppercase tracking-wider font-bold'>¡Seguinos en nuestras redes!</p>
          
          <div className='flex justify-center gap-6'>
            <a href='https://www.facebook.com/vorazcde/' title='Facebook' target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white/5 hover:bg-voraz-pink/20 p-3 rounded-2xl border border-white/5">
              <img className='w-8 h-8 object-contain' alt="Facebook" src={face}/>
            </a>
            <a href='https://www.instagram.com/vorazcde/' title='Instagram' target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white/5 hover:bg-voraz-pink/20 p-3 rounded-2xl border border-white/5">
              <img className='w-8 h-8 object-contain' alt="Instagram" src={insta}/>
            </a>
            <a href='https://www.tiktok.com/@vorazcde' title='TikTok' target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white/5 hover:bg-voraz-pink/20 p-3 rounded-2xl border border-white/5">
              <img className='w-8 h-8 object-contain' alt="TikTok" src={tiktok}/>
            </a>
          </div>
          
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400 pt-4 border-t border-white/5'>
            <Link to={'/politicas'} className="hover:text-voraz-pink transition-colors">Políticas de privacidad</Link>
            <span>•</span>
            <Link to={'/cookies'} className="hover:text-voraz-pink transition-colors">Uso de cookies</Link>
            <span>•</span>
            <Link to={'/terminos'} className="hover:text-voraz-pink transition-colors">Términos y condiciones</Link>
          </div>
          
          <p className='text-xs text-gray-400'>
            © {new Date().getFullYear()} Voraz. Elaboración artesanal de bocaditos en Ciudad del Este, Paraguay.
          </p>
        </div>
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
              <td className="tg-0lax pl-4">25 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Empanaditas</td>
              <td className="tg-0lax pl-4">18 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Canastitas</td>
              <td className="tg-0lax pl-4">18 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Mini Burger</td>
              <td className="tg-0lax pl-4">25 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Croquetas</td>
              <td className="tg-0lax pl-4">12 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Pizetas</td>
              <td className="tg-0lax pl-4">12 000 gs</td>
            </tr>
            <tr>
              <td className="tg-0lax">Sandw miga JyQ</td>
              <td className="tg-0lax pl-4">12 000 gs</td>
            </tr>            
          </tbody>
          </table>
                    
        <h2 className='text-2xl mt-10 md:text-4xl'>Combos</h2>
          <p className='md:text-xl'>Contamos con dos combos a precio promocional para que pruebes una variedad de nuestros productos</p>
            <h3 className='text-center mt-4 text-xl underline md:text-3xl'>Combo Economico</h3>
            <img className='mt-6 md:mx-auto' src={eco}/>
            <p className='text-center text-violeta md:text-xl mt-4'>120 000 gs por 100 unidades</p>
            <ol className='text-center md:text-2xl mt-6'>
              <li>20 Sandw Jamon y Queso</li>
              <li>20 Croquetas</li>
              <li>20 Pizzetas</li>
              <li>20 Empanaditas</li>
              <li>20 Milanesas de Pollo</li>
            </ol>
            <h3 className='text-center text-xl underline md:text-3xl mt-10'>Combo Premium</h3>
            <img className='mt-6 md:mx-auto' src={premium}/>
            <p className='text-center text-violeta  md:text-xl mt-4'>150 000 gs por 100 unidades</p>
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
