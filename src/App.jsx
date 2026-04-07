import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from "./components/FoodItems";
import Errors from "./components/Errors";
import FoodHeading from "./components/FoodHeading";
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  let [foodItems, setFoodItems] = useState([])
  
  const onKeyDown = (value) =>{
      let newArr = [...foodItems, value]
      setFoodItems(newArr)
  }

  const handleOnChange =(itemName)=>{
    let newArr = foodItems.filter((item) => item !== itemName)
    setFoodItems(newArr);
  }

  return (
    <>
      <FoodHeading />
      <FoodInput handleKeyDown={onKeyDown}/>
      <Errors items={foodItems} />
      <FoodItems items={foodItems} handleOnChange={handleOnChange} />
    </>
  );
}

export default App;
