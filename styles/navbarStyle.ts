import { styled } from "../stitches.config";

export const NavbarDiv = styled("header", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "2rem 1rem",
  backgroundColor: "#333",
  color: "#fff",
  fontFamily: "sans-serif",
});

export const NavbarInside = styled("div", {
  width: "100%",
  maxWidth: "1000px",
  display: "flex",
  justifyContent: "space-between",
});

export const NavbarTitle = styled("h1", {
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
});
