import { useState } from "react";
import ShowState from "./components/ShowState";

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState(0);

  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseNumber = () => {
    setNumber((prev) => prev - 1);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>+</button>
        <input type="text" placeholder="Change Text" onChange={onChangeText} />
      </div>
      <ShowState number={number} text={text} />
    </div>
  );
};

export default App;
