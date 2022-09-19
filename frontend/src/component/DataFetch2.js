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

      const dayarr=[]
  for (let x = 0; x <data.length; x++) {
    dayarr.push(x+1)
    console.log(dayarr)
  }
   
  return (
   <div className='App'>
    <ApexFromFlask dataarr={data} dayarr={dayarr}/>
   </div>
  )
}

export default DataFetch2
