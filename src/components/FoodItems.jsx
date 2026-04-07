import Item from "./Item"

function FoodItems({items, handleOnChange}) {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="w-50 w-md-25">
       <ul className="list-group ">
         {items.map((item) => (
           <Item key={item}
            item={item} 
            handleOnChange={handleOnChange}/>
          ))}
          </ul>
        </div>
       </div>
  )
}

export default FoodItems
