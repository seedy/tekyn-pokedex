import { styled } from "stitches.config";

export const FIRE = "fire";
export const FLIGHT = "flight";

export const VARIANTS = [
  "normal",
  FIRE,
  "water",
  "grass",
  "electrique",
  "ice",
  "fight",
  "poison",
  "ground",
  FLIGHT,
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
] as Types[];

const makeButtonVariants = () =>
  VARIANTS.reduce(
    (aggr, variant) => ({
      ...aggr,
      [variant]: {
        background: `$${variant}`,
      },
    }),
    {} as Record<typeof VARIANTS[number], {}>
  );

const Button = styled("button", {
  boxSizing: "border-box",
  position: "relative",
  border: "none",
  borderRadius: "$card",
  background: "$primary",
  color: "$caption",
  width: "$7",
  height: "$3",
  filter: "drop-shadow($shadows$2)",
  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: "$bold",
  fontSize: "$2",
  lineHeight: "$2",
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
  },
  "&:hover": {
    cursor: "pointer",
    "&::before": {
      backgroundColor: "$hoverBackdrop",
    },
  },
  "&:focus": {
    outline: "2px solid $outline",
  },
  "&:active": {
    "&::before": {
      backgroundColor: "$backdrop",
    },
  },
  variants: {
    variant: makeButtonVariants(),
    type: {
      button: {
        width: "$9",
        height: "$4",
        borderRadius: "$button",
        filter: "none",
      },
      iconButton: {
        width: "$4",
        height: "$4",
        borderRadius: "$iconButton",
        filter: "none",
      },
    },
  },
});

export default Button;
