import axios from "axios";
import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import {Routes,Route, Navigate,Link,unstable_HistoryRouter, useNavigate} from 'react-router-dom';
import Contactlist from "./Contactlist";
import '../components/Add.css';


function Addcontact() {

    let {register,handleSubmit,formState: {errors}} = useForm()
    let navigate=useNavigate()
   const onFormSubmit= async (userObj)=>{
      // console.log(userObj)
       //http post request to create user resource
      let response= await axios.post('http://localhost:4000/contacts',userObj)
      if(response.status===201){
          navigate('/contactlist')
      }
      console.log(response)
   }
    return(
        <div className=" main  mx-auto justify-content-center">
            <h1 className="text-center m-5">Add New Contact</h1>
            <div className=" container  bag ms-5 pt-3 pb-4  shadow-lg justify-content-center w-75">
            <form className="form-floating mt-3 form   " onSubmit={handleSubmit(onFormSubmit)}>
                <div className="">
                <div className="container ">
                    <label className="ms-1 mb-1 form-label "  for="floatingInput" ><h5><b>Name</b></h5></label>
                    <input type="text"   placeholder=" Enter Name" className="form-control  mb-3 " {...register("name",{required:true})} />
                    {errors.name?.type==='required' && <p className="text-danger ">*Required</p>}
                </div>
                <div className="container">
                    <label className="ms-1 mb-1 form-label " ><h5><b>Email</b></h5></label>
                    <input type="email"  placeholder="Enter email" className="form-control  mb-3" {...register("email",{required:true})} />
                    {errors.email?.type==='required' && <p className="text-danger ">*Required</p>}
                </div>
                <div className="container">
                    <label className="ms-1 mb-1 form-label " ><h5><b>Phone Number</b></h5></label>
                    <input type="number"  placeholder="Enter Phone Number" className="form-control   md-3" {...register("phno",{required:true})} />
                    {errors.phno?.type==='required' && <p className="text-danger ">*Required</p>}
                </div>
                <div className="justify-content-center ms-4 mt-4">
                <button type="submit" className="btn btn-primary">Add Contact</button>
                </div>
                </div>

            </form>
            </div>
        </div>
    );
    }

export default Addcontact;