import vorazLogo from '../assets/logo100w.png' 
import '../App.css'
import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <div className='flex flex-col min-h-screen'>

            <header className='flex '>
                <Link to='/' className='flex-1 hover:animate-pulse'> <img src={vorazLogo} alt="Voraz logo" /></Link>
                <div className='flex invisible md:visible'>
                    <Link to='bocadito' className='mr-4 pr-4 hover:animate-pulse'><p>Bocaditos</p></Link>
                    <Link to='pizza' className='mr-4 pr-4 hover:animate-pulse'><p>Pizzas</p></Link>
                    <Link to='empanada' className='mr-4 pr-4 hover:animate-pulse'><p>Empanadas</p></Link>
                </div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 visible md:invisible">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>

            </header>

            <Outlet />

            <footer>
                <p className='flex justify-center'>Made by&nbsp;<a className='text-yellow-500' href='https://febo.digital'>Febo</a></p>
            </footer>
        
        </div>
    )}