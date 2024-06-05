export function ChairShow(props) {
  return (
    <div>
      <h1>Chair information</h1>
      <p>Chair Type: {props.chairs.id}</p>
      <p>Chair Type: {props.chairs.chairType}</p>
      <p>Price: {props.chairs.price}</p>
      
    </div>
  );
}