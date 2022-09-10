import './App.css';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e5b56a522d61f69b34f8f9efb7f5e973`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setLocation('');
    }
  }

  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder ="Enter location"
          onKeyPress={searchLocation}
          type='text'
        />
      </div>
      <div className="container">
        {/* Top Container */}
        <div className='top'>
          <div className='location'>
            <p>{data.name && data.name}</p>
          </div>
          <div className='temp'>
            <h1>{data.main && data.main.temp.toFixed()}℉</h1>
          </div>
          <div className='description'>
            <p>{data.weather && data.weather[0].main}</p>
          </div>
        </div>
        {/* Bottom Container */}
        {data.name && 
        <div className='bottom'>
          <div className='feels'>
            <p>{data.main.feels_like.toFixed()}℉</p>
            Feels Like
          </div>
          <div className='humidity'>
            <p>{data.main.humidity}</p>
            Humidity
          </div>
          <div className='wind'>
            <p>{data.wind.speed.toFixed()} MPH</p>
            Wind Speed
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
