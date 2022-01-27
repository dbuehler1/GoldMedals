import React, {Component} from 'react';
import Country from './Components/Country'
import './App.css';


class App extends Component {
  state = {
    // countryName: 'USA', goldMedals: 0
    countries: [
        {id: 1, countryName: 'USA ', goldMedals: 2, silverMedals: 4, bronzeMedals: 6},
        {id: 2, countryName: 'Poland ', goldMedals: 2, silverMedals: 5, bronzeMedals: 9},
        {id: 3, countryName: 'China ', goldMedals: 4, silverMedals: 2, bronzeMedals: 3},
        {id: 4, countryName: 'Czechoslovakia ', goldMedals: 1, silverMedals: 5, bronzeMedals: 6},
        {id: 5, countryName: 'Canada ', goldMedals: 3, silverMedals: 9, bronzeMedals: 1},
    ],
    
  }
  addMedal = (medalType, cid) => {
    
    const countries = this.state.countries;
    const CID = countries.findIndex(i =>i.id === cid);
    console.log(CID);
    if(medalType==='brown') {
        countries[CID].bronzeMedals += 1;
    }
    else if(medalType==='silver') {
      countries[CID].silverMedals += 1;
    }
    else if(medalType==='goldenrod') {
      countries[CID].goldMedals += 1;
    }
    this.setState({ countries: countries});
}
removeMedal = (medalType, cid) => {
    const countries = this.state.countries;
    const CID = countries.findIndex(i =>i.id === cid);
    if(medalType==='brown' && countries[CID].bronzeMedals >= 1) {
      countries[CID].bronzeMedals -= 1;
    }
    else if(medalType==='silver' && countries[CID].silverMedals >= 1) {
      countries[CID].silverMedals -= 1;
    }
    else if(medalType==='goldenrod' && countries[CID].goldMedals >= 1) {
      countries[CID].goldMedals -= 1;
    }
    this.setState({ countries: countries});
}

  

  render(){
    
    const countries = this.state.countries;
  const golds = countries.reduce((a, b) => a + b.goldMedals, 0);
  const silvers = countries.reduce((a, b) => a + b.silverMedals, 0);
  const bronzes = countries.reduce((a, b) => a + b.bronzeMedals, 0);
  const totalMedals = golds + silvers + bronzes;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Total Medals: {totalMedals}</h1>
        </header>

        { this.state.countries.map(country => 
              <Country 
              key={country.id}
              country={country}
              addMedal={  this.addMedal}
              removeMedal={  this.removeMedal}
              />                
        )}
      </div>
    );
  }
  
}

export default App;
