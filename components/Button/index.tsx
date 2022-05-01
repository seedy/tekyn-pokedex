import { styled } from "stitches.config";

const Button = styled("button", {
  borderRadius: "$card",
  background: "$primary",
  width: "$7",
  height: "$3",
  filter: "drop-shadow($2)",
  variants: {
    variant: {
      normal: {
        background: "$normal",
      },
      fire: {
        background: "$fire",
      },
      water: {
        background: "$water",
      },
      grass: {
        background: "$grass",
      },
      electrique: {
        background: "$electrique",
      },
      ice: {
        background: "$ice",
      },
      fight: {
        background: "$fight",
      },
      poison: {
        background: "$poison",
      },
      ground: {
        background: "$ground",
      },
      flight: {
        background: "$flight",
      },
      psychic: {
        background: "$psychic",
      },
      bug: {
        background: "$bug",
      },
      rock: {
        background: "$rock",
      },
      ghost: {
        background: "$ghost",
      },
      dark: {
        background: "$dark",
      },
      dragon: {
        background: "$dragon",
      },
      steel: {
        background: "$steel",
      },
      fairy: {
        background: "$fairy",
      },
    },
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
