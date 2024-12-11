import React, { useState } from 'react';
import { useEffect } from 'react';
import useDebounce from "../src/hooks/useDebounce"

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 5000); 

    return (
      <>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type to search..."
        />
        <div>Debounced Value: {debouncedValue}</div>
        </>
    );
};

export default App;
