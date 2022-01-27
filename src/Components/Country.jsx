import React, { Component } from 'react';
import Medal from './Medal';
import { Card } from '@mui/material';

class Country extends Component {    
    render() {
        
        const {country, removeMedal, addMedal} = this.props;
        const totalMedals = country.goldMedals + country.silverMedals + country.bronzeMedals;
        
        return(
        <div className ='Country'>
            <Card>
            <div className='cName'>
                
                { country.countryName }
                
            </div>
            <h3>Medals: {totalMedals}</h3>
            <div className='medals'>
                
                <Medal Medals={country.goldMedals} medalType={'goldenrod'} addMedal={() =>addMedal('goldenrod', country.id)} removeMedal={() =>removeMedal('goldenrod', country.id)} />
                <Medal Medals={country.silverMedals} medalType={'silver'} addMedal={() =>addMedal('silver', country.id)} removeMedal={() =>removeMedal('silver', country.id)} />
                <Medal Medals={country.bronzeMedals} medalType={'brown'} addMedal={() =>addMedal('brown', country.id)} removeMedal={() =>removeMedal('brown', country.id)} />
            </div>
            
            </Card>
        </div>
        );
    }
}
export default Country