import { Box, TextField } from "@mui/material";
import React from "react";
import { IDisneylandTrip } from "../utils/types";

export default function DisneylandCalculator() {
  const [trip, setTrip] = React.useState<IDisneylandTrip>();

  // TODO: Think about the best way to display this...
  // hotel: number;
  // flight: number;
  // averageBreakfast: number;
  // averageLunch: number;
  // averageDinner: number;
  // parkTickets: number;
  // days: number;
  // car: number;
  // parking: number;
  // souvenirs: number;
  // total: number;

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        color="primary"
      />
    </Box>
  );
}
