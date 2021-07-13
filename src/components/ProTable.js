import React, {useState} from 'react'
import ProModal from './ProModal'

const ProTable = (props) => {
    const {prodata, handleDelete, handleEdit, editData} = props

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Edit Action</th>
                        <th>Delete Action</th>
                    </tr>
                </thead>
                <tbody>
                    { prodata.map((ele,i)=> {
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ele.name} </td>
                            <td>{ele.price}</td>
                            <td><button onClick={() => {handleEdit(ele._id)
                                toggle()
                            }}>Edit</button></td>
                            <td><button onClick={()=> {handleDelete(ele._id)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <ProModal modal= {modal} toggle={toggle} editData= {editData} />
        </div>
    )
}
export default ProTable