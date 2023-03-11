import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { FORM_COLUMNS } from "../utils/constants";
import { IDisneylandTrip } from "../utils/types";
import {
  capitalizeFirstLetter,
  fieldToDisplayName,
  getEmptyDisneylandTrip,
} from "../utils/utils";

export default function DisneylandCalculator() {
  const gridItemSize = 12 / FORM_COLUMNS;
  const [trip, setTrip] = React.useState<IDisneylandTrip>(
    getEmptyDisneylandTrip()
  );

  React.useEffect(() => {
    console.log(trip);
  }, [trip]);

  // TODO: Think about the best way to display this...
  // hotel: number; per night
  // flight: number;
  // food: number; daily cost of food
  // parkTickets: number;
  // days: number;
  // car: number; per day
  // parking: number;
  // souvenirs: number;
  // total: number; - calculated

  const handleTextField = (key: keyof IDisneylandTrip, value: number) => {
    const newTrip = {...trip}
    newTrip[key] = value
    setTrip(newTrip)
  }

  return (
    <Box display="flex" flexDirection="row">
      <Grid container spacing={4}>
          {Object.keys(trip).map((key) =>{
            const field = key as keyof IDisneylandTrip  
            const value = trip[field]

            return field !== "total" && <Grid key={field} item xs={gridItemSize}>
              <TextField
                id={field}
                label={fieldToDisplayName(field)}
                variant="standard"
                color="secondary"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                onChange={(e) => handleTextField(field, parseInt(e.target.value))}
              />
            </Grid>
          })}
      </Grid>
      Flavor text...
    </Box>
  );
}
