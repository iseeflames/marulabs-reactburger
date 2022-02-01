import "./App.css";
import BottomBread from "./components/BottomBread/BottomBread";
import Cheese from "./components/Cheese/Cheese";
import Lettuce from "./components/Lettuce/Lettuce";
import Meat from "./components/Meat/Meat";
import TopBread from "./components/TopBread/TopBread";
import Tomato from "./components/Tomato/Tomato";

function App() {
  return (
    <div className="App">
      <TopBread />
      <Meat name="Beef" />
      <Tomato name="Tomato" />
      <Cheese />
      <Meat name="Beef" />
      <Lettuce />
      <BottomBread />
    </div>
  );
}

export default App;
