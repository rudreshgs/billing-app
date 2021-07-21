import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import AddCx from './AddCx'
import BillingTable from './BillingTable'
import ProductCart from './ProductCart'

const Billing = (props) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [customer, setCustomer] = useState([])
    const [date, setDate] = useState('')
    const [toggleAddcx,setToggleAddcx] = useState(false)

    // const dispatch = useDispatch()

    const cxdata = useSelector((state)=> {
        return state.customers
    })

    const options = cxdata.map((ele)=> {
        return {
            value: ele.mobile,
            label: ele.name
        }
    })

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)

        const fdata = cxdata.filter((ele)=> {
            return selectedOption.value === ele.mobile
        })
        setCustomer(fdata)
    }

    const handleAddNewCx = () => {
        setToggleAddcx(!toggleAddcx)
    }

    // useEffect(()=> {
    //     dispatch(startGetBills())
    // },[])

    return (
        <div>
            <h2 className="mt-3 ml-5 mb-3">Select Customer</h2>
            <div className="row ml-5">
                <div className="col-md-3">
                    <input type="date" name="date" className="form-control" onChange={handleDate} value={date} />
                </div>
                <div className="col-md-4">
                    <Select value={selectedOption} onChange={handleChange} options = {options} placeholder={'CustomerName or Mobile-no'} />
                </div>
                <div className="co-md-3">
                    <button className="btn btn-primary" onClick={handleAddNewCx}>Add new Customer</button>
                </div>
            </div>   
            <div className="row mt-3 ml-5">
                {Object.keys(customer).length !== 0 && <h5>Customer Name : {customer[0].name} &nbsp; &nbsp;Mobile : {customer[0].mobile}&nbsp;&nbsp; Email : {customer[0].email}</h5>}
            </div>
                <div className="row mt-3 ml-1">
                {toggleAddcx && <AddCx handleAddNewCx={handleAddNewCx}/>}
            </div>
                <hr />
                <ProductCart customer={customer} date={date} /><br />
                <hr />
                <BillingTable />

        </div>
    )
}

export default Billing