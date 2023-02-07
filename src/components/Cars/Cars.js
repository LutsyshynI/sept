import {Car} from "../Car/Car";

const Cars = ({cars,setUpdateCar,setCars}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};