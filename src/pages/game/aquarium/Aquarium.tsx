import React, { useMemo } from "react";
import petService from "../../../services/pet.service";

function Aquarium() {
  const { data } = petService.useGetPetsQuery(null);

  const fidPets = () => {};
  if (data === undefined || data === null) {
    return (
      <div style={{          display: "flex",
      alignItems: "center",
      justifyContent: "center",minHeight: "100%", minWidth: "100%"}}>
      <img
        src="./images/sadFish.png"
        width={500}
        height={500}
        style={{

        }}
        alt="Fish"
      />
      </div>
    );
  } else
    return (
      <div className="container">
        {data.map((value, index) => {
          switch (value.type) {
            case "fish":
              return <img src="./images/fish.png" width={100} alt="Fish" />;
            case "shrimp":
              return <img src="./images/fish.png" alt="Shrimp" />;
            case "snail":
              return <img src="./images/snail.png" alt="Snail" />;
            default:
              return null;
          }
        })}
      </div>
    );
}

export default Aquarium;
