// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import DataFetcher from "./component/DataFetcher";
import OptimizedDataFetcher from "./component/OptimizedDataFetcher";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <DataFetcher /> */}
      <OptimizedDataFetcher />
    </div>
  );
}

export default App;
