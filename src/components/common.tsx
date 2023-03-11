import { theme } from "../theme";

export function Line() {
  return (
    <hr
      style={{
        borderTop: `2px solid ${theme.palette.secondary.dark}`,
        borderBottom: "0px",
        borderLeft: "0px",
        borderRight: "0px",
      }}
    />
  );
}
