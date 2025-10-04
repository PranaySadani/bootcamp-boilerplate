import './ExampleDashboard.css'
import originalPets from './examplepets.json' 
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Nav from './components/Nav'
import PetCard from "./components/PetCard"
import { useState, useEffect } from "react";
import AddPetCard from './components/AddPetCard'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { Pet } from "./types";


function ExampleDashboard() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [newPet, setNewPet] = useState<Pet>({
    name: "",
    breed: "",
    age: ""
  });

  useEffect(() => {
    setPets(() => originalPets);
  }, []);

  const formatSearchFilter = (s: string) => {
    return s.toLowerCase().trimEnd();
  }

  const validSearchPet = (pet: Pet) => {
    const check_x = (x: string) => {
      return x.toLowerCase().includes(formatSearchFilter(searchFilter))
    }

    return check_x(pet.name) || check_x(pet.breed);
  };

  const deletePet = (petId: any) => {
    setPets(oldPetList => oldPetList.filter((p) => p._id !== petId))
  };

  const addPet = (np: Pet) => {
    setPets(oldPets => [...oldPets, np]);
  }


  return (
    <>
      <Container maxWidth="lg">
        <Nav searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <h1>Pets</h1>
        <Box className="dashboard" sx={{py: 4}}>
          <div className="pet-grid">
            {pets.filter((pet) => validSearchPet(pet)).map((pet, index) => (
              <PetCard key={index} pet={pet} deletePet={deletePet} />
            ))}
          </div>
         <div className="margin-blocker" style={{ marginTop: "40px" }}></div>
          
          <AddPetCard onClick={() => setShowPopup(true)} />
        </Box>
        <Dialog
          open={showPopup}
          onClose={() => setShowPopup(false)}
          maxWidth="xs"
          fullWidth
        >
        <DialogTitle>Add New Pet</DialogTitle>
        
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Name"
              value={newPet.name}
              onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Pet Type"
              value={newPet.type}
              onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
              fullWidth
            />
            <TextField
              label="Pet Age"
              value={newPet.age}
              onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPopup(false)} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addPet(newPet);
              setShowPopup(false);
            }}
            variant="contained"
          >
            Add Pet
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </>
  )
}

export default ExampleDashboard