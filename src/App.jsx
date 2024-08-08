import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { DogDataProvider } from './Context/DogDataContext';

export default function Layout() {

    return (
        <DogDataProvider>
          <Header/>
          <Outlet/>
          <Footer/>
        </DogDataProvider> 
    )
}
