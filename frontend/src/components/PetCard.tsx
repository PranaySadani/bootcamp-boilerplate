import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { Pet } from '../types';

interface PetCardProps {
    pet: Pet;
    deletePet: (petId: any) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, deletePet }) => {
    return (
      <div key={pet._id} className="pet-grid-item">
        <Card className="pet-card" sx={{height: '100%', position: 'relative'}}>
          {pet.url ? (
            <CardMedia sx={{height: 220}} image={pet.url} />
          ) : (
            <Box sx={{ height: 220, display: 'flex', alignItems: 'center', 
                justifyContent: 'center', backgroundColor: '#f3f4f6'}}>
              <Typography variant="subtitle1" color="text.secondary">
                No pet picture 
              </Typography>
              <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
            </Box>
          )}
          <CardContent>
            <Typography gutterBottom variant="h6">
              {pet.name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {pet.breed}{pet.age ? `, ${pet.age} yrs` : ''}
            </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small" onClick={() => deletePet(pet._id)}>Delete</Button>
            </CardActions>

        </Card>
        
      </div>
    );
};

export default PetCard