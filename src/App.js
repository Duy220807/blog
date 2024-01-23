import { useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(0);
  function apple() {
    setData(data + 1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={apple}>CLick me</button>
    </div>
  );
}

export default App;
