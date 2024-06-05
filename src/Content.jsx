import {ChairsIndex} from "./ChairsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import {ChairsNew} from "./ChairsNew";
import { Modal } from "./Modal";
import {ChairShow} from "./ChairShow"



export function Content() {

  const [chairs, setChairs] = useState([]);
  const [isChairShow, setIsChairShow] = useState(false);
  const [currentChair, setCurrentChair]=useState({})

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

  const handleChairShow=(chair)=>{
    console.log("from handle chair show")
    setIsChairShow(true)
    setCurrentChair(chair)

  }
  const handleCloseModal=()=>{
    console.log("closing modal")
    setIsChairShow(false)

  }

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ChairsNew onHandleChairsNew={handleChairsNew}/> <hr />
      
      {/* <button onClick ={handleChairsIndex}>chairs data</button> */}
      
      <ChairsIndex chairs={chairs} onShowChairInfo={handleChairShow}/>
      
      <Modal show = {isChairShow} onClose={handleCloseModal}>
        <div>More details here</div>
        <ChairShow chairs={currentChair}/>
      </Modal>

    </main>
  )
}