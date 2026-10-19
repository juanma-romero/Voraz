import React, { useState } from 'react';
import { MessageCircle, CheckCircle, MapPin, Clock, Phone, FileText, ChevronRight, Award, ShieldCheck, Sparkles, Navigation } from 'react-feather';

// Assets profesionales optimizados
import heroImg from './assets/pro/hero_surtido.webp';
import cajaManoImg from './assets/pro/caja_mano.webp';
import burgerImg from './assets/pro/burger_hd.webp';
import empanadasImg from './assets/pro/empanadas_hd.webp';
import mapaImg from './assets/pro/mapa_cobertura.webp';
import logoImg from './assets/pro/logo_hd.png';

const WHATSAPP_NUMBER = '595985214420';
const getWhatsAppUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export default function App() {
  const deliveryZones = [
    { rango: '0 a 1 km', costo: '10.000 Gs', zona: 'Barrio Santa Ana y alrededores inmediatos' },
    { rango: '1.1 a 3 km', costo: '15.000 Gs', zona: 'Área 1, Área 2, Hospital Regional, San José' },
    { rango: '3.1 a 5 km', costo: '20.000 Gs', zona: 'Centro CDE, Pdte. Franco céntrico, Bo. Obrero' },
    { rango: '5.1 a 7 km', costo: '25.000 Gs', zona: 'Área 4, Km 7 Ciudad Nueva, Franco Periférico' },
    { rango: '7.1 a 9 km', costo: '30.000 Gs', zona: 'Km 9 a Km 11, Hernandarias Entrada' },
    { rango: '9.1 a 11 km', costo: '35.000 Gs', zona: 'Hernandarias Centro, Km 12 a 13' },
    { rango: '11.1 a 13 km', costo: '40.000 Gs', zona: 'Minga Guazú Km 14-16, Hernandarias Periférico' },
    { rango: '13.1 a 17 km', costo: '45.000 - 50.000 Gs', zona: 'Minga Guazú Centro / Aeropuerto' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col font-domus">
      {/* Top Banner de Alerta / Disponibilidad en el día */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-zinc-800 text-xs sm:text-sm py-2 px-4 text-center tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#d925e9] animate-pulse"></span>
          <strong className="text-white font-semibold">¿Evento o reunión de última hora?</strong>
          <span className="text-zinc-300 hidden sm:inline">Elaboramos en el día con entrega en 1 a 2 horas.</span>
          <span className="text-zinc-400 font-mono">🧾 Factura con RUC disponible</span>
        </span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Voraz Bocaditos" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <span className="block font-garamond text-xl font-bold tracking-wider text-white leading-tight">VORAZ</span>
              <span className="block text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Bocaditos & Catering CDE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#combos" className="hover:text-[#d925e9] transition-colors">Combos & Precios</a>
            <a href="#por-que-voraz" className="hover:text-[#d925e9] transition-colors">Beneficios</a>
            <a href="#ubicacion" className="hover:text-[#d925e9] transition-colors">Ubicación & Delivery</a>
            <a href="#empresas" className="hover:text-[#d925e9] transition-colors">Corporativo & RUC</a>
          </nav>

          <a
            href={getWhatsAppUrl('Hola Voraz! Quisiera consultar la disponibilidad y precios de combos para hoy.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d925e9] hover:bg-[#c018d0] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-lg shadow-[#d925e9]/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <Sparkles size={14} className="text-[#d925e9]" />
              <span>Bocaditos artesanales entregados tibios en su caja</span>
            </div>

            <h1 className="font-garamond text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              La solución perfecta para tu mesa,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#d925e9]">
                lista en 1 a 2 horas.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Elaborados en el día para cumpleaños, aniversarios y reuniones corporativas en todo Alto Paraná.
              Llegan calientes en su caja de presentación: <strong className="text-white font-medium">cero platos sucios, cero vajilla y cero demoras.</strong>
            </p>

            {/* Pills de Diferenciales Clave */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs sm:text-sm text-zinc-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <Clock size={14} className="text-[#d925e9]" /> Producción en el día
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <FileText size={14} className="text-[#d925e9]" /> Factura legal con RUC
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <MapPin size={14} className="text-[#d925e9]" /> CDE · Franco · Hernandarias · Minga
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getWhatsAppUrl('Hola Voraz! Quiero hacer un pedido para hoy. ¿Podrían pasarme las opciones?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d925e9] hover:bg-[#c018d0] text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-[#d925e9]/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                <span>Hacer Pedido Inmediato</span>
              </a>
              <a
                href="#combos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold px-6 py-4 rounded-xl text-base transition-colors"
              >
                <span>Ver Combos y Precios</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Visual Hero */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#d925e9]/30 to-amber-500/20 blur-xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <img
                  src={cajaManoImg}
                  alt="Caja oficial Voraz con bocaditos recién horneados"
                  className="w-full h-auto object-cover transform hover:scale-102 transition duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 sm:p-6 text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d925e9]">Presentación Oficial</span>
                  <p className="text-sm sm:text-base font-medium text-white mt-1">
                    Abres la caja negra y está listo para servir. Recién hecho, tibio y crujiente.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sección: Beneficios / Neuromarketing (Por qué Voraz) */}
      <section id="por-que-voraz" className="py-16 sm:py-20 bg-zinc-950/60 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d925e9]">Comodidad Absoluta</span>
            <h2 className="font-garamond text-3xl sm:text-4xl font-bold text-white mt-2">
              Diseñado para facilitarte la vida
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Eliminamos todas las complicaciones típicas de organizar un catering o festejo en tu casa u oficina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d925e9]/20 to-zinc-900 border border-[#d925e9]/30 flex items-center justify-center text-[#d925e9] mb-4">
                <Clock size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Listo en 1 a 2 Horas</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Capacidad de producción ágil en el mismo día. Te salvamos la reunión o agasajo sin necesidad de planear con días de anticipación.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d925e9]/20 to-zinc-900 border border-[#d925e9]/30 flex items-center justify-center text-[#d925e9] mb-4">
                <CheckCircle size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sin Vajilla que Lavar</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Nuestra caja negra patentada sirve como bandeja de presentación elegante. Directo del repartidor al centro de tu mesa.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d925e9]/20 to-zinc-900 border border-[#d925e9]/30 flex items-center justify-center text-[#d925e9] mb-4">
                <FileText size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Factura con RUC</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Facturación electrónica formal al instante. Esencial para justificar compras de oficina, agencias y comités corporativos.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d925e9]/20 to-zinc-900 border border-[#d925e9]/30 flex items-center justify-center text-[#d925e9] mb-4">
                <Navigation size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Delivery Transparente</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Sin recargos ocultos. Cobramos la tarifa exacta de la logística tercerizada a Ciudad del Este, Franco, Hernandarias y Minga Guazú.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Combos y Precios */}
      <section id="combos" className="py-16 sm:py-24 border-b border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d925e9]">Precios Claros y Transparentes</span>
            <h2 className="font-garamond text-3xl sm:text-5xl font-bold text-white mt-2">
              Nuestros Combos Más Pedidos
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Cada combo incluye 100 unidades recién horneadas, en caja térmica listas para consumir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Tarjeta 1: Combo Clásico */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={empanadasImg}
                    alt="Combo Clásico Voraz 100 unidades"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-200 border border-zinc-800">
                    100 Unidades
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-garamond text-2xl sm:text-3xl font-bold text-white">Combo Clásico</h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">El favorito tradicional y más rendidor para agasajos.</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">Precio total</span>
                      <span className="font-garamond text-3xl font-bold text-white">145.000 <span className="text-sm font-sans font-normal text-zinc-400">Gs</span></span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 space-y-2.5 text-sm text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Empanaditas surtidas (Carne, Pollo, Jamón & Queso)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Croquetitas caseras crocantes de carne y pollo</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Bolitas de queso doradas al horno</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Mini milanesitas caseras listas para servir</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={getWhatsAppUrl('Hola Voraz! Quiero ordenar 1 Combo Clásico (100 unidades - 145.000 Gs) para hoy.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-colors border border-zinc-700"
                >
                  <MessageCircle size={18} />
                  <span>Pedir Combo Clásico (145.000 Gs)</span>
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Combo Premium (Destacado) */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-[#d925e9] rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#d925e9] transition-all shadow-2xl shadow-[#d925e9]/10 relative group">
              <div className="absolute top-4 right-4 z-10 bg-[#d925e9] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                Más Recomendado
              </div>

              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={burgerImg}
                    alt="Combo Premium Voraz con Mini Burgers gourmet"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-200 border border-zinc-800">
                    100 Unidades Gourmet
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-garamond text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                        Combo Premium
                        <Award size={20} className="text-[#d925e9]" />
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">Selección ejecutiva para oficinas, directivas y eventos especiales.</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">Precio total</span>
                      <span className="font-garamond text-3xl font-bold text-[#d925e9]">198.000 <span className="text-sm font-sans font-normal text-zinc-400">Gs</span></span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 space-y-2.5 text-sm text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Mini hamburguesitas gourmet con pancito de sésamo y queso</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Mini lomitos desmechados en pan artesanal</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Canastitas hojaldradas rellenas con crema y choclo</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#d925e9] shrink-0" />
                      <span>Bocaditos finos horneados con especias seleccionadas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={getWhatsAppUrl('Hola Voraz! Quiero ordenar 1 Combo Premium (100 unidades - 198.000 Gs) para hoy.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d925e9] hover:bg-[#c018d0] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-[#d925e9]/20 transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  <span>Pedir Combo Premium (198.000 Gs)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Banner de Unidades Sueltas */}
          <div className="mt-12 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-garamond text-xl sm:text-2xl font-bold text-white">¿Necesitas armar tu bandeja personalizada?</h4>
              <p className="text-sm text-zinc-400">
                También podés pedir bocaditos sueltos por docena o armar combinaciones a medida desde 1.200 a 2.500 Gs por unidad.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('Hola Voraz! Quisiera ver la lista completa de bocaditos sueltos para armar una bandeja personalizada.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-2.5 rounded-xl transition-colors"
            >
              <span>Consultar Bocaditos Sueltos</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Sección Ubicación, Cobertura y Tarifas de Delivery */}
      <section id="ubicacion" className="py-16 sm:py-24 bg-zinc-950/60 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d925e9]">Ubicación Oficial & Cobertura</span>
            <h2 className="font-garamond text-3xl sm:text-4xl font-bold text-white mt-2">
              En Barrio Santa Ana, directo a tu zona
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Estamos estratégicamente ubicados a 300 metros del Hospital Regional de CDE para llegar rápido y calientes a los 4 distritos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mapa Ilustrado */}
            <div className="lg:col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80">
                <img
                  src={mapaImg}
                  alt="Mapa oficial de ubicación y cobertura Voraz en Ciudad del Este, Franco, Hernandarias y Minga Guazú"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400 px-2">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <MapPin size={16} className="text-[#d925e9]" /> Barrio Santa Ana (a 300 m del Hosp. Regional CDE)
                </span>
                <a
                  href="https://maps.google.com/?q=Voraz+Bocaditos+Ciudad+del+Este"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d925e9] hover:underline font-semibold shrink-0 ml-2"
                >
                  Ver en Maps
                </a>
              </div>
            </div>

            {/* Tabla de Tarifas Pass-Through */}
            <div className="lg:col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="font-garamond text-2xl font-bold text-white flex items-center gap-2">
                  <span>Tarifas de Delivery Justas (Pass-through)</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  El servicio lo realiza una empresa de logística independiente. Te cobramos exactamente lo que cuesta el envío, sin ningún recargo sobre el producto.
                </p>
              </div>

              <div className="divide-y divide-zinc-800/80 max-h-84 overflow-y-auto pr-1">
                {deliveryZones.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-white block">{item.rango}</span>
                      <span className="text-xs text-zinc-400 block">{item.zona}</span>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#d925e9] shrink-0 bg-zinc-800/60 px-3 py-1 rounded-lg border border-zinc-700/50">
                      {item.costo}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-400 flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-[#d925e9] shrink-0 mt-0.5" />
                <span>
                  ¿Dudas sobre el costo a tu barrio exacto? Escribinos por WhatsApp con tu ubicación compartida y te confirmamos al instante.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección Corporativa: Solución para Empresas y Oficinas */}
      <section id="empresas" className="py-16 sm:py-20 border-b border-zinc-900 bg-gradient-to-b from-zinc-900/30 to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-[#d925e9]/10 border border-[#d925e9]/30 text-xs font-semibold text-[#d925e9]">
                Servicio Corporativo & Empresas
              </span>
              <h2 className="font-garamond text-3xl sm:text-4xl font-bold text-white">
                ¿Compras para tu oficina, directorio o evento institucional?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Emitimos <strong className="text-white font-medium">Factura Electrónica legal con RUC</strong> y entregamos el pedido en el horario exacto de tu reunión o pausa de café. Más de 500 compras empresariales y de oficina atendidas con total formalidad.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-zinc-300">
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#d925e9]" /> Factura al instante</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#d925e9]" /> Puntualidad en entregas</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#d925e9]" /> Atención dedicada para compras recurrentes</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href={getWhatsAppUrl('Hola Voraz! Necesito cotización y factura con RUC para un pedido corporativo de nuestra empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                <FileText size={18} />
                <span>Solicitar Factura / RUC</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-black border-t border-zinc-900 py-12 text-zinc-400 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="Voraz" className="h-8 w-auto" />
              <span className="font-garamond text-xl font-bold text-white tracking-wider">VORAZ</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Especialistas en bocaditos artesanales, finger food y catering en Ciudad del Este y área metropolitana. Elaborados con ingredientes frescos y horneados en el día.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Contacto & Ubicación</h4>
            <p className="flex items-center gap-2">
              <MapPin size={15} className="text-[#d925e9] shrink-0" />
              <span>Barrio Santa Ana (a 300 m del Hosp. Regional CDE)</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-[#d925e9] shrink-0" />
              <span>0985 214 420</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} className="text-[#d925e9] shrink-0" />
              <span>Atención todos los días para pedidos y eventos</span>
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Redes Sociales</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/vorazcde"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d925e9] transition-colors flex items-center gap-2"
              >
                <span>Instagram: @vorazcde</span>
              </a>
              <a
                href="https://facebook.com/Voraz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d925e9] transition-colors flex items-center gap-2"
              >
                <span>Facebook: Voraz</span>
              </a>
              <a
                href="https://wa.me/c/595985214420"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d925e9] transition-colors flex items-center gap-2"
              >
                <span>Catálogo WhatsApp: wa.me/c/595985214420</span>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-zinc-900 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Voraz. Todos los derechos reservados. Ciudad del Este, Paraguay.
        </div>
      </footer>

      {/* Botón Flotante Fijo de WhatsApp para Móvil */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={getWhatsAppUrl('Hola Voraz! Quisiera hacer una consulta o pedido.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full font-bold shadow-2xl shadow-green-500/30 transition-all transform hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={22} fill="white" className="text-white" />
          <span className="hidden sm:inline text-sm font-semibold">Pedir por WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
