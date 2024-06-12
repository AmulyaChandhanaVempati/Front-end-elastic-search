import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {useRef} from 'react';

import './Search.css';
const SearchBar = () => {
    const [data, setData] = useState<any>();
    const [data1, setData1] = useState<any>();
    const inputRef = useRef();

   
    const handleClick = (event:any) =>{
        //const todoid = 'MNCH Switzerland 4141';
        event.preventDefault();
        console.log(data);
        fetch(`http://localhost:9900/ESapi/search/${data}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData1(json);
            });
    }
return(<>
<form onSubmit={handleClick} >
<div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
<div className="wrap">
   <div className="search">
      <input type="text" name = "inputtext" className="searchTerm" value={data} onChange={(e) => setData(e.target.value)} placeholder="What are you looking for?"></input>
      <button type="submit" className="searchButton" >
        <FontAwesomeIcon icon={faSearch} />
     </button>
    </div> 
   </div>
</div>
</form>
</>

)
};

export default SearchBar;