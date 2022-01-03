import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './components/First/first';
import Five from './components/Five/five';
import Fourth from './components/Fourth/fourth';
import Nine from './components/Nine/nine';
import Second from './components/Second/second';
import Seven from './components/Seven/seven';
import Third from './components/Third/third';
import Thirteen from './components/Thirteen/thirteen';
import Fourteen from './components/Fourteen/Fourteen';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<First />} />
        <Route exact path='/second' element={<Second />} />
        <Route exact path='/third' element={<Third />} />
        <Route exact path='/nine' element={<Nine />} />
        <Route exact path='/fourth' element={<Fourth />} />
        <Route exact path='/five' element={<Five />} />
        <Route exact path='/seven' element={<Seven />} />
        <Route exact path='/thirteen' element={<Thirteen />} />
        <Route exact path='/fourteen' element={<Fourteen />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
