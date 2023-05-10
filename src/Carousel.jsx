import React, { useState } from 'react';
import bocaditos from '/bocaditosArribaChica.jpg';
import empas from '/empasArribaSolas.png';
import pizza from '/zapi2.jpg';

const galery = [bocaditos, empas, pizza]
const texto = ['Bocaditos para compartir en tus eventos', 'Queda bien con tus amigos, familia o para vos! Empandas Deliciosas', 'Hoy hay Pizzas y eso es bueno!']

const Carousel = () => {
    
    const [index, setIndex] = useState(0); 
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <>
            <div className='flex m-10 w-1/2 md:flex-col'>            
                <img 
                    className='rounded-md h-96 object-cover'               
                    src={galery[index]} 
                    alt={texto[index]} />
                <p className='text-4xl ml-10'>{texto[index]}</p>            
            </div>
            <button onClick={handlePrevious} className='text-6xl'>&lt;</button>
            <button onClick={handleNext} className='text-6xl'>&gt;</button>
        </>
    );
};

export default Carousel;