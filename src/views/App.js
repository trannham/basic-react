import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Tran Nham</p>
        <MyComponent />
      </header>
    </div>
  );
};

export default App;
