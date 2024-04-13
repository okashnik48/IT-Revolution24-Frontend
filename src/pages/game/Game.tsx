import "./style.css";
import styles from "./aquarium.module.scss";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TextField from "@mui/material/TextField";
import Chat from "./chat/Chat";
import { Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Game = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
      </div> */}
      <div className={styles.panel}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          paddingY={1}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonIcon fontSize="large" color="warning" />
              <Typography variant="h6" color="white">
                user name here
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} paddingY={1}>
            <Stack direction="row" alignItems="center">
              <MonetizationOnIcon color="warning" />
              <Typography variant="h6" color="white">
                1000$
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              color="warning"
              startIcon={<ShoppingBasketIcon />}
            >
              Shop
            </Button>
            <Button variant="outlined" color="error" startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Stack>
        </Stack>
        <Chat />
      </div>
      <div className={styles.aquarium}></div>
    </div>
  );
};

export default Game;
