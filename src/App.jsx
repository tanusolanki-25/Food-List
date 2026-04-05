import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from "./components/FoodItems";
import Errors from "./components/Errors";
import FoodHeading from "./components/FoodHeading";


function App() {
  let foodItems = ['dal','rice','roti','sabzi','salad']
  return (
    <>
      <FoodHeading />
      <Errors items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
