import axios from "axios"

export function ChairsNew(props) {

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("from new form")
    const params = new FormData(event.target)
    props.onHandleChairsNew(params);
    event.target.reset();
  }
  
  return (

   <div>

    <form onSubmit={handleSubmit}>
        <div>
          Type: <input name="chairType" type="text" />
        </div>
        <div>
          color: <input name="color" type="text" />
        </div>
        <div>
          price: <input name="price" type="text" />
        </div> <br />
      
        <button type="submit">Create chair</button>
    </form>
    
    
   </div>
  )
}