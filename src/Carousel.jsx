import React, { useState } from 'react';
import bocaditos from '/bocaditosArribaChica.jpg';
import empas from '/empasArribaSolas.png';
import pizza from '/Pizamozzarella.png';

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
        <div className="carousel">
            <img src={galery[index]} alt={galery[index]} />
            <p>{texto[index]}</p>
            <button onClick={handlePrevious}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default Carousel;