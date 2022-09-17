import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import ApexFromFlask from './ApexFromFlask';
function DataFetch2() {


  
    const [data,setData]=useState([])
    useEffect(() => {
      try{
axios.get('http://127.0.0.1:5000/hi')
.then(res=>{
console.log(res.data.data)
setData(res.data.data)
})
      }
       catch(err){
        console.log(err)
       }
      
      }, []);
   
  return (
   <div>
    <ApexFromFlask dataarr={data}/>
   </div>
  )
}

export default DataFetch2
