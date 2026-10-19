import { useState } from 'react';
import {
  MessageCircle,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
  Truck,
  Shield,
  Award,
  Star,
  ChevronRight,
  FileText,
  Info,
  Zap,
  ExternalLink
} from 'react-feather';

import heroSurtido from './assets/pro/hero_surtido.webp';
import cajaMano from './assets/pro/caja_mano.webp';
import burgerHd from './assets/pro/burger_hd.webp';
import empanadasHd from './assets/pro/empanadas_hd.webp';
import trioHd from './assets/pro/trio_hd.webp';
import surtidoPizarra from './assets/pro/surtido_pizarra.webp';
import mapaCobertura from './assets/pro/mapa_cobertura.webp';
import logoHd from './assets/pro/logo_hd.png';

export default function NuevoDisenoHome() {
  const [tabIndividual, setTabIndividual] = useState('todos');

  const bocaditos = [
    {
      nombre: 'Mini Burgers',
      precio: '25.000 Gs',
      unidad: '2.500 Gs c/u',
      desc: 'Hamburguesitas gourmet artesanales con pan suave y aderezo especial de la casa.',
      img: burgerHd,
      tag: 'Más pedido',
      tipo: 'caliente'
    },
    {
      nombre: 'Empanaditas Clásicas',
      precio: '18.000 Gs',
      unidad: '1.800 Gs c/u',
      desc: 'Rellenos caseros abundantes: Pollo desmechado o Jamón y Queso fundido.',
      img: empanadasHd,
      tag: 'Tradicional',
      tipo: 'caliente'
    },
    {
      nombre: 'Empanaditas de Carne',
      precio: '22.000 Gs',
      unidad: '2.200 Gs c/u',
      desc: 'Carne de primera calidad sazonada con especias tradicionales y masa crujiente.',
      img: empanadasHd,
      tag: 'Especial',
      tipo: 'caliente'
    },
    {
      nombre: 'Canastitas Gourmet',
      precio: '18.000 Gs',
      unidad: '1.800 Gs c/u',
      desc: 'Masa fina horneada con mix gourmet de verduras, quesos y jamón seleccionado.',
      img: trioHd,
      tag: 'Gourmet',
      tipo: 'caliente'
    },
    {
      nombre: 'Sándwich Milanesa de Pollo',
      precio: '25.000 Gs',
      unidad: '2.500 Gs c/u',
      desc: 'Pechuga crocante en pan artesanal tierno. El salvador indiscutido de las reuniones.',
      img: surtidoPizarra,
      tag: 'Favorito',
      tipo: 'frio'
    },
    {
      nombre: 'Croquetas Crocantes',
      precio: '15.000 Gs',
      unidad: '1.500 Gs c/u',
      desc: 'Doradas por fuera, cremosas por dentro, elaboradas en el día con carne tierna.',
      img: surtidoPizarra,
      tag: 'Clásico',
      tipo: 'caliente'
    },
    {
      nombre: 'Sándwiches Miga JyQ',
      precio: '15.000 Gs',
      unidad: '1.500 Gs c/u',
      desc: 'Capas generosas de jamón cocido y queso en miga fresca y suave.',
      img: heroSurtido,
      tag: 'Práctico',
      tipo: 'frio'
    },
    {
      nombre: 'Pizzetas de la Casa',
      precio: '12.000 Gs',
      unidad: '1.200 Gs c/u',
      desc: 'Masa casera esponjosa con salsa de tomate especial y abundante queso mozzarella.',
      img: heroSurtido,
      tag: 'Económico',
      tipo: 'caliente'
    }
  ];

  const deliveryTarifas = [
    { rango: '0 km a 1 km', costo: '10.000 Gs', desc: 'Zona inmediata Santa Ana' },
    { rango: '1.1 km a 3 km', costo: '15.000 Gs', desc: 'Barrios cercanos' },
    { rango: '3.1 km a 5 km', costo: '20.000 Gs', desc: 'Tarifa habitual CDE Centro y alrededores' },
    { rango: '5.1 km a 7 km', costo: '25.000 Gs', desc: 'Franja frecuente Área 1 a 4, Franco' },
    { rango: '7.1 km a 9 km', costo: '30.000 Gs', desc: 'Pdte. Franco / Hernandarias centro' },
    { rango: '9.1 km a 11 km', costo: '35.000 Gs', desc: 'Minga Guazú / Hernandarias norte' },
    { rango: '11.1 km a 15 km', costo: '40.000 - 45.000 Gs', desc: 'Zonas periféricas metropolitanas' },
    { rango: '15.1 km a 17 km', costo: '50.000 Gs', desc: 'Límite metropolitano' }
  ];

  const whatsappNumber = '595985214420';
  const whatsappLink = (msg) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-inter selection:bg-voraz-pink selection:text-white pb-12 overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Gatillos de frescura y confianza) */}
      <div className="bg-gradient-to-r from-[#18031a] via-[#3d033e] to-[#18031a] border-b border-voraz-pink/30 py-2.5 px-4 text-xs md:text-sm text-center font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span className="inline-flex items-center gap-1.5 text-white">
            <Zap size={14} className="text-voraz-pink" />
            <strong className="text-voraz-pink font-bold">¿Lo necesitás para hoy?</strong> Elaboramos pedidos en el día (1 a 2 horas)
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="inline-flex items-center gap-1 text-gray-300">
            <MapPin size={13} className="text-voraz-pink" /> Barrio Santa Ana (a 300m del Hospital Regional CDE)
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="inline-flex items-center gap-1 text-gray-300">
            <FileText size={13} className="text-voraz-pink" /> Factura legal con RUC para empresas
          </span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-gradient-to-b from-[#121212] via-[#0d0d0d] to-[#0d0d0d]">
        {/* Subtle ambient lighting */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-voraz-pink/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#590256]/30 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline / Sub-badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <img src={logoHd} alt="Voraz Logo" className="w-5 h-5 rounded-full" />
              <span className="font-oswald tracking-widest text-xs uppercase text-voraz-pink font-semibold">
                Bocaditos Deliciosos · Alto Paraná
              </span>
              <span className="flex items-center gap-1 text-amber-400 text-xs font-bold pl-2 border-l border-white/10">
                <Star size={12} fill="currentColor" /> 4.5★
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-oswald text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
              El sabor que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-voraz-pink via-pink-400 to-white">
                une tus eventos
              </span>
            </h1>

            {/* Core Value Proposition */}
            <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
              Bocaditos artesanales elaborados en el día con ingredientes de primera calidad. 
              Llegan <strong className="text-white font-semibold">tibios y en su propia caja negra</strong>, listos para servir sin vajilla ni complicaciones.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl text-xs sm:text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl">
                <CheckCircle size={18} className="text-voraz-pink shrink-0" />
                <span>100 unidades que rinden</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl">
                <Clock size={18} className="text-voraz-pink shrink-0" />
                <span>Listos en 1 a 2 horas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <FileText size={18} className="text-voraz-pink shrink-0" />
                <span>Factura legal con RUC</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappLink('¡Hola Voraz! Quiero hacer una consulta sobre bocaditos para mi evento.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-voraz-pink hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl text-base sm:text-lg font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_0_25px_rgba(217,38,233,0.35)] hover:shadow-[0_0_35px_rgba(217,38,233,0.6)] hover:-translate-y-0.5"
              >
                <MessageCircle size={22} className="shrink-0" />
                Pedir por WhatsApp
              </a>
              <a
                href="#combos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl text-base sm:text-lg font-oswald uppercase tracking-wider transition-colors border border-white/10"
              >
                Ver Combos Oficiales
                <ChevronRight size={18} />
              </a>
            </div>

            <p className="text-xs text-gray-500 pt-1">
              📲 Atención directa de Lunes a Sábado de 07:00 a 19:00 hs · Envíos a todo CDE, Franco, Hernandarias y Minga Guazú.
            </p>
          </div>

          {/* Image Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow Behind Image */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-voraz-pink via-purple-600 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000"></div>
              
              {/* Main Image Box */}
              <div className="relative rounded-3xl overflow-hidden bg-[#181818] border border-white/10 shadow-2xl">
                <img
                  src={heroSurtido}
                  alt="Bocaditos Voraz recién horneados"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-oswald uppercase text-xs text-voraz-pink font-bold tracking-widest">Solución sin vajilla</p>
                    <p className="text-sm font-semibold text-white">Directo de la caja a tu mesa</p>
                  </div>
                  <span className="bg-voraz-pink/20 text-voraz-pink font-oswald text-xs px-3 py-1 rounded-full font-bold border border-voraz-pink/30">
                    100% ARTESANAL
                  </span>
                </div>
              </div>

              {/* Mini Accent Floating Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#161616]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl shadow-xl items-center gap-3 max-w-[240px]">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0">
                  <img src={cajaMano} alt="Caja Voraz" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Caja Negra Voraz</p>
                  <p className="text-[11px] text-gray-400">Entregada tibia y cerrada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMBOS OFICIALES (SECCIÓN ESTRELLA) */}
      <section id="combos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-voraz-pink/10 border border-voraz-pink/20 px-4 py-1 rounded-full text-voraz-pink font-oswald text-xs uppercase tracking-widest">
              Promociones de 100 Unidades
            </div>
            <h2 className="font-oswald text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              Nuestros <span className="text-voraz-pink">Combos Estrella</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
              Pensados para rendir de 14 a 20 personas (5 a 7 bocaditos por invitado). Calidad gourmet garantizada al mejor costo de Alto Paraná.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* COMBO CLÁSICO / ECONÓMICO */}
            <div className="bg-gradient-to-b from-[#1c1c1c] to-[#121212] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between relative group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-oswald text-gray-400 uppercase tracking-widest">Ideal para reuniones y picadas</span>
                    <h3 className="font-oswald text-3xl sm:text-4xl font-black uppercase text-white mt-1">Combo Clásico</h3>
                  </div>
                  <span className="bg-white/10 text-white font-oswald text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-bold">
                    100 UNIDADES
                  </span>
                </div>

                {/* Image */}
                <div className="h-52 w-full rounded-2xl overflow-hidden mb-6 relative bg-black">
                  <img
                    src={surtidoPizarra}
                    alt="Combo Clásico Voraz"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-gray-300">
                    Rinde: 14 a 20 personas (~7.250 Gs / persona)
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="font-oswald text-4xl sm:text-5xl font-black text-white">145.000</span>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">Gs</span>
                  <span className="text-xs text-gray-400 ml-auto font-inter">Entrega tibia en caja Voraz</span>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-8 font-inter text-sm">
                  <p className="font-oswald uppercase text-xs tracking-wider text-gray-400 mb-2">Composición exacta del combo:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">•</span> 20 Croquetas crocantes</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">•</span> 20 Milanesas de pollo</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">•</span> 20 Sándwiches Jamón y Queso</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">•</span> 20 Pizzetas artesanales</div>
                    <div className="flex items-center gap-2 col-span-1 sm:col-span-2"><span className="text-voraz-pink font-bold">•</span> 20 Empanaditas surtidas</div>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink('¡Hola Voraz! Quiero pedir el Combo Clásico de 100 unidades (145.000 Gs).')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-white/10 hover:bg-white hover:text-black text-white font-oswald text-lg uppercase tracking-wider py-4 rounded-xl font-bold transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Pedir Combo Clásico
              </a>
            </div>

            {/* COMBO PREMIUM */}
            <div className="bg-gradient-to-b from-[#240625] via-[#1a0a1b] to-[#121212] rounded-3xl p-6 sm:p-8 border-2 border-voraz-pink/50 hover:border-voraz-pink transition-all duration-300 shadow-[0_0_35px_rgba(217,38,233,0.15)] flex flex-col justify-between relative group">
              
              {/* Highlight ribbon */}
              <div className="absolute -top-3.5 right-6 bg-voraz-pink text-white font-oswald px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                <Star size={12} fill="currentColor" /> EL MÁS ELEGIDO
              </div>

              <div>
                <div className="flex justify-between items-start mb-4 mt-2 sm:mt-0">
                  <div>
                    <span className="text-xs font-oswald text-voraz-pink uppercase tracking-widest font-semibold">Selección Gourmet para Eventos</span>
                    <h3 className="font-oswald text-3xl sm:text-4xl font-black uppercase text-white mt-1">Combo Premium</h3>
                  </div>
                  <span className="bg-voraz-pink/20 text-voraz-pink border border-voraz-pink/30 font-oswald text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-bold">
                    100 UNIDADES
                  </span>
                </div>

                {/* Image */}
                <div className="h-52 w-full rounded-2xl overflow-hidden mb-6 relative bg-black">
                  <img
                    src={trioHd}
                    alt="Combo Premium Voraz con Mini Burgers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-gray-200">
                    Incluye las famosas Mini Burgers y Canastitas Gourmet
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="font-oswald text-4xl sm:text-5xl font-black text-white">198.000</span>
                  <span className="font-oswald text-xl text-voraz-pink font-bold">Gs</span>
                  <span className="text-xs text-gray-400 ml-auto font-inter">Rinde: 14 a 20 personas (~9.900 Gs / inv.)</span>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-8 font-inter text-sm">
                  <p className="font-oswald uppercase text-xs tracking-wider text-voraz-pink mb-2 font-bold">Composición gourmet:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">★</span> 20 Mini Burgers artesanales</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">★</span> 20 Sándwiches de pollo</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">★</span> 20 Canastitas gourmet surtidas</div>
                    <div className="flex items-center gap-2"><span className="text-voraz-pink font-bold">★</span> 20 Pizzetas artesanales</div>
                    <div className="flex items-center gap-2 col-span-1 sm:col-span-2"><span className="text-voraz-pink font-bold">★</span> 20 Empanaditas surtidas</div>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink('¡Hola Voraz! Quiero pedir el Combo Premium de 100 unidades (198.000 Gs).')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-voraz-pink hover:bg-white hover:text-black text-white font-oswald text-lg uppercase tracking-wider py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(217,38,233,0.35)] flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Pedir Combo Premium
              </a>
            </div>

          </div>

          {/* Nota de armado personalizado */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              💡 ¿Querés armar una combinación personalizada para más invitados? 
              <a href={whatsappLink('¡Hola! Me gustaría armar una bandeja personalizada de bocaditos.')} target="_blank" rel="noreferrer" className="text-voraz-pink font-bold hover:underline ml-1.5">
                Escribinos al WhatsApp y te cotizamos al instante →
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* 4. CARTA COMPLETA & PRECIOS POR 10 UNIDADES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-oswald text-voraz-pink tracking-widest uppercase font-semibold">Carta Individual y por Porción</span>
              <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mt-1">
                Sabores <span className="text-voraz-pink">y Precios</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">Elegí tus favoritos cada 10 unidades o sumá adicionales a tus combos.</p>
            </div>

            <div className="flex items-center gap-2 bg-[#1a1a1a] p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setTabIndividual('todos')}
                className={`px-4 py-2 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                  tabIndividual === 'todos' ? 'bg-voraz-pink text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setTabIndividual('caliente')}
                className={`px-4 py-2 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                  tabIndividual === 'caliente' ? 'bg-voraz-pink text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Para Calentar
              </button>
              <button
                onClick={() => setTabIndividual('frio')}
                className={`px-4 py-2 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                  tabIndividual === 'frio' ? 'bg-voraz-pink text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Sándwiches y Fríos
              </button>
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bocaditos
              .filter(item => tabIndividual === 'todos' || item.tipo === tabIndividual)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] rounded-2xl overflow-hidden border border-white/5 hover:border-voraz-pink/40 transition-all duration-300 group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="h-44 overflow-hidden relative bg-black">
                      <img
                        src={item.img}
                        alt={item.nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-voraz-pink border border-voraz-pink/30 text-[10px] font-oswald uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold">
                        {item.tag}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-oswald text-xl font-bold uppercase text-white mb-1">{item.nombre}</h4>
                      <p className="text-gray-400 text-xs font-inter line-clamp-2 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-oswald text-gray-500 tracking-wider">Cada 10 Unidades</p>
                      <p className="font-oswald text-xl font-bold text-voraz-pink">{item.precio}</p>
                    </div>
                    <span className="text-xs text-gray-400 font-inter bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {item.unidad}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Bebidas y Complementos */}
          <div className="mt-12 bg-gradient-to-r from-[#1c1c1c] via-[#221024] to-[#1c1c1c] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-voraz-pink/20 rounded-2xl flex items-center justify-center text-voraz-pink shrink-0">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold uppercase text-white">¿Bebidas y Mesa Dulce?</h4>
                <p className="text-gray-300 text-sm font-inter">Contamos con gaseosas de 2L y 3L bien frías para acompañar tu pedido de bocaditos.</p>
              </div>
            </div>
            <a
              href={whatsappLink('¡Hola! Quiero consultar disponibilidad de gaseosas y bebidas para acompañar los bocaditos.')}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-voraz-pink text-white font-oswald uppercase tracking-wider text-sm px-6 py-3 rounded-xl transition-colors border border-white/10 shrink-0 font-bold"
            >
              Consultar Bebidas
            </a>
          </div>

        </div>
      </section>

      {/* 5. EXPERIENCIA Y NEUROMARKETING (POR QUÉ ELEGIR VORAZ) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-oswald text-voraz-pink uppercase tracking-widest font-semibold">La Diferencia Voraz</span>
            <h2 className="font-oswald text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
              Cero vajilla que lavar.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-voraz-pink to-pink-400">
                100% disfrute con tu gente.
              </span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Cuando organizás un cumpleaños en casa o un almuerzo de trabajo en la oficina, lo último que querés es pasar horas cocinando o terminar con una montaña de platos sucios.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                <div className="bg-voraz-pink/20 p-2.5 rounded-xl text-voraz-pink shrink-0 mt-0.5">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-oswald text-lg font-bold uppercase text-white">Elaboración en el día</h4>
                  <p className="text-gray-400 text-sm">Cero congelados viejos. Cada tanda se cocina con ingredientes frescos el mismo día de tu entrega.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                <div className="bg-voraz-pink/20 p-2.5 rounded-xl text-voraz-pink shrink-0 mt-0.5">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-oswald text-lg font-bold uppercase text-white">Caja Negra Voraz: Lista para Servir</h4>
                  <p className="text-gray-400 text-sm">Llega tibia y cerrada herméticamente. Abrís la tapa y la caja funciona como bandeja elegante.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                <div className="bg-voraz-pink/20 p-2.5 rounded-xl text-voraz-pink shrink-0 mt-0.5">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-oswald text-lg font-bold uppercase text-white">Factura Electrónica legal con RUC</h4>
                  <p className="text-gray-400 text-sm">Hacemos fácil la rendición de cuentas para empresas, secretarias y organizadores de eventos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={cajaMano}
                alt="Caja Voraz entregada en mano"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-xs font-oswald text-voraz-pink uppercase font-bold tracking-widest mb-1">Práctico · Limpio · Rápido</p>
                <p className="text-sm text-gray-200 font-medium">
                  "Nos solucionó el festejo de la oficina en 1 hora y quedamos como reyes con todo el equipo." — Cliente Voraz CDE
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. UBICACIÓN OFICIAL, MAPA Y COBERTURA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-oswald text-voraz-pink tracking-widest uppercase font-semibold">Punto de Retiro y Envíos</span>
            <h2 className="font-oswald text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Ubicación & <span className="text-voraz-pink">Cobertura de Entrega</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Retirá tu pedido en nuestro local o recibilo tibio por delivery en toda la zona metropolitana de Alto Paraná.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Info Cards (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card Ubicación */}
              <div className="bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-voraz-pink/20 rounded-2xl flex items-center justify-center text-voraz-pink mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Ubicación Oficial</h3>
                <p className="text-gray-300 font-inter text-base font-semibold">
                  Barrio Santa Ana
                </p>
                <p className="text-gray-400 text-sm mt-1 mb-4">
                  A solo 300 metros del Hospital Regional de Ciudad del Este.
                </p>
                <a
                  href="https://maps.app.goo.gl/1KmjSXHz6rPAKvfH6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-voraz-pink hover:text-white font-oswald uppercase text-xs tracking-wider font-bold transition-colors bg-voraz-pink/10 hover:bg-voraz-pink px-4 py-2.5 rounded-xl border border-voraz-pink/20"
                >
                  Abrir en Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Card Horarios */}
              <div className="bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Horarios de Atención</h3>
                <p className="text-gray-300 text-sm mb-1">
                  <strong className="text-white font-semibold">Lunes a Sábado:</strong> 07:00 a 19:00 hs continuado.
                </p>
                <p className="text-gray-400 text-xs">
                  Domingos: Entregas programadas con reserva previa (con 24 hs de anticipación).
                </p>
              </div>

              {/* Card Cobertura */}
              <div className="bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-voraz-pink/20 rounded-2xl flex items-center justify-center text-voraz-pink mb-4">
                  <Truck size={24} />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Ciudades con Cobertura</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-voraz-pink" /> Ciudad del Este</div>
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-voraz-pink" /> Presidente Franco</div>
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-voraz-pink" /> Hernandarias</div>
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-voraz-pink" /> Minga Guazú</div>
                </div>
              </div>

            </div>

            {/* Map & Delivery Breakdown (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Graphic Map Card */}
              <div className="bg-[#161616] rounded-3xl overflow-hidden border border-white/10 shadow-xl relative">
                <div className="p-4 sm:p-6 bg-[#1a1a1a] border-b border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-oswald uppercase text-xs text-voraz-pink tracking-widest font-bold">Mapa de Distribución</p>
                    <p className="text-white font-bold text-sm">Área Metropolitana de Alto Paraná</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">Radio hasta 17 km</span>
                </div>
                
                <div className="p-4 sm:p-6 flex justify-center bg-black">
                  <img
                    src={mapaCobertura}
                    alt="Mapa de cobertura de delivery Voraz"
                    className="max-h-[380px] w-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Tarifario Pass-Through */}
              <div className="bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-oswald text-xl uppercase font-bold text-white">Tarifas de Delivery Oficiales</h4>
                  <span className="text-xs bg-voraz-pink/20 text-voraz-pink px-2.5 py-0.5 rounded-full font-oswald uppercase font-bold">
                    A Precio de Costo (Sin Recargo)
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  El servicio lo realiza una empresa tercerizada de logística. En Voraz te cobramos exactamente la tarifa del repartidor, sin recargos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {deliveryTarifas.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div>
                        <span className="text-gray-300 font-semibold block">{item.rango}</span>
                        <span className="text-[11px] text-gray-500">{item.desc}</span>
                      </div>
                      <span className="font-oswald text-sm font-bold text-voraz-pink shrink-0 ml-2">{item.costo}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl font-extrabold uppercase text-white">Preguntas Frecuentes</h2>
            <p className="text-gray-400 text-sm mt-1">Todo lo que necesitás saber antes de hacer tu pedido.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#181818] p-5 rounded-2xl border border-white/5">
              <h4 className="font-oswald text-lg font-bold text-white mb-1">¿Con cuánta anticipación debo hacer mi pedido?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                ¡Tenemos producción en el día! Si lo necesitás para hoy, podés pedirlo con tan solo 1 a 2 horas de anticipación. Para eventos grandes o fines de semana recomendamos reservar con antelación para asegurar tu horario preferido.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-2xl border border-white/5">
              <h4 className="font-oswald text-lg font-bold text-white mb-1">¿Los bocaditos llegan listos para comer?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sí, llegan tibios y listos para servir dentro de nuestra caja negra Voraz. No necesitás pasar tiempo emplatando ni ensuciar vajilla.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-2xl border border-white/5">
              <h4 className="font-oswald text-lg font-bold text-white mb-1">¿Emiten Factura Legal con RUC?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sí, emitimos Factura Electrónica legal con RUC. Solo tenés que indicarnos tus datos fiscales al confirmar el pedido por WhatsApp.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-2xl border border-white/5">
              <h4 className="font-oswald text-lg font-bold text-white mb-1">¿Cómo se abona el pedido y el delivery?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Podés abonar por transferencia bancaria anticipada o en efectivo al recibir. El costo de delivery se traslada exactamente a precio de costo de la empresa de envíos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#2b032d] via-voraz-pink to-[#590256] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-voraz-pink/20">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full font-oswald text-xs uppercase tracking-widest font-semibold inline-block">
              Atención Inmediata por WhatsApp
            </span>
            <h2 className="font-oswald text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              ¿Listo para disfrutar de bocaditos deliciosos?
            </h2>
            <p className="text-white/90 text-base sm:text-lg font-normal">
              Hacé tu pedido ahora y recibilo tibio en tu puerta o retiralo en Barrio Santa Ana.
            </p>
            <div>
              <a
                href={whatsappLink('¡Hola Voraz! Quiero hacer un pedido para hoy / mi evento.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-black hover:text-white px-8 py-4 rounded-xl text-base sm:text-lg font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
              >
                <MessageCircle size={22} className="text-voraz-pink" />
                Escribinos al 0985 214 420
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FLOATING WHATSAPP BUTTON (MÓVIL & DESKTOP) */}
      <aside className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink('¡Hola Voraz! Quisiera hacer un pedido.')}
          target="_blank"
          rel="noreferrer"
          aria-label="Chatear por WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 border-2 border-white/20 group"
        >
          <MessageCircle size={24} className="shrink-0" />
          <span className="font-oswald uppercase tracking-wider text-sm font-bold hidden sm:inline">
            Pedir por WhatsApp
          </span>
        </a>
      </aside>

    </main>
  );
}
