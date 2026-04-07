import { useState } from "react";

function FoodInput({ handleKeyDown }) {
  const [inputValue, setInputValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleKeyDown(inputValue); // parent ko value bhej di
      setInputValue(""); // input empty kar diya
    }
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div className="w-50">
        <input
          type="text"
          placeholder="Enter your food here..."
          className="form-control form-control-lg shadow rounded text-center"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
    </div>
  );
}

export default FoodInput;