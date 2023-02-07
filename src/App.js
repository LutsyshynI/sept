
import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carsService} from "./services";

const App = () => {
    const [cars,setCars] = useState([]);
    const [updateCar,setUpdateCar] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data})=>setCars([...data]))
    },[])


    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar} />
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
}

export default App;
