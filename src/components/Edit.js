
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useNavigate ,useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Contactlist from './Contactlist';
import '../components/Add.css';
function Edit(){

    const [users,setUsers]=useState({
        name: "",
        email: "",
        phno: ""
    })
    const {name,email,phno}=users
    const {id}=useParams()
    const navigate = useNavigate();
    let {register,handleSubmit,formState: {errors}} = useForm()
    const onFormSubmit= async (userObj)=>{
        console.log(userObj)

         await axios.put(`http://localhost:4000/contacts/${id}`,users)

       
        navigate('/contactlist')
     }
     const onInputChange=(e)=>{
         
         setUsers({...users,[e.target.name]:e.target.value})
     }
     useEffect(()=>{
         loadUser()
     },[])
     const loadUser= async ()=>{
         const result =await axios.get(`http://localhost:4000/contacts/${id}`)
         console.log(result.data)
         setUsers(result.data)
     }
     
return(
    <div>
            <h3 className="p-3 text-center mt-4">Edit Contact {id}</h3>
            <form className="form-floating"    onSubmit={handleSubmit(onFormSubmit)}>
                <div className=' edit mx-auto p-4 w-75  m-5 shadow-lg'>
                <div className="container ">
                    <label className="ms-1 mb-1 "    ><h5>Name</h5></label>
                    <input type="text" value={name} className="form-control mb-3   margin-center" {...register("name")} onChange={(e)=>onInputChange(e)}  />
                </div>
                <div className="container">
                    <label className="ms-1 mb-1" ><h5>Email</h5></label>
                    <input type="email" value={email}  placeholder="Enter email" className="form-control mb-3  " {...register("email")} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="container">
                    <label className="ms-1 mb-1" ><h5>Phone Number</h5></label>
                    <input type="number"  value={phno} placeholder="Enter Phone Number" className="form-control  " {...register("phno")}  onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="justify-content-center ms-4 mt-4">
                <button type="submit" className="btn btn-success">Edit Contact</button>
                </div>
                </div>
            </form>


    </div>
)

}
export default Edit;