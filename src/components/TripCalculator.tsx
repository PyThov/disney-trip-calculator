import React from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { theme } from "../theme";
import "./components.css";
import DisneylandCalculator from "./DisneylandCalculator";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TripCalculator() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.light,
        borderRadius: "8px",
        boxShadow: "0 3px 5px 0 #555",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
        >
          <Tab label="Disneyland" {...a11yProps(0)} />
          <Tab label="Disney World" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DisneylandCalculator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Container>
  );
}
