import React from "react";
import { Button, Typography, useTheme } from "@mui/material";
import "./components.css";
import { PROJECT_NAME } from "../utils/constants";

export default function Header() {
  const theme = useTheme();

  return (
    <div
      className="header"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Button
        href="/"
        sx={{ marginLeft: 3 }}
        color="secondary"
        variant="contained"
      >
        <Typography fontSize={16} fontWeight={600}>
          {PROJECT_NAME}
        </Typography>
      </Button>
    </div>
  );
}
