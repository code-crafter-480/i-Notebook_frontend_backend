import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Alert from '../src/components/Alert'


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message={"This is amazing"} />           {/* 👉 Add this #62 */}
        <div className="container">
          <Routes>
            <Route exact path="/" element= { <Home />} > </Route>
            <Route exact path="/about" element= { <About />} > </Route>
          </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
