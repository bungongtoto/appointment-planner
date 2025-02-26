import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({arrayObject}) => {
  return (
    <div>
      {
        arrayObject.map(({name,...rest}, index) => {
          return <Tile key={index} name={name} description={rest} />
        })
      }
    </div>
  );
};
