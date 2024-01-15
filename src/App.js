import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Restview from './pages/Restview';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Restaurant-view' element={<Restview/>}/>
      </Routes>  
      <Footer/>
    </>
  );
}

export default App;
