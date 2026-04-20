import type { BezierDefinition } from "framer-motion";

export const EASE_OUT: BezierDefinition  = [0.16, 1, 0.3, 1];
export const EASE_SLIDE: BezierDefinition = [0.32, 0, 0.12, 1];

export const theme = {
  darkBg:    "#424242",
  darkGray:  "#424242",
  turquoise: "#4dbad6",
  lightBlue: "#cee8ee",
  navy:      "#0B2135",
  accent:    "#4dbad6",
  offWhite:  "#F7F5F0",
};

export const font = `var(--font-futura), "Futura", "Helvetica Neue", Arial, sans-serif`;

export const typeScale = {
  largeTitle: 38,
  title: 32,
  subhead: 28,
  body: 20,
};
