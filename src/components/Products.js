import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert'
import AddProduct from './AddProduct'
import {startProducts} from '../actions/startProducts'
import {startProDelete} from '../actions/startProDelete'
import ProTable from './ProTable'

const Products = (props) => {

    const [editData, setEditData] = useState([])

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

    useEffect(()=> {
        dispatch(startProducts())
    },[])

    return (
        <div>
            <h2> Add Products</h2>
            <AddProduct />
            <ProTable prodata={prodata} handleEdit={handleEdit} handleDelete={handleDelete} editData={editData} />
        </div>
    )
}

export default Products