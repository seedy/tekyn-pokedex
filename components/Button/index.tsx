import { styled } from "stitches.config";

export const VARIANTS = [
  "normal",
  "fire",
  "water",
  "grass",
  "electrique",
  "ice",
  "fight",
  "poison",
  "ground",
  "flight",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
] as const;

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
  borderRadius: "$card",
  background: "$primary",
  width: "$7",
  height: "$3",
  filter: "drop-shadow($2)",
  variants: {
    variant: makeButtonVariants(),
    type: {
      button: {
        borderRadius: "$button",
        filter: "none",
      },
      iconButton: {
        borderRadius: "$iconButton",
        filter: "none",
      },
    },
  },
});

export default Button;
