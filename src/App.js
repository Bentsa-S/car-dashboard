import {BrowserRouter} from "react-router-dom";
import Main from "./Components/main/main";
import Manu from "./Components/manu/manu";
import style from './Components/main/header/Header.module.css'

function App(props) {
  return (
    <div>
        <BrowserRouter>
            <div className={style.flexApp}>
                <Manu/>
                <Main  />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
