import React, {Component} from 'react';
import Country from './Components/Country'
import './App.css';


class App extends Component {
  state = {
    // countryName: 'USA', goldMedals: 0
    countries: [
        {id: 1, countryName: 'USA', goldMedals: 0},
        {id: 2, countryName: 'Poland', goldMedals: 2},
        {id: 3, countryName: 'China', goldMedals: 4},
        {id: 4, countryName: 'Czechoslovakia', goldMedals: 1},
        {id: 5, countryName: 'Canada', goldMedals: 3},
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        { this.state.countries.map(country => 
              <Country 
              key={country.id}
              country={country}/>                
        )}
      </div>
    );
  }
  
}

export default App;
