import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <BMI />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header>
        <img src="img/logo.jpg" alt="BMI Calculator" />
        <h1>BMI Calculator</h1>
      </header>
    </div>
  );
}

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  function calculateBMI() {
    setBMI((weight / (height / 100) ** 2).toFixed(2));
  }

  return (
    <div>
      <input
        type="number"
        value={height}
        placeholder="Enter your height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        value={weight}
        placeholder="Enter your weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate my BMI</button>
      <div className="result">
        <p>BMI: {bmi}</p>
      </div>
    </div>
  );
}
