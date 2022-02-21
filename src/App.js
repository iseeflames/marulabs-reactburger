import BottomBread from "./components/BottomBread/BottomBread";
import Cheese from "./components/Cheese/Cheese";
import Lettuce from "./components/Lettuce/Lettuce";
import Meat from "./components/Meat/Meat";
import TopBread from "./components/TopBread/TopBread";
import Tomato from "./components/Tomato/Tomato";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="components-wrapper">
        <TopBread />
        <Tomato name="Tomato" />
        <Meat name="Beef" />
        <Cheese />
        <Lettuce />
        <Meat name="Beef" />
        <BottomBread />
      </div>
      <p>
        Built by <a href="">Phomolo Phiri</a> &copy; 2022
      </p>
    </div>
  );
}

export default App;
