import "./App.css";
import Test from "./Test";
import { TestProvider } from "./testContext";

function App() {
  return (
    <div className="App">
      <TestProvider>
        Provider 1
        <Test />
        <Test />
      </TestProvider>
      <TestProvider>
        Provider 2
        <Test />
        <Test />
      </TestProvider>
    </div>
  );
}

export default App;
