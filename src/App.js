import logo from './logo.svg';
import Navi from './Components/Navi';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router';
import Main from './Screens/Main';
import Admin from './Screens/Admin';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Main />} />
<Route  path="/admin" element={<Admin />} />      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
