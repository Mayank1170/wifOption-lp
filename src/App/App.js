import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="h-screen pt-[30px] overflow-hidden" style={{
      backgroundImage: 'url("./assets/wifoptionsBg.svg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
