export function ChairsIndex(props) {

  return (
   <div>
    {/* console.log("from index"); */}
    {props.chairs.map((chairs) => (
      <div key={chairs.id}>
        <p>id: {chairs.id}</p>
        <p>Type: {chairs.chairType}</p>
        <p>color: {chairs.color}</p>
        <p>price: {chairs.price}</p> 
        <button onClick={()=>props.onShowChairInfo(chairs) }>Show Info</button>
        <hr />
      </div>
    ))}
   </div>
  )
}
// onClick={()=>props.onShowChairInfo(chairs) -->wrapped onclick in a function to stop auto opening of modal for each item in index