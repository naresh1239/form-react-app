import React, { useState, useEffect } from "react";
import "./Main.css"
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Loging = () => {
  let navigate = useNavigate();
  const [inputemail, setinputemail] = useState();
  const [password, setpassword] = useState();
  const [data, setdata] = useState();
  const [show, setshow] = useState([]);
  const [localset, setlocalset] = useState();
  const [classbox, setclassbox] = useState("box");

  const alldata = (deleteme) => {
    let localtextarry;
    let localdata = localStorage.getItem("localdata");

    if (localdata == null) {
      localtextarry = [];
    } else {
      localtextarry = JSON.parse(localdata);
    }

    setshow(localtextarry);

    for (const key in show) {
      if (inputemail === show[key].email && password == show[key].password ) {
        return navigate("/list")
      

      } else {
        toast.error('email or password wrong 😢!', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }
    console.log(localset);
    deleteme();
  };
  const deleteme = () => {
    setTimeout(() => {
      setinputemail("");
      setpassword("");


    }, 2000);
  };

  
  return (
    <>
      <main>
        <div className={classbox}>
          <div className="title">
            <h1>User Login</h1>
          </div>
          <div className="input_fild">
            <div className="input">
              <input
                type="email"
                value={inputemail}
                onChange={(e) => setinputemail(e.target.value)}
                className={!inputemail == "" ? "inputfild" : ""}
              />
              <span>Email Address</span>
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className={!password == "" ? "inputfild" : ""}
              />
              <span>Password</span>
            </div>
          </div>
          <button
            onClick={() => {
              alldata(deleteme);
            }}
          >
            Submit
          </button>
         <NavLink to="/signup"><button >
            signup
          </button>
          </NavLink>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Loging;
