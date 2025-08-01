import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState("");
  const [currencyType, setCurrencyType] = useState("INRtoEuro");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const amt = parseFloat(amount);
    if (isNaN(amt)) {
      alert("Please enter a valid number");
      return;
    }

    let conversion = 0;
    if (currencyType === "INRtoEuro") {
      conversion = amt / 90;
      alert(`Converting to Euro. Amount is €${conversion.toFixed(2)}`);
      setResult(`€${conversion.toFixed(2)}`);
    } else {
      conversion = amt * 90;
      alert(`Converting to Rupees. Amount is ₹${conversion.toFixed(2)}`);
      setResult(`₹${conversion.toFixed(2)}`);
    }
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Amount:{" "}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Convert:{" "}
          <select
            value={currencyType}
            onChange={(e) => setCurrencyType(e.target.value)}
          >
            <option value="INRtoEuro">INR to Euro</option>
            <option value="EuroToINR">Euro to INR</option>
          </select>
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {result && (
        <h3 style={{ color: "green", marginTop: "20px" }}>
          Converted Value: {result}
        </h3>
      )}
    </div>
  );
};

export default CurrencyConvertor;
