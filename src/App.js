import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs.js'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
   < div className='App container'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/jobs' element={<Jobs/>} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
