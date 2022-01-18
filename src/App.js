import React from "react";

// ##### importing css files
import "./App.css";

const App = () => {
  const [number, setNumber] = React.useState(0);
  const [arr, setArr] = React.useState([]);

  let tempArr = [];

  //  function to handle change
  const handleChange = (e) => {
    setNumber(e.target.value);
    let x = e.target.value * e.target.value;

    for (let i = 1; i <= x; i++) {
      tempArr[i] = i;
    }
    setArr(tempArr);
    tempArr = [];
  };

  // function to generate random number in range 
  const randNo = () => {
    let x = Math.floor(Math.random() * (number * number - 0) + 1);
    return x;
  };

  // handleDragEnter
  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  //  handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // drag start
  const dragStart = (event) => {
    event.dataTransfer.setData("id", event.target.id);
  };

  // handleDrop
  const handleDrop = (event) => {
    event.preventDefault();

    let data = event.dataTransfer.getData("id");
    let x = document.getElementById(data).innerText;
    //  basicalyy i swap here and and changed the inner html of both ids 
    document.getElementById(data).innerHTML = event.target.innerText;
    event.target.innerHTML = x;
  };

  return (
    <div className="body">
      <input
        type={"number"}
        onChange={handleChange}
        value={number}
        style={{ margin: "10px", padding: "10px" }}
      />
      <p className="gridno">
        {number}x{number}
      </p>
      {/* grid section start from here  */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${number},1fr)`,
          gridTemplateColumns: `repeat(${number},1fr)`,
          height: "auto",
        }}
      >
        {arr.map((_, i) => (
          <div
            className="cell"
            key={i}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
          >
            <p
              className="draggable"
              id={`id${i}`}
              onDragEnter={handleDragEnter}
              onDragStart={dragStart}
              draggable={true}
            >
              {randNo()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
