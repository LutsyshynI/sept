import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carsService} from "../../services";


const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        const {data} = await carsService.create(car);
        setCars(prev => [...prev, data])
        reset()
    }
    const update = async (car) => {
        const {data} = await carsService.updateById(updateCar.id, car);
            console.log(data);
        if (data) {
            const {data} = await carsService.getAll(car)
            setCars(data)
        }
    }
    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])
    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type='text' placeholder={'brand'} {...register('brand')}/>
        //     <input type='text' placeholder={'price'} {...register('price',
        //         {valueAsNumber:true,
        //         min:{value:0,message:'min 0'},
        //         max:{value:100000,message:'max'}})}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //     <input type='text' placeholder={'year'} {...register('year',
        //         {valueAsNumber:true,
        //         min:{value:1950,message:'min 1950'},
        //         max:{value:new Date().getFullYear(),message:`max ${new Date().getFullYear()}`}})}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //     <button>save</button>
        // </form>
        <form onSubmit={handleSubmit(updateCar ? update : submit)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type='text' placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};