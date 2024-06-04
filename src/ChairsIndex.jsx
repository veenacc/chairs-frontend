export function ChairsIndex(props) {
  return (
   <div>
    {/* console.log("from index"); */}
    {props.chairs.map((chairs) => (
      <div key={chairs.id}>
        <p>id: {chairs.id}</p>
        <p>Type: {chairs.chairType}</p>
        <p>color: {chairs.color}</p>
        <p>price: {chairs.price}</p> <hr />
      </div>
    ))}
   </div>
  )
}