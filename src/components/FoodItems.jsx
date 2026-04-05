import Item from "./Item"

function FoodItems({items}) {
  return (
      <ul className="list-group w-50 mx-auto mt-4">
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </ul>
  )
}

export default FoodItems
