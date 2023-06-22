
import { useCrudMode } from '../CrudProvider'
export default function Table() {
    const {results, onEdit, onCancel, data, onDelete} = useCrudMode();
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => 
                    <tr>
                        <td key={index}></td>
                        <td>{result.name}</td>
                        <td>{result.contactInfo.email}</td>
                        <td>{result.contactInfo.phone}</td>
                        <td>
                            {(data.id===result.id) ?
                                <button className='btn btn-sm btn-secondary' onClick={()=>onCancel()}>Cancel</button>
                                :
                                <button className='btn btn-sm btn-warning' onClick={()=>onEdit({id:result.id, name:result.name, email:result.contactInfo.email, phone:result.contactInfo.phone})}>Edit</button>
                            }
                            <button className='btn btn-sm btn-danger' onClick={()=>onDelete(result)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
