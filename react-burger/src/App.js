import "./App.css";
import BottomBread from "./components/BottomBread/BottomBread";
import Meat from "./components/Meat/Meat";
import TopBread from "./components/TopBread/TopBread";
import Vegetable from "./components/Vegetable/Vegetable";

function App() {
  return (
    <div className="App">
      <TopBread />
      <Meat name="Beef" />
      <Vegetable name="Tomato" />
      <BottomBread />
    </div>
  );
}

export default App;
