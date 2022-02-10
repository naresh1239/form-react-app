import React from "react";

import {Routes,Route} from "react-router-dom"
import Loging from "./Loging"
import Signup from "./Signup";
import List from "./List";


function App() {

  
  return (
    
    <>
  <Routes>
    <Route path="*" element={<Loging/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/list" element={<List />}></Route>
  </Routes>

    </>
  );
}

export default App;
