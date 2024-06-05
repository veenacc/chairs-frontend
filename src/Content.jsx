import {ChairsIndex} from "./ChairsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import {ChairsNew} from "./ChairsNew";
import { Modal } from "./Modal";



export function Content() {

  const [chairs, setChairs] = useState([]);
  const [isChairShow, setIsChairShow] = useState(false);

  const handleChairsIndex=()=>{
    console.log("handling index")
    axios.get("http://localhost:3000/chairs.json").then (response=>{
      console.log(response.data);
      setChairs(response.data);
    })
    
  }
  useEffect(handleChairsIndex,[]);

  const handleChairsNew=(params)=>{
    axios.post("http://localhost:3000/chairs.json",params).then (response=>{
      setChairs([...chairs, response.data]);
      console.log(response.data)
    })
   
  }

  const handleChairShow=()=>{
    console.log("Show more info about item")
  }
 

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ChairsNew onHandleChairsNew={handleChairsNew}/> <hr />
      
      {/* <button onClick ={handleChairsIndex}>chairs data</button> */}
      <button onClick={handleChairShow}>Show Info</button>
      <ChairsIndex chairs={chairs}/>
      
      <Modal show = {isChairShow} >
        <div>More details here</div>
      </Modal>

    </main>
  )
}