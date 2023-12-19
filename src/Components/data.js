import {useState,createContext} from "react";
import {students} from '../Components/studentsdata';
import React from "react";

export const Context=createContext();

const Data=({children})=>{
   const [data,setdata] =useState(students);

return(
 <Context.Provider value={{data,setdata}}>
 {children}
 </Context.Provider>
)
}
export default Data;