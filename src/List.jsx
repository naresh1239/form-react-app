import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'

import "./List.css"
const List = () => {
  const [newdata, setnewdata] = useState([])

  useEffect(() => {
    let localtextarry
    let localdata = localStorage.getItem("localdata");
 
    if (localdata == null) {
        localtextarry = [];
 
    } else {
        localtextarry = JSON.parse(localdata);
    }
 
    setnewdata([...localtextarry])
 
    console.log(newdata[0])
  },[])
 

  return (
    <>
    <div className='center'>
    <div className="box">
    <h1>ALL Users </h1> 

         {
         newdata.map((ele,id)=>{
           return(
             <>
    
      <div class="list">
    
        <div class="contant">
            <h4>{ele?.email}</h4>
            <h5>{ele?.name}</h5>
        </div>
        <div class="icon">
            <h1><small>#</small>{id + 1}</h1>
        </div>
      </div>
             </>
           )
         })  
                  
           
} 



        

<NavLink to="/"><button >Log out</button> </NavLink>
      </div>

      </div>
    </>

  )
}

export default List