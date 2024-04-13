import "./style.css";
import styles from "./game.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Chat from "./chat/Chat";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Aquarium from "./aquarium/Aquarium";

const Game = () => {
  return (
    <div className={styles.container}>
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
              <Tooltip title="Balance">
                <Typography
                  variant="h6"
                  sx={{
                    cursor: "pointer",
                  }}
                  color="white"
                >
                  1000$
                </Typography>
              </Tooltip>
            </Stack>

            <Tooltip title="Shop">
              <IconButton color="warning">
                <ShoppingBasketIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Logout">
              <IconButton color="error">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Chat />
      </div>
      <div className={styles.aquarium}>
        <Aquarium />
      </div>
    </div>
  );
};

export default Game;
