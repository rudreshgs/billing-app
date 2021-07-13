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
            <hr />
            <form onSubmit={handleSubmit}>
                {/* <label>Name</label> */}
                <input type="text" placeholder="Product Name" value={product} name="product" onChange={handleChange} required/>
                <input type="number" placeholder="Price" value={price} name="price" onChange={handleChange} required/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddProduct