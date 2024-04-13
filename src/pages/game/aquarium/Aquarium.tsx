import React from "react";
import petService from "../../../services/pet.service";


function Aquarium() {
  const { data } = petService.useGetPetsQuery(null);

  console.debug(data);

  return <></>;
}

export default Aquarium;
