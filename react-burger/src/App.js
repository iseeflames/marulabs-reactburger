import "./App.css";
import BottomBread from "./components/BottomBread/BottomBread";
import Meat from "./components/Meat/Meat";
import Vegetable from "./components/Vegetable/Vegetable";

function App() {
  return (
    <div className="App">
      <Meat name="Beef" />
      <Vegetable name="Tomato" />
      <BottomBread />
    </div>
  );
}

export default App;
