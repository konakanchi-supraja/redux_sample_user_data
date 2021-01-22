import {Provider} from "react-redux";
import './App.css';
import Store from "./store"
import UserContainer from "./userContainer"

function App() {
  return (
    <div className="App">
      <Provider store={Store}><UserContainer /></Provider>
    </div>
  );
}

export default App;
