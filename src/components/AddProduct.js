import React, {useState} from 'react'
import swal from 'sweetalert'
import {useDispatch} from 'react-redux'
import {startAddPro} from '../actions/startAddPro'


const AddProduct = (props) => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')

    const handleChange =(e) => {
        if(e.target.name === "product"){
            setProduct(e.target.value)
        } else if(e.target.name === "price"){
            setPrice(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: product,
            price
        }
        dispatch(startAddPro(formData))

        // reset
        setProduct('')
        setPrice('')
        swal('Product Added!','','success')
    }

    return (
        <div>
            <div className="row ml-5">
                <form className="form-inline" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className= "col-3">
                    {/* <label className="sr-only" for="inlineFormInputName2">Name</label> */}
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Product Name" value={product} name="product" onChange={handleChange} required/>
                    </div>
                    {/* <label className="sr-only" for="inlineFormInputName2">Name</label> */}
                    <div className= "col-3">
                    <input type="number" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Price" value={price} name="price" onChange={handleChange} required/>
                    </div>
                    <input type="submit" className="btn btn-primary mb-2" value="Add" />
                </div>
                </form>
            </div> <br />
        </div>
    )
}

export default AddProduct