import React, { useState } from 'react'

const UseeafcetFrom = () => {


   const [from,setFrom]=useState({fname:"", lname:"",city:"",gender:""});

    const change=(proparty,value)=>{

        setFrom(prevobj=>({

            ...prevobj,
            [proparty]:value

        }))

    }

    const submit=(e)=>{
       e.preventDefault();
    //    console.log(from);
    alert(JSON.stringify(from))
    }

  return (
    <div className='container'>
        <from>
            <input onChange={(e)=>{change("fname",e.target.value)}} value={from.fname} placeholder='enter first name'/> <br/>
            <input onChange={(e)=>{change("lname",e.target.value)}} value={from.lname} placeholder='enter last name'/> <br/>
<select onChange={(e)=>{change("city",e.target.value)}} value={from.city}>
    <option value="">chose your city</option>
    <option value="Dhaka">Dhaka</option>
    <option value="chitagong">chitagong</option>
</select>
<br/>
<input onChange={()=>{change("gender", "male")}} checked={from.gender==="male"} type='radio' name='gender'/> male             
<input onChange={()=>{change("gender", "Female")}} checked={from.gender ==="Female"} type='radio' name='gender'/> Female 
<br/>
<button onClick={submit} type='submit'> submit </button>           
        </from>
    </div>
  )
}

export default UseeafcetFrom