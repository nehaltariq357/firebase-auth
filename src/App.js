import { Outlet } from 'react-router-dom';
import './App.css';
import app from './firebase';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;




