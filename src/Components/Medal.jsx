
import { Badge } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import StarsIcon from '@mui/icons-material/Stars';
import { IconButton } from '@mui/material';
const Medal = (props) => {
    
     const renderColor = (color) => {
        return (color === undefined || color === null ? 'black' : color);
      }
    
    
    
        const {Medals, medalType, addMedal, removeMedal} = props;
        
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
                    <StarsIcon fontSize='large' style={{ color:renderColor(medalType) }}/>
                </Badge>
            </div>
            
            
        </div>
        );
    
}
export default Medal