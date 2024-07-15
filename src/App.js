import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritePage';
import SettingPage from './pages/SettingPage';
import ChartPage from './pages/ChartPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/setting' element={<SettingPage />} />
      <Route path='/chart' element={<ChartPage />} />
      <Route path='/user' element={<UserPage />} />
    </Routes>
  );
}

export default App;
