
import Medal from './Medal';
import { Card, IconButton } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';

const deleteButton = {
    bgcolor: "red",
    color: "red",
    float: "right",
  }

const Country = (props) => {    
    
        
        const {country, removeMedal, addMedal, deleteCountry} = props;
        const totalMedals = country.goldMedals + country.silverMedals + country.bronzeMedals;
        
        return(
        <div className ='Country'>
            <Card className = 'countryCard'>
            <div className='cName'>
                
                { country.countryName }
                <IconButton onClick={() => deleteCountry(props.country.id)} style={deleteButton}>
                    <DeleteRounded/>
                </IconButton>
            </div>
            
            <div className='medals'>
            <h3>Medals: {totalMedals}</h3>
                <Medal Medals={country.goldMedals} medalType={'goldenrod'} addMedal={() =>addMedal('goldenrod', country.id)} removeMedal={() =>removeMedal('goldenrod', country.id)} />
                <Medal Medals={country.silverMedals} medalType={'silver'} addMedal={() =>addMedal('silver', country.id)} removeMedal={() =>removeMedal('silver', country.id)} />
                <Medal Medals={country.bronzeMedals} medalType={'brown'} addMedal={() =>addMedal('brown', country.id)} removeMedal={() =>removeMedal('brown', country.id)} />
            </div>
            
            </Card>
        </div>
        );
    }

export default Country