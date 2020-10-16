import React, { useEffect, useState, useRef } from 'react';
import Button from './components/Button/Button';
import Window from './components/Window/Window';
import './App.scss';

function App() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const closeWindow = () => {
    setIsWindowOpen(false); 
  };

  const ref = useRef(null);
 
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsWindowOpen(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className='App'>
      {!isWindowOpen && (
        <Button 
          setIsWindowOpen={setIsWindowOpen}
          isWindowOpen={isWindowOpen}
        />
      )}
      {isWindowOpen && (
        <div ref={ref}>
          <Window 
            closeWindow={closeWindow}
            setIsWindowOpen={setIsWindowOpen}
          />
        </div>
      )}
    </div>
  );
}

export default App;
