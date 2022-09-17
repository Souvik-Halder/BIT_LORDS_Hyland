import React, { useState,useEffect } from 'react'
import axios from'axios'
import ApexChart from './ApexChart'
function DataFetch() {
  const datearr=[]
  const openarr=[]
  const closearr=[]

    const [datas,setData]=useState([])
    const [link,setLink]=useState('data')
 
    useEffect(()=>{
        
        axios.get(`http://localhost:8000/${link}`)
        .then(res=>{
        
            console.log(res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[link])

    datas.map((data,index)=>{
      datearr.push(data.Date)
      openarr.push(parseFloat(data.Open))
      closearr.push(parseFloat(data.Close))
    })

   

  //  console.log(datearr)
  //  console.log("open")
  //  console.log(openarr)
  return (

    <div>
    <select name=""  onChange={(e)=>{setLink(e.target.value)}} id="">
      <option value="data">Infosys</option>
      <option value="tcsdata">TCS</option>
      <option value="samsungdata">Samsung</option>
      <option value="autodeskdata">AutoDesk</option>
      <option value="cognizatdata">Cognizant</option>
    </select>
  
      <ApexChart datearr={datearr} openarr={openarr} closearr={closearr}/>

    </div>
  )
}

export default DataFetch
