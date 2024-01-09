
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>

  );
}