import React, { useState } from 'react';

function Car() {
    const [car, setCar] = useState({brand: 'Ford', model: 'Mustang', color: 'red', year: 1964});

    const start = (e) => {
        alert('your car is ready by ' + e.type);
    }


    return ( <div>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}
        </p>
        <button type='button' onClick={() => setCar({...car, color: 'blue'})}>Change color</button>
        <button type='button' onClick={start}>Start</button>
    </div> );
}

export default Car;