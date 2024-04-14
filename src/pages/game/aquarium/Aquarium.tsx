import React, { useState, useEffect } from "react";
import petService from "../../../services/pet.service";
import "../game.module.scss";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAppSelector } from "../../../store/store-hooks";
import addNotification from "react-push-notification";

function Aquarium() {
  const { data, refetch } = petService.useGetPetsQuery(null);
  const [fidPetsHandler] = petService.useFidPetsMutation();
  const [showPlus, setShowPlus] = useState(false);

  const token = useAppSelector((state) => state.user.tokens.accessToken);

  const socketUrl = 'wss://hackaton.dev.m0e.space/api/ws/events';

  const {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket(socketUrl);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      console.log('Connected to WebSocket server');
      const message = {
        event: 'auth',
        data: token
      };
      sendJsonMessage(message);
    } else if (readyState === ReadyState.CLOSED) {
      console.log('Disconnected from WebSocket server');
    }
  }, [readyState]);

  useEffect(() =>{
    if (typeof lastJsonMessage === 'object' && lastJsonMessage !== null) {
      addNotification({
        title: 'Warning',
        subtitle: 'You need to fid your pets',
        message: "Fid pets",
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
      });
      refetch();
    }
  }, [lastJsonMessage]);

  const handleClick = (event: any) => {
    const plusElement = document.createElement("div");
    plusElement.innerText = "+";
    plusElement.style.position = "absolute";
    plusElement.style.top = `${event.clientY}px`;
    plusElement.style.left = `${event.clientX}px`;
    plusElement.style.color = "green";
    plusElement.style.fontSize = "24px";
    document.body.appendChild(plusElement);

    setShowPlus(true);
    fidPetsHandler(null);
    toast.success("you fid your pets");
    setTimeout(() => {
      document.body.removeChild(plusElement);
      setShowPlus(false);
    }, 3000);
  };

  if (data === undefined || data === null) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          minWidth: "100%",
        }}
      >
        <img
          src="./images/sadFish.png"
          width={500}
          height={500}
          style={{}}
          alt="Fish"
        />
      </div>
    );
  } else {
    return (
      <div
        className="container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        onClick={handleClick}
      >
        {data.map((value, index) => {
          const imageWidth = 200;
          const imageHeight = 200;
          const containerWidth = 1700;
          const containerHeight = 900;
          const positionX = Math.random() * (containerWidth - imageWidth);
          const positionY = Math.random() * (containerHeight - imageHeight);

          const style = {
            position: "absolute" as const,
            top: `${positionY}px`,
            left: `${positionX}px`,
          };

          switch (value.type) {
            case "fish":
              return (
                <Tooltip
                  title={
                    <Stack direction='row' alignItems='center'>
                      <HealthAndSafetyIcon />
                      <span>Health: {value.satiety}</span>
                    </Stack>
                  }
                  key={index}
                >
                  <img
                    key={index}
                    src="./images/fish.png"
                    width={200}
                    alt="Fish"
                    style={style}
                  />
                </Tooltip>
              );
            case "shrimp":
            case "snail":
              return (
                <Tooltip
                  title={
                    <Stack>
                      <HealthAndSafetyIcon />
                      <span>Health: {value.satiety}</span>
                    </Stack>
                  }
                  key={index}
                >
                  <img
                    key={index}
                    src="./images/snail.png"
                    width={200}
                    alt="Snail"
                    style={style}
                  />
                </Tooltip>
              );
            default:
              return null;
          }
        })}
        {showPlus && (
          <div style={{ color: "green", fontSize: "50px", fontWeight: "bold" }}>
            +
          </div>
        )}
      </div>
    );
  }
}

export default Aquarium;
