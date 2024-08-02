import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      
      <h1>Hello world</h1>
      
    </div>
  );
}

export default App;
