import { useState } from "react";
import "./App.css";
import CryptoPrices from "./CryptoPrices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CryptoPrices />
    </>
  );
}

export default App;
