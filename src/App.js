import "./App.css";
import BottomBread from "./components/BottomBread/BottomBread";
import Cheese from "./components/Cheese/Cheese";
import Lettuce from "./components/Lettuce/Lettuce";
import Meat from "./components/Meat/Meat";
import TopBread from "./components/TopBread/TopBread";
import Tomato from "./components/Tomato/Tomato";

const toggle = () => {
  console.log("Component clicked.");
};

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
    </div>
  );
}

export default App;
