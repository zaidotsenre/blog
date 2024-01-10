import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';


export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Navbar />
        <Outlet />
      </Container>
    </React.Fragment>

  );
}