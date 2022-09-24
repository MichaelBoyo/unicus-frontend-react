import ButtonAppBar from './components/AppBar';
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Outlet/>
    </div>
  );
}

export default App;
