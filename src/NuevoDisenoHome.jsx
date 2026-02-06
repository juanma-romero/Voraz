import imagenPrin from './assets/premGeneral.jpg'
import whatsap from './assets/WhatsAppButtonGreenSmall.png'
import conjunto from './assets/conjunto.jpg'
import premium from './assets/bocaditosArribaChica.jpg'
import eco from './assets/ecoGral.jpg'
import miniBurger from './assets/miniBurgerChica2.jpg'

export default function NuevoDisenoHome() {
  return (
    <main className="min-h-screen bg-black text-white mt-6">
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-gara text-6xl md:text-8xl mb-6 text-white">
            VORAZ
          </h1>
          <p className="text-2xl md:text-4xl mb-4 text-neon-pink font-bold">
            El Sabor que Une Tus Momentos
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Bocaditos deliciosos e irresistibles, perfectos para compartir con amigos, 
            familiares o compañeros de trabajo en Ciudad del Este.
          </p>
          <div className="mb-12">
            <img 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl border-2 border-neon-purple" 
              src={imagenPrin} 
              alt="Bocaditos Voraz"
            />
          </div>
          <a 
            href="https://wa.me/595985214420" 
            className="inline-block bg-neon-green text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon-green/50"
          >
            🍽️ ¡Haz tu Pedido Ahora!
          </a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-gara text-center mb-12 text-neon-pink">
            Nuestra Pasión
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                className="w-full rounded-lg shadow-xl border border-violeta" 
                src={conjunto} 
                alt="Variedad de bocaditos"
              />
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-neon-purple pl-6">
                <h3 className="text-xl font-bold text-neon-blue mb-2">
                  😋 Ingredientes Frescos y de Primera Calidad
                </h3>
                <p className="text-gray-300">
                  Utilizamos solo los mejores ingredientes para garantizar un sabor excepcional en cada bocadito.
                </p>
              </div>
              <div className="border-l-4 border-neon-purple pl-6">
                <h3 className="text-xl font-bold text-neon-blue mb-2">
                  😋 Elaborados con Amor y Cuidado
                </h3>
                <p className="text-gray-300">
                  Cada bocadito se crea con pasión y dedicación para ofrecerte la mejor experiencia culinaria.
                </p>
              </div>
              <div className="border-l-4 border-neon-purple pl-6">
                <h3 className="text-xl font-bold text-neon-blue mb-2">
                  😋 Opciones Personalizadas
                </h3>
                <p className="text-gray-300">
                  ¡Contáctanos para crear el bocadito perfecto para tu evento o celebración especial!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Bocaditos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-gara text-center mb-4 text-neon-pink">
            Nuestros Bocaditos
          </h2>
          <p className="text-center text-lg mb-12 text-gray-300">
            Tenemos varios sabores para que elijas los que más te gustan o pruebes alguno nuevo
          </p>
          
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl text-violeta font-bold mb-4">
              PRECIOS <span className="underline text-neon-green">CADA 10 UNIDADES</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { nombre: "Sandw. Mila de Pollo", precio: "25 000 gs", color: "neon-pink" },
              { nombre: "Mini Burger", precio: "25 000 gs", color: "neon-blue" },
              { nombre: "Empanaditas", precio: "18 000 gs", color: "neon-green" },
              { nombre: "Canastitas", precio: "18 000 gs", color: "neon-purple" },
              { nombre: "Croquetas", precio: "12 000 gs", color: "neon-pink" },
              { nombre: "Pizzetas", precio: "12 000 gs", color: "neon-blue" },
              { nombre: "Sandw miga JyQ", precio: "12 000 gs", color: "neon-green" }
            ].map((item, index) => (
              <div key={index} className={`bg-gray-900 p-6 rounded-lg border-2 border-${item.color} hover:shadow-lg hover:shadow-${item.color}/30 transition-all duration-300`}>
                <h3 className={`text-xl font-bold text-${item.color} mb-2`}>
                  {item.nombre}
                </h3>
                <p className="text-2xl font-bold text-white">
                  {item.precio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img 
              className="w-full max-w-md mx-auto rounded-lg border-2 border-neon-blue mb-4" 
              src={miniBurger} 
              alt="Mini Burger"
            />
            <p className="text-sm text-gray-400">Mini Burgers - Una de nuestras especialidades</p>
          </div>
        </div>
      </section>

      {/* Combos Especiales */}
      <section className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-gara text-center mb-4 text-neon-pink">
            Combos Especiales
          </h2>
          <p className="text-center text-lg mb-12 text-gray-300">
            Combos a precio promocional para que pruebes una variedad de nuestros productos
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Combo Económico */}
            <div className="bg-gray-900 p-8 rounded-xl border-2 border-neon-green hover:shadow-xl hover:shadow-neon-green/20 transition-all duration-300">
              <h3 className="text-3xl font-gara text-center mb-6 text-neon-green">
                Combo Económico
              </h3>
              <img 
                className="w-full rounded-lg mb-6 border border-neon-green" 
                src={eco} 
                alt="Combo Económico"
              />
              <p className="text-center text-2xl font-bold text-violeta mb-6">
                145 000 gs por 100 unidades
              </p>
              <ul className="space-y-2 text-center">
                <li className="text-white">• 20 Sandw Jamón y Queso</li>
                <li className="text-white">• 20 Croquetas</li>
                <li className="text-white">• 20 Pizzetas</li>
                <li className="text-white">• 20 Empanaditas</li>
                <li className="text-white">• 20 Milanesas de Pollo</li>
              </ul>
            </div>

            {/* Combo Premium */}
            <div className="bg-gray-900 p-8 rounded-xl border-2 border-neon-purple hover:shadow-xl hover:shadow-neon-purple/20 transition-all duration-300">
              <h3 className="text-3xl font-gara text-center mb-6 text-neon-purple">
                Combo Premium
              </h3>
              <img 
                className="w-full rounded-lg mb-6 border border-neon-purple" 
                src={premium} 
                alt="Combo Premium"
              />
              <p className="text-center text-2xl font-bold text-violeta mb-6">
                198 000 gs por 100 unidades
              </p>
              <ul className="space-y-2 text-center">
                <li className="text-white">• 20 Sandw Milanesa de Pollo</li>
                <li className="text-white">• 20 Canastitas</li>
                <li className="text-white">• 20 Pizzetas</li>
                <li className="text-white">• 20 Empanaditas</li>
                <li className="text-white">• 20 Mini Burger</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos y Delivery */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gara mb-8 text-neon-pink">
            Pedidos y Delivery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-neon-blue">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">
                📱 Pedidos Rápidos
              </h3>
              <p className="text-gray-300 mb-4">
                Disponibilidad de pedidos en el día, aproximadamente una hora. 
                Siempre es mejor hacer tu pedido con anticipación para asegurar disponibilidad.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-neon-green">
              <h3 className="text-2xl font-bold text-neon-green mb-4">
                🚚 Servicio de Delivery
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Hasta 5 km: <span className="text-violeta font-bold">20 000 gs</span></li>
                <li>• Más de 5 km: <span className="text-violeta font-bold">25 000 gs</span></li>
                <li>• Otras distancias: Consultar por WhatsApp</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <a 
              href="https://wa.me/595985214420" 
              className="inline-block"
            >
              <img 
                className="w-64 mx-auto hover:scale-105 transition-transform duration-300" 
                src={whatsap} 
                alt="Contactar por WhatsApp"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-gara mb-6 text-neon-blue">
                🕐 Horarios
              </h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-neon-blue">
                <p className="text-lg mb-4">
                  <span className="text-neon-green font-bold">Lunes a Sábado:</span><br />
                  7:00 a 19:00
                </p>
                <p className="text-gray-300 text-sm">
                  Podés hacer tu pedido en cualquier momento. 
                  También tomamos pedidos para domingos con al menos un día de anticipación.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-gara mb-6 text-neon-purple">
                📍 Ubicación
              </h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-neon-purple">
                <p className="text-lg mb-4">
                  Barrio Villa Fanny<br />
                  <span className="text-neon-pink font-bold">Ciudad del Este, Paraguay</span>
                </p>
                <a 
                  href="https://maps.app.goo.gl/1KmjSXHz6rPAKvfH6" 
                  target="_blank" 
                  className="inline-block bg-neon-purple text-white px-6 py-3 rounded-full hover:bg-neon-pink transition-colors duration-300"
                >
                  Ver en Google Maps 🗺️
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-gara mb-6 text-neon-pink">
            ¿Listo para Disfrutar?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            No esperes más, contactanos ahora y llevá el sabor de Voraz a tu próxima reunión
          </p>
          <a 
            href="https://wa.me/595985214420" 
            className="inline-block bg-gradient-to-r from-neon-pink to-neon-purple text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-neon-green hover:to-neon-blue transition-all duration-300 shadow-2xl hover:shadow-neon-pink/50 transform hover:scale-105"
          >
            🚀 ¡Contactar Ahora!
          </a>
        </div>
      </section>
    </main>
  )
}
