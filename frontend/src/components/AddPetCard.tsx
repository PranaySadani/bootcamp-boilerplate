import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AddPetCardProps {
  onClick: () => void;
}

const AddPetCard: React.FC<AddPetCardProps> = ({ onClick }) => {
  return (
    <div className="pet-grid-item">
      <Card
        onClick={onClick}
        className="pet-card add-pet-card"
        sx={{
          height: '100%',
          display: 'flex',
          margin: '100px',
          padding: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: '2px dashed #ccc',
          backgroundColor: '#fafafa',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.02)',
            borderColor: '#888',
          },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" color="text.secondary">
            +
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add Pet
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default AddPetCard;
