import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {startPostBill} from '../actions/startPostBill'

const BillingModal = (props) => {
    
    const dispatch = useDispatch()

    const { className, modal, toggle, customer, date, productList, handleDel, findTotal, resetCartValue } = props

    // console.log(productList,'from modal')

    const handleSubmit = () => {
        const proQty = productList.map((ele) => {
            return {product : ele.id, quantity: ele.quantity}
        })

        const formdata = {
            date : date,
            customer : customer[0]._id,
            lineItems : proQty
        }
        dispatch(startPostBill(formdata))
        toggle()
        resetCartValue()
        swal('Bill Generated!','generated bill will the 1st entry in the table below','success')
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Billing Invoice</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-4">
                                <b>Date</b> : {date.split("-").reverse().join("-")}
                            </div>
                            {Object.keys(customer).length !==0 && <> 
                            <div className="col-md-8">
                                <b>Name</b> : {customer[0].name}
                            </div>
                            <div className="col mt-2">
                                <b>Mob.no</b> : {customer[0].mobile}
                            </div></>}
                        </div><br />
                        <div className="row">
                            <div className="col">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">SubTotal</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productList.map((ele,i) => {
                                            return <tr key={i}>
                                                <td>{ele.product}</td>
                                                <td>{ele.quantity}</td>
                                                <td>{ele.price}</td>
                                                <td>{ele.price * ele.quantity}</td>
                                                <td><button className="btn btn-danger"  onClick={()=> {handleDel(ele.id)}}> Remove </button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                <h3>Total : {findTotal()} </h3>
                            </div>    
                        </div>
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" className="btn btn-primary" value="Generate Bill" onClick={handleSubmit} />{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default BillingModal