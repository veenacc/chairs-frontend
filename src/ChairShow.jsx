import axios from "axios"

export function ChairShow(props) {

const handleSubmit=(event)=>{
  event.preventDefault()
  const params = new FormData(event.target);
  props.onChairUpdate(params,props.chairs.id)
  
}

const handleDeleteButton=()=>{
  // console.log(`delete chair ${props.chairs.id}`)
  
  props.onHandleDelete(props.chairs.id)
  
}

  return (
    <div>
      <h1>Chair information</h1>
      {/* <p>Chair Type: {props.chairs.id}</p> */}
      <p>Chair Type: {props.chairs.chairType}</p>
      <p>Price: {props.chairs.price}</p>

      {/* update / edit item form which will show up in the modal */}
        <form onSubmit={handleSubmit}>      
          <div>
            Chair Type: <input defaultValue={props.chairs.chairType} name="chairType" type="text" />
          </div>
          <div>
            color: <input defaultValue={props.chairs.color} name="color" type="text" />
          </div>
          <div>
            price: <input defaultValue={props.chairs.price} name="price" type="text" />
          </div>
          <br />
          <button type="submit">Update item</button>
        </form>
      
       {/* Delete item from the list */}
       <br />
       <div>
          <button onClick={handleDeleteButton}>Delete</button>
       </div>

    </div>
  );
}