import React from 'react';
import {carsService} from "../../services";

const Car = ({car, setUpdateCar,setCars}) => {
    const {id, brand, year, price} = car;
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => {
                carsService.deleteById(id).then(async () => {
                    const {data} = await carsService.getAll();
                    setCars([...data])
                }).catch(err => console.log(err))
            }}>delete
            </button>
        </div>
    );
}

export {Car};