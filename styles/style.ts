import { styled } from "../stitches.config";
import { motion } from "framer-motion";

export const Main = styled(motion.div, {
  display: "block",
});

export const MainInside = styled(motion.div, {
  position: "absolute",
  width: "100%",
  height: "100vh",
  zIndex: 10,
  backgroundColor: "black",
});
