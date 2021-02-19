import "assets/scss/style.scss";
import LandingPages from "pages/LandingPages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPages}></Route>
      </Router>
    </div>
  );
}

export default App;
