import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import settings from './settings.json';

export default function App() {
  useEffect(() => {
    document.title = settings.appTitle;
  });

  return (
    <React.Fragment>

      <CssBaseline />
      <Outlet />
    </React.Fragment>

  );
}