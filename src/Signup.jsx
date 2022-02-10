import React,{useState,useEffect} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Main.css"
const Signup = () => {
  let navigate = useNavigate();
  const [inputemail, setinputemail] = useState()
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [data, setdata] = useState([]);
  let obj = {
   email:inputemail,
   password:password, 
    name : name
}

const alldata = () => {
  let localtextarry
 let localdata = localStorage.getItem("localdata");

 if (localdata == null) {
     localtextarry = [];

 } else {
     localtextarry = JSON.parse(localdata);
 }
 if (inputemail.endsWith("@gmail.com") ) {
     localtextarry.push(obj);
     
 } else {
  toast.error('email not correct 😒!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
 }

 localStorage.setItem("localdata", JSON.stringify(localtextarry))
 setdata(localtextarry)

 setinputemail("")
 setpassword("")
 setname("")

}
 // storing data to localtorage
 
  return (
    <>


<main>
<div className="box">
      <div className="title"><h1>create account</h1></div>
      <div className="input_fild">
        <div className="input">
            <input type="email" value={inputemail} onChange={(e)=> setinputemail(e.target.value)} className={!inputemail == "" ? "inputfild" : "" } />
          <span>Email Address</span>
          
        </div>
        <div className="input">
            <input type="Name" value={name} onChange={(e)=> setname(e.target.value)} className={!name == "" ? "inputfild" : "" } />
          <span>name</span>
          
        </div>
        <div className="input">
             <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className={!password == "" ? "inputfild" : "" }/>
            <span>Password</span>
        </div>
      </div>
<button onClick={alldata}>Submit</button>
<NavLink to="/"><button >Login</button></NavLink>
    </div>
    </main>
    <ToastContainer />
    </>
  )
}

export default Signup