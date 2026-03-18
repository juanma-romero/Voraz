import { MessageCircle, CheckCircle, MapPin, Clock, Phone } from 'react-feather';
import imagenPrin from './assets/premGeneral.jpg'
import conjunto from './assets/conjunto.jpg'
import premium from './assets/bocaditosArribaChica.jpg'
import eco from './assets/ecoGral.jpg'
import miniBurger from './assets/miniBurgerChica2.jpg'

export default function NuevoDisenoHome() {
  return (
    <main className="min-h-screen bg-[#111] text-white font-inter selection:bg-voraz-pink selection:text-white pb-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
        {/* Subtle background texture effect using CSS pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="relative inline-block mt-4">
              {/* Brush stroke effect using background color and skew */}
              <div className="absolute inset-0 bg-voraz-pink -skew-x-12 transform scale-110 shadow-lg shadow-voraz-pink/50 rounded-sm"></div>
              <h1 className="relative z-10 font-oswald text-5xl md:text-7xl font-black text-white px-2 py-1 uppercase tracking-widest leading-none">
                Bocaditos <br /> Deliciosos
              </h1>
            </div>
            <p className="font-inter text-xl md:text-2xl text-gray-300 max-w-xl font-medium">
              El sabor que une tus momentos. Perfectos para compartir con amigos, familiares o en tu próximo evento.
            </p>
            <div className="pt-6">
              <a
                href="https://wa.me/595985214420"
                className="inline-flex items-center gap-3 bg-voraz-pink text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold uppercase tracking-wide hover:bg-white hover:text-voraz-pink transition-all duration-300 shadow-[0_0_20px_rgba(217,38,233,0.4)] hover:shadow-[0_0_30px_rgba(217,38,233,0.6)]"
              >
                <MessageCircle size={24} />
                Pedir por WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            {/* The image container */}
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-voraz-pink/20">
              <img
                src={imagenPrin}
                alt="Nuestros Bocaditos"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background blur */}
            <div className="absolute top-10 -right-10 w-64 h-64 bg-voraz-pink/30 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-violeta/40 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Sabores y Precios (Best Sellers) */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Nuestros <span className="text-voraz-pink">"Mas Pedidos"</span>
            </h2>
            <p className="text-gray-400 font-inter text-lg">Los favoritos de nuestros clientes, elaborados con pasión.</p>
            <p className="inline-block mt-4 bg-white/10 px-6 py-2 rounded-full font-oswald tracking-widest text-voraz-pink">
              PRECIOS CADA 10 UNIDADES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mini Burger Card */}
            <div className="group bg-[#222] rounded-2xl overflow-hidden shadow-xl hover:shadow-voraz-pink/20 transition-all duration-300 border border-white/5 hover:border-voraz-pink/30">
              <div className="h-48 overflow-hidden relative">
                <img src={miniBurger} alt="Mini Burger" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-oswald text-2xl font-bold uppercase">Mini Burger</h3>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">25.000 Gs </span>
                </div>
                <p className="text-gray-400 text-sm font-inter">Deliciosa mini hamburguesa, la especialidad de la casa.</p>
              </div>
            </div>

            {/* Empanaditas Card */}
            <div className="group bg-[#222] rounded-2xl overflow-hidden shadow-xl hover:shadow-voraz-pink/20 transition-all duration-300 border border-white/5 hover:border-voraz-pink/30">
              <div className="h-48 overflow-hidden relative">
                <img src={conjunto} alt="Empanaditas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-oswald text-2xl font-bold uppercase">Empanaditas</h3>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">18.000 Gs</span>
                </div>
                <p className="text-gray-400 text-sm font-inter">De Pollo y de Jamon y Queso - Crujientes y elaboradas con ingredientes de calidad.</p>
              </div>
            </div>
            {/* Empanaditas Carne Card */}
            <div className="group bg-[#222] rounded-2xl overflow-hidden shadow-xl hover:shadow-voraz-pink/20 transition-all duration-300 border border-white/5 hover:border-voraz-pink/30">
              <div className="h-48 overflow-hidden relative">
                <img src={conjunto} alt="Empanaditas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-oswald text-2xl font-bold uppercase">Empanaditas de Carne</h3>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">22.000 Gs</span>
                </div>
                <p className="text-gray-400 text-sm font-inter">De Carne - Riquisimas</p>
              </div>
            </div>
            {/* Sandw Mila Card */}
            <div className="group bg-[#222] rounded-2xl overflow-hidden shadow-xl hover:shadow-voraz-pink/20 transition-all duration-300 border border-white/5 hover:border-voraz-pink/30">
              <div className="h-48 overflow-hidden relative bg-[#333] flex items-center justify-center">
                <span className="font-oswald text-6xl opacity-50">🥪</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-oswald text-2xl font-bold uppercase">Sandw. Mila Pollo</h3>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">25.000 Gs</span>
                </div>
                <p className="text-gray-400 text-sm font-inter">Una delicia clásica infaltable en tus eventos.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
            <h3 className="font-oswald text-2xl font-bold uppercase mb-6 text-center">Más Opciones Deliciosas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-inter text-lg">Canastitas</span>
                <span className="font-oswald text-voraz-pink">18.000 gs</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-inter text-lg">Croquetas</span>
                <span className="font-oswald text-voraz-pink">15.000 gs</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-inter text-lg">Pizzetas</span>
                <span className="font-oswald text-voraz-pink">12.000 gs</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-inter text-lg">Sandw. Miga JyQ</span>
                <span className="font-oswald text-voraz-pink">15.000 gs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Pasión */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violeta/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-8">
              Nuestra <span className="text-voraz-pink">Pasión</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-voraz-pink/20 p-3 rounded-full text-voraz-pink shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Ingredientes Frescos y de Primera Calidad</h3>
                  <p className="text-gray-400 font-inter">Utilizamos solo los mejores ingredientes para garantizar un sabor excepcional en cada bocado.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-voraz-pink/20 p-3 rounded-full text-voraz-pink shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Elaborados con Amor y Cuidado</h3>
                  <p className="text-gray-400 font-inter">Cada bocadito se crea con pasión y dedicación para ofrecerte la mejor experiencia culinaria.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-voraz-pink/20 p-3 rounded-full text-voraz-pink shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Opciones Personalizadas</h3>
                  <p className="text-gray-400 font-inter">¡Contáctanos para crear la selección perfecta para tu celebración o evento especial!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-voraz-pink to-violeta opacity-30 blur-2xl rounded-full"></div>
            <img src={conjunto} alt="Nuestra Pasión" className="relative z-10 w-full rounded-2xl shadow-2xl border-2 border-white/10" />
          </div>
        </div>
      </section>

      {/* Combos Especiales */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4">
              Combos <span className="text-voraz-pink">Especiales</span>
            </h2>
            <p className="text-gray-400 text-lg">Promociones ideales para que pruebes nuestra variedad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Combo Economico */}
            <div className="bg-gradient-to-b from-[#222] to-[#111] rounded-3xl p-8 border hover:border-voraz-pink/50 border-white/10 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-voraz-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="font-oswald text-3xl font-bold uppercase">Eco<span className="text-voraz-pink">nómico</span></h3>
                <span className="bg-white/10 px-4 py-1 rounded-full font-oswald text-sm">100 UNIDADES</span>
              </div>

              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <img src={eco} alt="Combo Economico" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="text-center mb-6">
                <span className="font-oswald text-5xl font-black text-white">145.000<span className="text-xl text-gray-400 font-normal">gs</span></span>
              </div>

              <ul className="space-y-3 font-inter text-gray-300 mb-8">
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Sandw Jamon y Queso</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Croquetas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Pizzetas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Empanaditas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Milanesas de Pollo</li>
              </ul>

              <a href="https://wa.me/595985214420?text=Hola,%20quiero%20pedir%20el%20Combo%20Económico" className="block w-full text-center bg-white/10 hover:bg-voraz-pink text-white font-oswald text-xl uppercase py-4 rounded-xl transition-colors">
                Pedir Combo
              </a>
            </div>

            {/* Combo Premium */}
            <div className="bg-gradient-to-b from-voraz-pink/10 to-[#111] rounded-3xl p-8 border border-voraz-pink/30 hover:border-voraz-pink transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-voraz-pink text-white font-oswald px-6 py-1 rounded-bl-xl text-sm font-bold tracking-wider">
                MÁS ELEGIDO
              </div>

              <div className="flex justify-between items-center mb-6 mt-2">
                <h3 className="font-oswald text-3xl font-bold uppercase text-voraz-pink">Premium</h3>
                <span className="bg-white/10 px-4 py-1 rounded-full font-oswald text-sm">100 UNIDADES</span>
              </div>

              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <img src={premium} alt="Combo Premium" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="text-center mb-6">
                <span className="font-oswald text-5xl font-black text-white">198.000<span className="text-xl text-gray-400 font-normal">gs</span></span>
              </div>

              <ul className="space-y-3 font-inter text-gray-300 mb-8">
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Sandw Milanesa de Pollo</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Canastitas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Pizzetas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Empanaditas</li>
                <li className="flex items-center gap-3"><span className="text-voraz-pink">►</span> 20 Mini Burger</li>
              </ul>

              <a href="https://wa.me/595985214420?text=Hola,%20quiero%20pedir%20el%20Combo%20Premium" className="block w-full text-center bg-voraz-pink hover:bg-white hover:text-voraz-pink text-white font-oswald text-xl uppercase py-4 rounded-xl transition-colors shadow-lg shadow-voraz-pink/20">
                Pedir Combo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos, Delivery y Horarios */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
            <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-voraz-pink">
              <Clock size={28} />
            </div>
            <h3 className="font-oswald text-2xl uppercase mb-4">Horarios</h3>
            <p className="text-gray-400 font-inter mb-4">
              Lunes a Sábado de <span className="text-white font-bold">7:00 a 19:00</span>.
            </p>
            <p className="text-gray-500 text-sm">
              Podés pedir en cualquier momento. Pedidos para el domingo con un día de anticipación.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
            <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-voraz-pink">
              <MapPin size={28} />
            </div>
            <h3 className="font-oswald text-2xl uppercase mb-4">Ubicación & Delivery</h3>
            <p className="text-gray-400 font-inter mb-2">
              Barrio Villa Fanny, Ciudad del Este.
            </p>
            <a href="https://maps.app.goo.gl/1KmjSXHz6rPAKvfH6" target="_blank" rel="noreferrer" className="text-voraz-pink hover:underline text-sm font-bold block mb-4">
              Ver en Google Maps →
            </a>
            <ul className="text-sm text-gray-500 space-y-2 border-t border-white/10 pt-4">
              <li>• Delivery hasta 5km: 20.000 gs</li>
              <li>• Delivery más de 5km: 25.000 gs</li>
              <li>• Más de 10km a coordinar.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-voraz-pink to-violeta p-8 rounded-2xl text-white transform hover:-translate-y-2 transition-transform shadow-xl shadow-voraz-pink/20">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h3 className="font-oswald text-3xl uppercase mb-4 leading-tight">¿Listo para hacer tu pedido?</h3>
            <p className="font-inter mb-6 opacity-90">
              Tenemos pedidos en el día (aprox. 1 hora), pero es mejor con anticipación.
            </p>
            <a href="https://wa.me/595985214420" className="inline-flex items-center gap-2 bg-white text-voraz-pink px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
              <MessageCircle size={20} />
              Enviar Mensaje
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}
