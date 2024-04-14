import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import petService from "../../../services/pet.service";

interface Fish {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const FishCard: React.FC<Fish> = ({ image, name, price, quantity, id }) => {
  const [sellPetHandller] = petService.useSellPetMutation();

  const sellPet = () => {
    sellPetHandller({ type: name});
  };

  return (
<Card sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <CardMedia
    component="img"
    height="140"
    width="100"
    image={image}
    alt={name}
  />

  <CardContent style={{ textAlign: 'center' }}>
    <Typography gutterBottom variant="h5" component="div">
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Price: {price} $
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Quantity: {quantity}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      style={{ marginTop: "20px" }}
      onClick={sellPet}
    >
      Sell
    </Button>
  </CardContent>
</Card>

  );
};

const PetsShop: React.FC<any> = ({
  isModalWarningInfo,
  setIsModalWarningInfo,
}) => {
  const { data } = petService.useGetPetsQuery(null);
  const fishData: Fish[] = useMemo(() =>{
    const startedArray = [
    {
      id: 1,
      name: "fish",
      image: "/images/fish.png",
      price: 100,
      quantity: 0,
    },
    {
      id: 2,
      name: "ship",
      image: "/images/shrimp.png",
      price: 350,
      quantity: 0,
    },
    {
      id: 3,
      name: "snail",
      image: "/images/snail.png",
      price: 200,
      quantity: 0,
    },
  ]
  if (data === null || data === undefined) return startedArray;
  else{
    data.map((pet) =>{
      if (pet.type === "fish") startedArray[0].quantity++;
      
      if (pet.type === "shrimp") startedArray[1].quantity++;
      
      if (pet.type === "snail") startedArray[2].quantity++;
    })
  }
  return startedArray;
}, [data])

  return (
    <Modal
      open={isModalWarningInfo}
      onClose={() => setIsModalWarningInfo(false)}
      aria-labelledby="modal-warning-info"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#333333",
          maxWidth: 600,
          padding: 20,
          borderRadius: 8,
        }}
      >
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
          sx={{ marginTop: 2, display: "block", margin: "0 auto" }}
        >
          Закрити
        </Button>
      </div>
    </Modal>
  );
};

export default PetsShop;
