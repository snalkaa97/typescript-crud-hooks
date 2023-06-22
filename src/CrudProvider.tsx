import React, {createContext, useContext, useState, useEffect} from 'react'
import {Data, ArrayData, DataInput, initialData, arrayData} from './model';

type CrudContextType = {
    data: DataInput,
    results: ArrayData,
    isEdit: boolean,
    onCreate: (data: DataInput) => void,
    onUpdate: (data: DataInput) => void,
    onEdit: (data: DataInput) => void,
    onCancel: () => void,
    onDelete: (data: Data) => void,
    onChangeHandler: (field: string, value:any) => void
}


const defaultContext:CrudContextType = {
    data: initialData,
    results: arrayData,
    isEdit: false,
    onCreate: (_data: DataInput) => {},
    onEdit: (_data: DataInput) => {},
    onCancel: () => {},
    onUpdate: (_data: DataInput) => {},
    onDelete: (_data: Data) => {},
    onChangeHandler: (_field: string, _value:any) => {},
}

const CrudContext = createContext<CrudContextType>({
    data: defaultContext.data,
    isEdit: false,
    results: defaultContext.results,
    onCreate: (_data: DataInput) => {},
    onEdit: (_data:DataInput) => {},
    onCancel: () => {},
    onUpdate: (_data: DataInput) => {},
    onDelete: (_data: Data) => {},
    onChangeHandler: (_field: string, _value:any) => {}
});

const useCrudMode = () => useContext(CrudContext);

const CrudModeProvider = ({children}: {children: React.ReactNode}) => {
    const [data, setData] = useState<DataInput>(defaultContext.data);
    const [results, setResults] = useState<ArrayData>(defaultContext.results);
    const [isEdit, setIsEdit] = useState(defaultContext.isEdit);

    const onChangeHandler = (_field: string, _value:any) => {
        setData({...data, [_field]: _value});
    }

    const onCreate = (_data:DataInput) => {
        const id = results.length+1;
        setResults([...results, {id, name:_data.name, contactInfo:{email:_data.email, phone:_data.phone}}]);
        setData(initialData);
    }

    const onEdit = (_data:DataInput) => {
        setData(_data);
        setIsEdit(true);
    }

    const onCancel = () => {
        setIsEdit(false);
        setData(initialData);
    }

    const onUpdate = (_data:DataInput) => {
        const dataUpdate:Data = {
            id:_data.id,
            name: _data.name,
            contactInfo: {
                email: _data.email,
                phone: _data.phone
            }
        }
        setResults(results.map((i)=> i.id===dataUpdate.id ? dataUpdate : i));
        setData(initialData);
    }
    const onDelete = (_data:Data) => {
        setResults(results.filter((result)=>result.id!==_data.id));
    }

    useEffect(()=>{
        // console.log(data);
    },[data,results]);
    return(
    <CrudContext.Provider value={{  data, results, isEdit, onCreate, onUpdate, onDelete, onEdit, onCancel, onChangeHandler}}>
        {children}
    </CrudContext.Provider>
    )
}

export {useCrudMode, CrudModeProvider};


