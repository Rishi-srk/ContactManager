
import axios from 'axios';
import { useEffect, useState } from 'react';
import Contactcard from './Contactcard';
import {AiFillDelete} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Add.css'

function Contactlist(){
    let navigate=useNavigate();
   let [contacts,setContacts]=useState([])
   let [usersEditStatus,setUserStatus]=useState({
       status:false,
       index:''
   })
    useEffect(()=>{
         axios.get('http://localhost:4000/contacts').then(response=>{
          
            setContacts(response.data);
        })

    },[])


    const deleteContact= async (id,index)=>{
        let re= await axios.delete(`http://localhost:4000/contacts/${id}`)
        console.log(re)
        if(re.status===200){
          
            let newUsers =[...contacts]
            newUsers.splice(index,1)
            setContacts(newUsers)
        }

    const editUsersId=(index)=>{


    }

    
    }
    return(
        <div className=" ">
            <h1 className='text-center me-3 mb-3 mt-3'>Contactlist</h1>
            <div className="heading row ">
            <h5 className='col-sm-1 text-center'>S.No</h5>
             <h5 className=" col-sm-2 mb-3  text-center">Name</h5>
             <h5 className="text-center   col-sm-3 ">Email</h5>
             <h5 className="text-center  col-sm-2 ">Phone</h5>
             <h5 className="text-center  col-sm-2 ">Action</h5>
             
           </div>
           {
               contacts.map((users,index)=><div className='row mb-3 border border-secondary  border-2  box'>
                   <h5 className='col-md-1 text-center mt-2 text-dark'>{index+1}</h5>
                   <h5 className='col-md-2 text-center mt-2 text-dark'>{users.name}</h5>
                   <h5 className='col-md-3 text-center mt-2 text-dark'>{users.email}</h5>
                   <h5 className='col-md-2 text-center mt-2 text-dark'>{users.phno}</h5>
                   <div className='col-md-2 text-center mb-3 mt-2 '> 
                   <button className='btn btn-outline-danger  text-center w-75' onClick={()=>deleteContact(users.id,index)}><AiFillDelete/></button>
                   </div>
                   <div className='col-md-2 col text-center mt-2'>
                   <Link className='btn btn-warning text-center w-75 mb-3' to={{
                                    pathname:`edit/${users.id}`,
                                    state:{
                                        name:users
                                    }
                                }} >Edit</Link>
                    </div>
                    


                   </div>)
           }
           
        </div>
    )
}
export  default Contactlist;