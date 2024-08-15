import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {

  return (
    <>
      <Background/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
