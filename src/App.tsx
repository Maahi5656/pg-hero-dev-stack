import React from 'react';
import { Suspense } from 'react';


import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Technology from './components/technology/Technology';
import type { ITechnology } from './types/technologyTypes';

const dataFetch = async():Promise<ITechnology[]>=>{
  const response = await fetch('./data.json');
  const data = await response.json();

  return data;
}


function App() {

  const dataPromise = dataFetch();
 
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technology dataPromise={dataPromise} />
      </Suspense>
      
    </>
  )
}

export default App
