import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <Routes >
        <Route path = "/" element = { <HomePage/> }/> 
      </Routes >
    </div>
  );
}

export default App;
