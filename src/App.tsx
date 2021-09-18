// Imports
// ========================================================
import './App.css'
import React, { useState, useEffect } from 'react'
import { ethers, getDefaultProvider } from 'ethers';

// Contract
import { CONTRACT_ADDRESS } from './utils/constants';
import DevContract from './contract/Dev.json'

// Main Component
// ========================================================
/**
 * 
 * @returns 
 */
const App = () => {
  // State / Props
  const [count, setCount] = useState(0)

  // Functions

  // Hooks
  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== "undefined") {
        console.log('Ethereum enabled!')
         // Note: this will be throttled based on the user's personal browser so we will have to handle error handling
        //  ========= NOTICE =========
        //  Request-Rate Exceeded  (this message will not be repeated)
        //  
        //  The default API keys for each service are provided as a highly-throttled,
        //  community resource for low-traffic projects and early prototyping.
        //  
        //  While your application will continue to function, we highly recommended
        //  signing up for your own API keys to improve performance, increase your
        //  request rate/limit and enable other perks, such as metrics and advanced APIs.
        //  
        //  For more details: https://docs.ethers.io/api-keys/
        //  ==========================
        // @TODO: uncomment this when it's ready
        //  const provider = getDefaultProvider('homestead');
        //  const contract = new ethers.Contract(CONTRACT_ADDRESS, DevContract.abi, provider);

        // try {
        //   const data = await contract.tokenURI(1);
        //   console.log({ data });
        // } catch (error) {
        //   console.log({ error });
        // }
      }
    };

    init();
  }, []);

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

// Exports
// ========================================================
export default App
