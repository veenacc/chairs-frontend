import {ChairsIndex} from "./ChairsIndex";
import axios from "axios";
import { useState } from "react";
import {ChairsNew} from "./ChairsNew";
import { Modal } from "./Modal";



export function Content() {

  const [chairs, setChairs] = useState([]);

  const handleChairsIndex=()=>{
    console.log("handling index")
    axios.get("http://localhost:3000/chairs.json").then (response=>{
      console.log(response.data);
      setChairs(response.data);
    })
    
  }
  const handleChairsNew=(params)=>{
    axios.post("http://localhost:3000/chairs.json",params).then (response=>{
      setChairs([...chairs, response.data]);
      console.log(response.data)
    })
   
  }

  


  return (
    <main>
      <h1>Welcome to React!</h1>
      <ChairsNew onHandleChairsNew={handleChairsNew}/> <hr />
      
      <button onClick ={handleChairsIndex}>chairs data</button>
      <ChairsIndex chairs={chairs}/>
      <Modal show = {true} >
        <div>More details here</div>
      </Modal>

    </main>
  )
}