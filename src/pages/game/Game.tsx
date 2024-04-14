import "./style.css";
import styles from "./game.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Chat from "./chat/Chat";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Aquarium from "./aquarium/Aquarium";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import { SetTokens, SetUserInfo } from "../../store/slices/user";
import { serviceApi } from "../../services/app.service";
import { useState } from "react";
import PetsShop from "./shop/PetsShop";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(SetTokens({ accessToken: "", refreshToken: "" }));
    dispatch(
      SetUserInfo({
        id: 0,
        createdAt: new Date(),
        name: "",
        email: "",
        isRegistered: false,
        role: "",
      })
    );
    navigate("/login");
    localStorage.clear();
    dispatch(serviceApi.util.resetApiState());
  };

  const user = useAppSelector((state) => state.user.user);
  const [isModalWarningInfo, setIsModalWarningInfo] = useState<boolean>();
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
                {user.name}
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
                  {user.balance}
                </Typography>
              </Tooltip>
            </Stack>

            <Tooltip title="Shop">
              <IconButton color="warning">
                <ShoppingBasketIcon
                  onClick={() => {
                    setIsModalWarningInfo(true);
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Logout">
              <IconButton color="error">
                <LogoutIcon onClick={logout} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Chat />
      </div>
      <div className={styles.aquarium}>
        <Aquarium />
      </div>
      <PetsShop
        setIsModalWarningInfo={setIsModalWarningInfo}
        isModalWarningInfo={isModalWarningInfo}
      />
    </div>
  );
};

export default Game;
