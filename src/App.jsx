import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Applications, Contact, Features, Hero, Navbar, Portfolio, Technical, Usage } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="features" className='relative z-30 bg-primary'>
            <Features />
          </div>
          <div id="technical" className='relative z-30 bg-primary'>
            <Technical />
          </div>
          <div id="usage" className='relative z-30 bg-primary'>
            <Usage />
          </div>
          <div id="applications" className='relative z-30 bg-primary'>
            <Applications />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary'>
            <Portfolio />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
