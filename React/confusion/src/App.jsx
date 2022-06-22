import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Welcome from "./components/welcome";
import Comment from "./components/comment";
import Car from "./components/car";
import Menu from "./components/Menu";
import { DISHES } from "../shared/dish";
import { useState } from "react";

const commentData = {
  date: new Date(),
  text: "I hope u enjoy my restaurant",
  author: {
    name: "alberto",
    avatarUrl: "./images/alberto.png",
  },
};

function App() {
  const [dishes, setDishes] = useState(DISHES);
  return (
    <div className="App">
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
