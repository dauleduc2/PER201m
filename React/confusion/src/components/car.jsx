import React from "react";

function Car() {
  const [color, setColor] = React.useState("red");
  const [brand, setBrand] = React.useState("Ford");
  const [model, setModel] = React.useState("Mustang");
  const [year, setYear] = React.useState(1964);

  const _changeColor = () => {
    setColor("blue");
  };

  const _start = (e) => {
    alert(`Your car is ready by ${e.type}`);
  };

  return (
    <div className="">
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={_changeColor}>Change Color</button>
      <button onClick={(e) => _start(e)}>Start</button>
    </div>
  );
}

export default Car;
