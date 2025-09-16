import React, { useState } from 'react';
import useDebounce from "../src/hooks/useDebounce"

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 5000);

  // throttle and debounce code

  function tempDebounce(func, delay) {
    let timerId;
    return function (...args) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    } 
  } 

  const tempDebounceLog = tempDebounce((text) => {
    console.log('tempDebounceLog', text)
  }, 4000)


  function tempThrottle(func, delay) {
    let prevCall = 0
    return function (...args) {
      const now = Date.now();
      if (now - prevCall > delay) {
        prevCall = now
        func.apply(this, args)
      }
    }
  }

  const tempThrottleLog = tempThrottle((text) => {
    // console.log('tempThrottleLog', text)
  }, 4000)


  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    tempDebounceLog(e.target.value)
    tempThrottleLog(e.target.value)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      margin: 0,
      overflow: 'auto'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Debounce Demo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          maxWidth: '100%',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px',
        maxWidth: '100%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: '0', fontSize: '18px' }}>
          <strong>Debounced value:</strong> {debouncedValue || 'Type to see the debounced value'}
        </p>
      </div>
    </div>
  );
};

export default App;
