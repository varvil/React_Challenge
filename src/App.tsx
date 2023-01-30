import "./App.css";
import Footer from "./footer/Footer";
import InputArea from "./inputArea/InputArea";
import Items from "./items/Items";

function App() {
  return (
    <div className="App">
      <InputArea />
      <Items />
      <Footer/>
    </div>
  );
}

export default App;
