import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './components/First/first';
import Fourth from './components/Fourth/fourth';
import Second from './components/Second/second';
import Third from './components/Third/third';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<First />} />
        <Route exact path='/second' element={<Second />} />
        <Route exact path='/third' element={<Third />} />
        <Route exact path='/fourth' element={<Fourth />} />
      </Routes>
    </div>
  );
}

export default App;
