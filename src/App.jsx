import { useCallback, useState } from "react";
import List from "./components/List";
const App = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState("");

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>테마변경</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;
