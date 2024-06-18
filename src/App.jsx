import './App.css'
import imagenPrin from './assets/premGeneral.jpg'

function App() {
  

  return (
    <div className="flex flex-col">
      <header  className="justify-start">
        <p className='font-gara'>VORAZ</p>
        <p>Contacto:</p>
      </header>
      <body className="min-h-screen">
        <h1 className="text-3xl font-bold">
        Bocaditos Deliciosos
        </h1>
        <img src={imagenPrin}/>
        <p>¿Antojo de algo delicioso y irresistible? ¡En Voraz te tenemos cubierto!</p>
        <p>Perfectas para compartir con amigos, familiares o compañeros de trabajo, nuestras creaciones son la excusa perfecta para disfrutar de un momento especial.</p>
        <p>En Voraz, nos apasiona la calidad:</p>
        <ol>
          <li><b>Ingredientes frescos y de primera calidad:</b> Utilizamos solo los mejores ingredientes para garantizar un sabor excepcional.</li>
          <li><b>Elaborados con amor y cuidado:</b> Cada bocadito se crea con pasión y dedicación para ofrecerte la mejor experiencia.</li>
          <li><b>Opciones personalizadas:</b> ¡Contáctanos para crear el bocadito perfecto para tu evento o celebración!</li>
        </ol>
        <h2>Sabores</h2>
        <p>Tenemos varios sabores para que elijas los que mas te gustan o probar alguno que nunca hayas saboreado</p>
          <ol>
            <li>Sandwich de Milanesa de Pollo</li>
            <li>Empanaditas (de Carne , de Pollo o de Jamon y queso)</li>
            <li>Canastitas (de Napolitana, de Capresse, de Fugazzeta o de Choclo)</li>
            <li>Mini Burger</li>
            <li>Croquetas</li>
            <li>Pizzetas</li>
            <li>Sandwich de miga de Jamonn y Queso</li>

          </ol>
        <h2>Combos</h2>
        <h2>Pedidos</h2>
          <p>Contamos con disponibilidad en el dia, aproximadamente una hora. Pero siempre es mejor hacer tu pedio con anticipacion para asegurarte la disponibilidad</p>
          <h3>Horarios</h3>
      </body>
      
      <footer className="justify-end">
        <p className='flex justify-center'>Made by&nbsp;<a className='text-yellow-500' href='https://febo.solutions'>Febo</a></p>
      </footer>
    </div>
  )
}

export default App
