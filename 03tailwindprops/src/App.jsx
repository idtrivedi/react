import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Ishan",
    age: 36,
  };
  return (
    <>
      <h1 className="bg-blue-400 p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="Ishan Trivedi" btnText="Click Me" />
      <Card username="Lauren Vincenti" />
    </>
  );
}

export default App;
