import React from 'react'
import { useCrudMode } from '../CrudProvider'
export default function FormAdd() {
    const {data, onCreate, onChangeHandler, onUpdate, isEdit} = useCrudMode();
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // onCreate(data);
        onChangeHandler(event.target.name, event.target.value);
    }

    const submitHandler = (event:any) => {
        event.preventDefault();
        !isEdit ? onCreate(data) : onUpdate(data);
    }
    return (
        <>
            <h6 className="text-center">Form {`${!isEdit?`Add`:`Edit`}`}</h6>
            <form onSubmit={event=>submitHandler(event)}>
                <input type="text" className="form-control m-2" name="name" onChange={changeHandler} value={data.name} placeholder='name'/>
                <input type="text" className="form-control m-2" name="email" onChange={changeHandler} value={data.email} placeholder='email' />
                <input type="text" className="form-control m-2" name="phone" onChange={changeHandler} value={data.phone} placeholder='phone'/>
                <button type="submit" className='btn btn-primary'>{`${!isEdit?`Add`:`Edit`}`}</button>
            </form>
        </>
    )
}
