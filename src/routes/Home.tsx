import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Line } from "../components/common";
import TripCalculator from "../components/TripCalculator";
import { PROJECT_NAME } from "../utils/constants";
import { HomeText } from "./home-text";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3">{PROJECT_NAME}</Typography>
      <Line />
      <Typography textAlign={"center"} variant="subtitle1">
        {HomeText.slogan}
      </Typography>
      <div style={{ marginBottom: "20px" }} />
      <TripCalculator />
    </Container>
  );
}
