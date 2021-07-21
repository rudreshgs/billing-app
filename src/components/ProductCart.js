import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Select from 'react-select'
import swal from 'sweetalert'
import AddProduct from './AddProduct'
import BillingModal from './BillingModal'

const ProductCart = (props) => {
    const {customer, date} = props
    const [selectedOption, setSelectedOption] = useState(null)
    const [qty, setQty] = useState(1)
    const [productList, setProductList] = useState([])
    const [modal, setModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])
    const [toggleAddProduct,setToggleAddProduct] = useState(false)

    const toggle = () => setModal(!modal)

    const prodata= useSelector((state)=> {
        return state.products
    })

    const options = prodata.map((ele)=> {
        return {
            value: ele._id,
            label: ele.name
        }
    })

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        const fdata = prodata.filter((ele) => {
            return (selectedOption.label === ele.name)
        })
        // console.log('pro', fdata)
        setSelectedProduct(fdata)
    }

    const handleInc = () => {
        if(qty >= 1){
            setQty(qty + 1)
        }
    }

    const handleDec = () => {
        if(qty >1 ){
            setQty(qty - 1)
        }
    }

    const handleDel = (id) => {
        const filterList = productList.filter(ele => {
            return id !== ele.id
        })
        setProductList(filterList)
    }

    const handleAddNewProduct = () => {
        setToggleAddProduct(!toggleAddProduct)
    }

    const handleCart = () =>{
        if(selectedOption !== null  && selectedProduct[0] !== undefined){
           const selProduct = {
                  id : selectedProduct[0]._id,
                  product : selectedOption.label,
                  quantity : qty,
                  price : selectedProduct[0].price
           }
        //    console.log('selected',selProduct)
           if(selProduct.product !== undefined && customer.length !== 0){
           setProductList([...productList, {...selProduct}])
           }else{
            //    alert('select product,customer and date first')
               swal('oops!','Please select Date,Customer and Product','warning')
           }
           }else{
            //    alert('select Product')
               swal('oops!','Please select a product','warning')
           }
           setSelectedOption('')
           setQty(1)
     }
    // console.log('list',productList)

    const findTotal = () => {    
        let sum = 0
        productList.forEach((ele)=>{
            let subtotal = ele.quantity * ele.price
            sum += subtotal
        })
        return sum
    }

    const resetCartValue = () => {
        setProductList([])
    }

    const handleCartOpen = () => {
        if(customer.length !== 0 && productList.length !== 0){
            toggle()
        } else {
            swal('oops!','Please select Date,Customer and Product','warning')
        }
    }

    return (
        <div>
            <div className="d-flex">
            <h2 className= "col-10">Add Products to cart</h2>
            <div className="justify-content-end">
                <button className="btn btn-success text-black font-weight-bold" onClick={handleCartOpen}> Cart - {productList.length} </button>
            </div>
            </div>
            <div className="row ml-5">
                <div className="col-md-3">
                    <Select value={selectedOption} onChange={handleChange} options={options} placeholder='select product' />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary btn-sm" onClick={handleDec}> - </button>  {qty}  <button className="btn btn-primary btn-sm" onClick={handleInc}> + </button>  
                    <button className="btn btn-warning col-6" onClick={handleCart}> Add to Cart </button>
                </div>
                <div className="co-md-5">
                    <button className="btn btn-primary" onClick={handleAddNewProduct}>Add new Product</button>
                </div>
            </div>
            <div className="row mt-3 ml-1">
                {toggleAddProduct && <AddProduct handleAddNewProduct={handleAddNewProduct}/>}
            </div>
            {productList.length !==0 && 
                <div className="col-md-8 ml-5 mt-4">
                       <div className="card">
                           <div className="card-header text-center"><h4>Cart-item list</h4></div>
                           <div className="card-body">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((ele,i)=>{
                                                return <tr key={i}>
                                                          <td>{ele.product}</td>
                                                          <td>{ele.quantity}</td>
                                                          <td>{ele.price}</td>
                                                          <td>{ele.price * ele.quantity}</td>
                                                          <td><button className="btn btn-danger" onClick={()=>{handleDel(ele.id)}}>Remove</button></td>
                                                      </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            }
            <BillingModal modal={modal} toggle={toggle} customer={customer} date={date} productList={productList} findTotal={findTotal} handleDel={handleDel} resetCartValue={resetCartValue} />    
        </div>
    )
}

export default ProductCart