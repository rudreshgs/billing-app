import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert'
import {startDelete} from '../actions/startDelete'
import AddCx from './AddCx'
import TableList from './TableList'

const Customers =(props) => {

    const dispatch =useDispatch()

    const cxdata = useSelector((state)=> {
        return state.customers
    })
    // console.log('from cx ',cxdata)

    const [editData, setEditData] = useState({})
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])

    useEffect(()=>{
        setFilter([...cxdata])
   },[cxdata])

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: ['Cancel','Yes'],
            dangerMode: true,
        })
        .then((willDelete) => {
            if(willDelete){
                const flist = cxdata.filter((ele)=> {
                    return id !== ele._id
                })
                dispatch(startDelete(id,flist))
            }
        })
    }

    const handleEdit = (id) => {
        const res = cxdata.filter((ele)=>{
            return id === ele._id
        })
        setEditData(res)
    }

    const handleChange = (e) => {
        if(e.target.name === 'search'){
            setSearch(e.target.value)
        }
        const filterData = cxdata.filter((ele) => {
            return ele.name.includes(e.target.value)
        })
        setFilter(filterData)
    }
    
    // useEffect(()=> {
    //     dispatch(startCustomers())
    // },[])

    return (
        <div>
            <h2 className="mt-3 ml-5 mb-3">Add Customers</h2>
            <AddCx /> <hr />
            <h2 className="mt-3 ml-5 mb-3"> Existing Customers</h2>
            {cxdata.length === 0 ? (
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <div className="alert alert-primary mt-5 p-5 text-center" role="alert"> <b> No data found! </b></div>
                    </div>
                </div>

            ) : (<>
                <div className="row mb-3">
                    <div className="col-md-4 ml-5">
                        <input type="text" className="form-control" placeholder="Search by Name" onChange={handleChange} value={search} name="search"/>
                    </div>
                </div><TableList cxdata={filter} handleDelete={handleDelete} handleEdit={handleEdit} editData={editData} /></>
            )}
        </div>
    )
}

export default Customers