import React, { useState, useEffect } from "react";
import Country from "./Components/Country";
import NewCountry from "./Components/NewCountry";
import "./App.css";
import { Grid } from "@mui/material";
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const apiEndpoint = "https://danielbmedals.azurewebsites.net/Api/country"
  // const apiEndpoint = "https://localhost:5001/api/country"
  // state = {
  //   // countryName: 'USA', goldMedals: 0
  //   countries: [
  // {id: 1, countryName: 'USA ', goldMedals: 2, silverMedals: 4, bronzeMedals: 6},
  // {id: 2, countryName: 'Poland ', goldMedals: 2, silverMedals: 5, bronzeMedals: 9},
  // {id: 3, countryName: 'China ', goldMedals: 4, silverMedals: 2, bronzeMedals: 3},
  // {id: 4, countryName: 'Czechoslovakia ', goldMedals: 1, silverMedals: 5, bronzeMedals: 6},
  // {id: 5, countryName: 'Canada ', goldMedals: 3, silverMedals: 9, bronzeMedals: 1},
  //   ],

  // }

  const addMedal = (medalType, cid) => {
    const mutableCountries = countries;
    const CID = countries.findIndex((i) => i.id === cid);
    console.log(CID);
    if (medalType === "brown") {
      mutableCountries[CID].bronzeMedals += 1;
    } else if (medalType === "silver") {
      mutableCountries[CID].silverMedals += 1;
    } else if (medalType === "goldenrod") {
      mutableCountries[CID].goldMedals += 1;
    }
    console.log("Mutable Countries");
    console.log(mutableCountries[CID].goldMedals);
    console.log(mutableCountries[CID].silverMedals);
    console.log(mutableCountries[CID].bronzeMedals);
    setCountries(mutableCountries.concat([]));
    console.log("State");
    console.log(countries[CID].goldMedals);
    console.log(countries[CID].silverMedals);
    console.log(countries[CID].bronzeMedals);
  };
  const removeMedal = (medalType, cid) => {
    const mutableCountries = countries;
    const CID = mutableCountries.findIndex((i) => i.id === cid);
    if (medalType === "brown" && mutableCountries[CID].bronzeMedals >= 1) {
      mutableCountries[CID].bronzeMedals = mutableCountries[CID].silverMedals - 1;
    } else if (
      medalType === "silver" &&
      mutableCountries[CID].silverMedals >= 1
    ) {
      mutableCountries[CID].silverMedals = mutableCountries[CID].silverMedals - 1;
    } else if (
      medalType === "goldenrod" &&
      mutableCountries[CID].goldMedals >= 1
    ) {
      mutableCountries[CID].goldMedals = mutableCountries[CID].goldMedals -1;
    }
    setCountries(mutableCountries.concat([]));
  };

  // const createCountry = (name) => {
    // let newCountry = {};
    // if (countries.length === 0) {
      // newCountry = {
      //   id: 1,
      //   countryName: name,
      //   goldMedals: 0,
      //   silverMedals: 0,
      //   bronzeMedals: 0,
      // };
      

    // } else {
    //   newCountry = {
    //     id: countries[countries.length - 1].id + 1,
    //     countryName: name,
    //     goldMedals: 0,
    //     silverMedals: 0,
    //     bronzeMedals: 0,
    //   };
    // }

    // setCountries(countries.concat(newCountry));
  // }

  const createCountry = async (name) => {
    const { data: post } = await axios.post(apiEndpoint, { Name: name, GoldMedals: 0, SilverMedals: 0, BronzeMedals: 0 });
    setCountries(countries.concat(post));
  }

  const deleteCountry = async (cid) => {
    // const oldCountries = countries;
    // const idLocate = oldCountries.findIndex((i) => i.id === cid);
    // console.log("Located ID:" + idLocate);

    // if (idLocate !== -1) {
    //   oldCountries.splice(idLocate, 1);
    //   console.log("deleted country: " + cid);
    //   console.log(countries);
    // } else {
    //   console.log("ID does not exist");
    // }

    // setCountries(oldCountries.concat([]));
    await axios.delete(`${apiEndpoint}/${cid}`);
    setCountries(countries.filter(country => country.id !== cid));
  };
  useEffect(() => {
    // let testCountries = [
    //   {
    //     id: 1,
    //     countryName: "USA ",
    //     goldMedals: 2,
    //     silverMedals: 4,
    //     bronzeMedals: 6,
    //   },
    //   {
    //     id: 2,
    //     countryName: "Poland ",
    //     goldMedals: 2,
    //     silverMedals: 5,
    //     bronzeMedals: 9,
    //   },
    //   {
    //     id: 3,
    //     countryName: "China ",
    //     goldMedals: 4,
    //     silverMedals: 2,
    //     bronzeMedals: 3,
    //   },
    //   {
    //     id: 4,
    //     countryName: "Czechoslovakia ",
    //     goldMedals: 1,
    //     silverMedals: 5,
    //     bronzeMedals: 6,
    //   },
    //   {
    //     id: 5,
    //     countryName: "Canada ",
    //     goldMedals: 3,
    //     silverMedals: 9,
    //     bronzeMedals: 1,
    //   },
    // ];
    // setCountries(testCountries);

    async function fetchData() {
      const { data: fetchedCountries } = await axios.get(apiEndpoint);
      setCountries(fetchedCountries);
    }
    fetchData();
  }, []);

  var golds = countries.reduce((a, b) => a + b.goldMedals, 0);
  var silvers = countries.reduce((a, b) => a + b.silverMedals, 0);
  var bronzes = countries.reduce((a, b) => a + b.bronzeMedals, 0);
  var totalMedals = golds + silvers + bronzes;
  // const totalMedals = 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Medals: {totalMedals}</h1>
      </header>
      <NewCountry createCountry={createCountry} />
      <Grid container spacing={2}>
        {countries.map(country => (
          <Grid item key={country.id}>
            <Country
              item
              key={country.id}
              country={country}
              addMedal={addMedal}
              removeMedal={removeMedal}
              deleteCountry={deleteCountry}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
