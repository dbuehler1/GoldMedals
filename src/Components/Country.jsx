import React, { Component } from 'react';
import { IconButton } from '@mui/material';
import { Card } from '@mui/material';
import { Badge } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import StarsIcon from '@mui/icons-material/Stars';
class Country extends Component {
    state = {
        countryName: 'USA',
        goldMedals : 0,
    }
    addMedal = () => {
        this.setState({goldMedals: this.state.goldMedals + 1})
    }
    render() {
        return(
        <div className ='Country'>
            <Card>
            <div className='countryName'>
            
                { this.state.countryName }  
                <IconButton 
                    onClick={ this.addMedal }
                    color='success' 
                    className='addButton'>
                    <AddCircle fontSize='large' />
                </IconButton>
            </div>
            
            <div className='medals'>
            
               Gold Medals
                <Badge badgeContent={ this.state.goldMedals } color="primary">
                    <StarsIcon className='medalCount'/>
                </Badge>
                
            </div>
            
            </Card>
        </div>
        );
    }
}
export default Country