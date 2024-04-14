import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Modal } from '@mui/material';
import petService from '../../../services/pet.service';

interface Fish {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const FishCard: React.FC<Fish> = ({ image, name, price, quantity, id }) => {
const [sellPetHandller] = petService.useSellPetMutation();

const sellPet = () =>{
    sellPetHandller({petId: id.toString()})
}

  return (
    <Card sx={{ margin: 2 }}>
      <CardMedia component="img" height="140" width="00" image={image} alt={name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ціна: {price} грн
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Кількість: {quantity}
        </Typography>
        <Button variant="contained" color="primary" style = {{marginTop: '20px'}} onclick = {sellPet}>
          Продати
        </Button>
      </CardContent>
    </Card>
  );
};


const PetsShop: React.FC<any> = ({ isModalWarningInfo, setIsModalWarningInfo }) => {
  const fishData: Fish[] = [
    { id: 1, name: 'fish', image: '/images/fish.png', price: 350, quantity: 10 },
    { id: 2, name: 'ship', image: '/images/shrimp.png', price: 250, quantity: 15 },
    { id: 3, name: 'snail', image: '/images/snail.png', price: 300, quantity: 12 },
  ];

  return (
    <Modal
      open={isModalWarningInfo}
      onClose={() => setIsModalWarningInfo(false)}
      aria-labelledby="modal-warning-info"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ backgroundColor: '#333333', maxWidth: 600, padding: 20, borderRadius: 8 }}>
        <Typography variant="h4" gutterBottom align="center" color="white">
          Рибний магазин
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {fishData.map((fish) => (
            <Grid item key={fish.id}>
              <FishCard
                id={fish.id}
                image={fish.image}
                name={fish.name}
                price={fish.price}
                quantity={fish.quantity}
              />
            </Grid>
          ))}
        </Grid> 
        <Button
  onClick={() => setIsModalWarningInfo(false)}
  variant="contained"
  color="primary"
  sx={{ marginTop: 2, display: 'block', margin: '0 auto' }}
>
  Закрити
</Button>
      </div>
    </Modal>
  );
};

export default PetsShop;
