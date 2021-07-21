import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import swal from 'sweetalert'
import ViewBillModal from './ViewBillModal'
import {startViewBill} from '../actions/startViewBill'
import {startDeleteBill} from '../actions/startDeleteBill'

const BillingTable = (props) => {

    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [viewData, setViewData] = useState({})

    const cxdata= useSelector((state) => {
        return state.customers
    })

    const billdata = useSelector((state) => {
        return state.bills
    })

    const handleGetCustomer = (id) => {
        const cxname = cxdata.filter((ele)=> {
            return id === ele._id
        })
        if(cxname[0] !== undefined){
            return cxname[0].name
        }
    }

    const handleView = (id) => {
        // setTimeout(()=>{toggle()},1000)
        dispatch(startViewBill(id, setViewData))
        toggle()
    }
    // console.log('viewdata',viewData)

    const handleDelete = (id) => {
        swal({title: "Are you sure?",
            icon: "warning",
            buttons: ['Cancel','Yes'],
            dangerMode: true
        })
        .then((willDelete) => {
            if(willDelete){
                const filtBill = billdata.filter(ele => id !== ele._id)
                dispatch(startDeleteBill(id,filtBill))
            }
        })
    }

    return (
        <div>
            <h2 className="mt-3 ml-5 mb-3">Bill Listing</h2>
            {billdata.length !==0 ? 
                (<table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billdata.map((ele,i) => {
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{ele.date.slice(0,10).split("-").reverse().join("-")}</td>
                                <td>{handleGetCustomer(ele.customer)}</td>
                                <td><button className="btn btn-success" onClick={()=>{handleView(ele._id)}}>view</button></td>
                                <td><button className="btn btn-danger" onClick={()=>{handleDelete(ele._id)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>): (
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="alert alert-primary mt-5 p-5 text-center" role="alert">
                                <b> No data found! </b>
                            </div>
                        </div>
                    </div>
                )
            }
            <ViewBillModal modal={modal} toggle={toggle} viewData={viewData} />
        </div>
    )
}

export default BillingTable