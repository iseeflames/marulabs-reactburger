import "./App.css";
import BottomBread from "./components/BottomBread/BottomBread";
import Vegetable from "./components/Vegetable/Vegetable";

function App() {
  return (
    <div className="App">
      <Vegetable name="Tomato" />
      <BottomBread />
    </div>
  );
}

export default App;
