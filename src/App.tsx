import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './page/Home';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={startFadeOut} />}
      {!loading && <Home />}
    </>
  );
}

export default App;
