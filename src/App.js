import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import SearchBox from './components/SearchBox';


const randomId = Math.floor(Math.random()*126)+1;

const App = () => {
  const [ricks, setRicks] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRicks(res.data));
  }, [])
  console.log(ricks)
  return(
    <div className="App">
      <SearchBox setRicks={setRicks} ricks={ricks}  />
      <LocationInfo ricks={ricks} />
      <ResidentList lists={ricks.residents} />
    </div>
  );
}

export default App;
