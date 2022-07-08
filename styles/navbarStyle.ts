import { styled } from "../stitches.config";
import { motion } from "framer-motion";

export const NavbarDiv = styled("header", {
  display: "flex",
  justifyContent: "center",
  padding: "2rem 1rem",
  backgroundColor: "#333",
  color: "#fff",
  fontFamily: "sans-serif",
  zIndex: 30,
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

export const NavbarLinks = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  margin: "0",
  padding: "0",
});

export const NavbarLinkDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export const NavbarLink = styled("a", {
  textDecoration: "none",
  color: "#fff",
  fontSize: "0.9rem",
  fontWeight: "semibold",
  margin: "0",
  padding: "0",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    opacity: 0.8,
    fontSize: "1rem",
  },
});

export const NavbarUnderline = styled(motion.div, {
  position: "absolute",
  width: "100%",
  height: "1px",
  backgroundColor: "#fff",
  bottom: -3,
});
