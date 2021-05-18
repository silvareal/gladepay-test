import "./App.scss";
import { Router } from "@reach/router";
import Guide from "./pages/Guide/Guide";
function App() {
  return (
    <Router>
      <Guide path="/" />
    </Router>
  );
}

export default App;
