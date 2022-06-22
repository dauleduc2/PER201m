import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Welcome from "./components/welcome";
import Comment from "./components/comment";
import Car from "./components/car";
import Menu from "./components/MenuComponent";

const commentData = {
  date: new Date(),
  text: "I hope u enjoy my restaurant",
  author: {
    name: "alberto",
    avatarUrl: "./images/alberto.png",
  },
};

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
