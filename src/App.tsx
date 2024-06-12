import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MultipleSelectPlaceholder from './components/SelectTable/SelectTable';
import SearchBar from './components/Search/Search';

const TableContext = React.createContext({});

function App() {
  const [data, setData] = useState({});

  return (
    
      <div className="App">
        <SearchBar></SearchBar>
      </div>
    

  );
}


export default App;
