import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/About-us';
import Articles from './pages/Articles';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='/' element={<Main/>} />
            <Route path='/About-us' element={<AboutUs/>} />
            <Route path='/Articles' element={<Articles/>} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
