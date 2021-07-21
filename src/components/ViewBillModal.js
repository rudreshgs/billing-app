import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import {useReactToPrint} from 'react-to-print'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ViewBillModal = (props) => {

    const {className, modal, toggle, viewData} = props

    const componentRef = useRef()

    const userdata = useSelector(state=>state.user)

    const cxdata = useSelector(state=>state.customers)

    const prodata= useSelector(state=>state.products)

    const handleCxName = (id) => {
        const customer = cxdata.filter(ele => id === ele._id)
        return customer[0].name
    }

    const handleCxMob = (id) => {
        const customer = cxdata.filter(ele => id === ele._id)
        return customer[0].mobile
    }

    const handleCxEmail = (id) => {
        const customer = cxdata.filter(ele => id === ele._id)
        return customer[0].email
    }

    const handleProductName = (id) => {
        const data = prodata.filter(ele => id === ele._id)
        return data[0].name
    }

    const pdfGenerate = useReactToPrint({
        content: () => componentRef.current,
      })

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <div ref={componentRef}>
                <ModalHeader toggle={toggle}>Bill Details</ModalHeader>
                <ModalBody>
                <div className="row">
                    <div className="col-md-10">
                        <b>Customer Name</b> : {viewData.customer !== undefined && handleCxName(viewData.customer)}
                    </div> 
                    <div className="col-md-4">
                        <b>Date</b> : {viewData.date !== undefined && viewData.date.slice(0,10).split("-").reverse().join("-")}
                    </div> <br />
                    <div className="col-md-10">
                        <b>Mobile</b> : {viewData.customer !== undefined && handleCxMob(viewData.customer)}
                    </div>
                    <div>
                        <b>Email</b> : {viewData.customer !== undefined && handleCxEmail(viewData.customer)}
                    </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">SlNo</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewData.lineItems !== undefined && viewData.lineItems.map((ele,i)=> {
                                        return <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{handleProductName(ele.product)}</td>
                                            <td>{ele.quantity}</td>
                                            <td>{ele.price}</td>
                                            <td>{ele.subTotal}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            <div className="d-flex">
                                <div className="justify-content-end">
                                    {/* <h4>Total : {viewData.total} </h4> */}
                                    <h4>SubTotal : {viewData.total} </h4>
                                    {/* <h4>Total : {gTotal}  </h4> */}
                                    
                                </div>
                            </div>
                        </div>    
                    </div>
                </ModalBody>
                </div>
                <ModalFooter>
                    <Button color="success" onClick={pdfGenerate}>Download as PDF </Button>
                    <Button onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ViewBillModal