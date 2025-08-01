import React from "react";
import "./App.css";
import Office from './Office.jpg'
// Office data
const officeSpaces = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: Office
  },
  {
    name: "WeWork",
    rent: 70000,
    address: "Bangalore",
    image: Office
  },
  {
    name: "SmartWorks",
    rent: 55000,
    address: "Pune",
    image: Office},
];

function App() {
  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((office, index) => (
        <div key={index} className="office-card">
          <img src={office.image} alt="Office" className="office-img" />
          <h2>Name: {office.name}</h2>
          <p
            className="rent"
            style={{ color: office.rent < 60000 ? "red" : "green" }}
          >
            Rent: Rs. {office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
