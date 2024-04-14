import React, { useState, useEffect } from "react";
import petService from "../../../services/pet.service";
import "../game.module.scss"
import { toast } from "react-toastify";

function Aquarium() {
  const { data } = petService.useGetPetsQuery(null);
  const [fidPetsHandler] = petService.useFidPetsMutation();
  const [showPlus, setShowPlus] = useState(false);


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
    toast.success("you fid your pets")
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
          minWidth: "100%"
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
      <div className="container" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }} onClick={handleClick}>
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
            left: `${positionX}px`
          };

          switch (value.type) {
            case "fish":
              return (
                <img
                  key={index}
                  src="./images/fish.png"
                  width={200}
                  alt="Fish"
                  style={style}
                />
              );
            case "shrimp":
              return (
                <img
                  key={index}
                  src="./images/shrimp.png"
                  width={200}
                  alt="Shrimp"
                  style={style}
                />
              );
            case "snail":
              return (
                <img
                  key={index}
                  src="./images/snail.png"
                  width={200}
                  alt="Snail"
                  style={style}
                />
              );
            default:
              return null;
          }
        })}
        {showPlus && <div style={{ color: "green", fontSize: "50px", fontWeight: "bold" }}>+</div>}

      </div>
    );
  }
}

export default Aquarium;
