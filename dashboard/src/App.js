import { Route, Routes } from 'react-router-dom'
import Header from './component/Header';
import SideMenu from './component/SideMenu';
import Home from './pages/Home';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
