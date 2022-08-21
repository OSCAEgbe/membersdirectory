import './App.css';
import Card from "./components/Card";
import React from "react";

function App() {
  return (
    <div className="container">
        <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default App;
