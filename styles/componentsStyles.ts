import { styled } from "../stitches.config";

export const PageTextDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100vw",
  height: "100vh",
});

export const PageTextTitle = styled("h1", {
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "#333",
  fontFamily: "Roboto, sans-serif",
});
