import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  const [mostrarModal, setMostrarModal] = useState(true)

  useEffect(() => {
    // Verificar la cookie al montar el componente
    const politicasAceptadas = Cookies.get('politicasAceptadas');
    if (politicasAceptadas === 'true') {
      setMostrarModal(false); // No mostrar si ya aceptó
    }
  }, [])

  const acepta = () => {
    Cookies.set('politicasAceptadas', 'true')    
  };

  return (
    <>
      {mostrarModal && ( // Mostrar solo si mostrarModal es true
      <dialog open className="bg-violeta text-white text-center absolute bottom-0 right-0 left-0">
        <div className="m-4 ">
          <p className="text-lg">Estimado usuario,</p>
          <p>Antes de que pueda acceder completamente a nuestra página web, es importante que acepte:</p>
          <ol>
            <li><Link to={'./politicas'} className="text-verde hover:underline" target="_blank">Políticas de privacidad</Link></li>
            <li><Link to={'./cookies'} className="text-verde hover:underline" target="_blank">Uso de cookies</Link></li>
            <li><Link to={'./terminos'} className="text-verde hover:underline" target="_blank">Terminos y condiciones</Link></li>
          </ol>
         <p>Queremos asegurarnos de que tenga pleno conocimiento de cómo se recopilan,
            utilizan y protegen sus datos personales, así como de cómo se utilizan las cookies en nuestro sitio.</p>
          <form method="dialog">
            <button 
            onClick={acepta}
            className="bg-verde rounded-md h-10 w-20 m-4 shadow-lg hover:animate-pulse">Aceptar</button>
          </form>
        </div>
    </dialog>
    )}
    </>
  )
}



export default Modal