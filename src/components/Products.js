import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert'
import AddProduct from './AddProduct'
import {startProDelete} from '../actions/startProDelete'
import ProTable from './ProTable'

const Products = (props) => {

    const [editData, setEditData] = useState([])
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState([])

   const dispatch = useDispatch()

   const prodata = useSelector((state)=> {
       return state.products
   })

   const handleEdit = (id) => {
       const fdata = prodata.filter((ele)=> {
           return id === ele._id
       })
       setEditData(fdata)
   }

   useEffect(()=>{
        setFilter([...prodata])
    },[prodata])

   const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: ['Cancel','Yes'],
            dangerMode: true,
        })
        .then((willDelete) => {
            if(willDelete){
                const flist = prodata.filter((ele)=> {
                    return id !== ele._id
                })
                dispatch(startProDelete(id,flist))
            }
        })
   }

    const handleChange = (e) =>{
        if(e.target.name === 'search'){
            setSearch(e.target.value)
        }
        const filterData = prodata.filter((ele)=>{
            return ele.name.includes(e.target.value)
        })
        setFilter(filterData)
    }

    return (
        <>
            <h2 className="mt-3 ml-5 mb-3">Add Products</h2>
            <AddProduct />
            <hr />
            <h2 className="mt-3 ml-5 mb-3">Existing Products</h2>
           {prodata.length === 0 ? (
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div className="alert alert-primary mt-5 p-5 text-center" role="alert"><b> No data found! </b></div>
                </div>
            </div>

            ): (<>
                <div className="row mb-3">
                    <div className="col-md-4 ml-5">
                        <input type="text" className="form-control" placeholder="Search by Product"  value={search} name="search" onChange={handleChange}/>
                    </div>
                </div>
                <ProTable prodata={prodata} prodata={filter} handleEdit={handleEdit} handleDelete={handleDelete} editData={editData} />
            </>)}
        </>
    )
}

export default Products