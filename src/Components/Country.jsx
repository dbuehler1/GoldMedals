import React, { Component } from 'react';
import { IconButton } from '@mui/material';
import { Card } from '@mui/material';
import { Badge } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import StarsIcon from '@mui/icons-material/Stars';
class Country extends Component {
    state = {
        countryName: this.props.country.countryName,
        goldMedals: this.props.country.goldMedals,
    }
    
    addMedal = () => {
        this.setState({goldMedals: this.state.goldMedals + 1})
    }
    removeMedal = () => {
        if(this.state.goldMedals >= 1){
            this.setState({goldMedals: this.state.goldMedals - 1})
        }
        
    }
    render() {
        const { country } = this.props;
        
        return(
        <div className ='Country'>
            <Card>
            <div className='cName'>
                <IconButton 
                    onClick={ this.removeMedal }
                    className='removeButton'>
                    <RemoveCircle fontSize='large' />
                </IconButton>
                
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