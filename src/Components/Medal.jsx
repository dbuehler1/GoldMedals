import React, { Component } from 'react';
import { Badge } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import StarsIcon from '@mui/icons-material/Stars';
import { IconButton } from '@mui/material';
class Medal extends Component {
    
    renderColor(color) {
        return (color === undefined || color === null ? 'black' : color);
      }
    
    
    render() {
        const {Medals, medalType, addMedal, removeMedal} = this.props;
        
        return(
        <div>
            
            <div className='medalList'>
                <IconButton 
                    onClick={removeMedal }
                    className='removeButton'>
                    <RemoveCircle fontSize='medium' />
                </IconButton>
                <IconButton 
                    onClick={addMedal }
                    color='success' 
                    className='addButton'>
                    <AddCircle fontSize='medium' />
                </IconButton>

                <Badge badgeContent={ Medals } color="primary">
                    <StarsIcon fontSize='large' style={{ color:this.renderColor(medalType) }}/>
                </Badge>
            </div>
            
            
        </div>
        );
    }
}
export default Medal