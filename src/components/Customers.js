import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert'
import {startCustomers} from '../actions/startCustomers'
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
    
    useEffect(()=> {
        dispatch(startCustomers())
    },[])

    return (
        <div>
            <h2> Add Customers</h2> <hr />
            <AddCx />
            <h2> Existing Customers</h2>
            <input type="text" placeholder="Search by Name" onChange={handleChange} value={search} name="search" />
            <TableList cxdata={filter} handleDelete={handleDelete} handleEdit={handleEdit} editData={editData} />
        </div>
    )
}

export default Customers