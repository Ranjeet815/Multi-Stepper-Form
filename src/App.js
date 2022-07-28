import LinearStepper from "./MainStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import logo from './image/logo.png'
function App() {
  return (
  
    <div className="userWork">
      <div className="logo">
        <img className="imglogo" src={logo} alt="logo"/>
      </div>
        <LinearStepper />
      </div>
  
  );
}

export default App;
