import "./App.css";
import Main from "./components/main";

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
      <Main />
    </div>
  );
}

export default App;
