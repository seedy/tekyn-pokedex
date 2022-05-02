import { styled } from "stitches.config";

const Card = styled("div", {
  boxSizing: "border-box",
  border: "none",
  borderRadius: "$card",
  background: "$card",
  variants: {
    size: {
      small: {
        width: "$15",
        height: "$13",
        padding: "$8 $6 $7 $6",
      },
      medium: {
        width: "$18",
        height: "$19",
        padding: "$22 $20 $22 $21",
      },
      large: {
        width: "$20",
        height: "$21",
        padding: "$14 $16 $15 $15",
      },
    },
    variant: {
      inner: {
        background: "$cardInner",
        border: "1px solid $border",
        boxShadow: "$1",
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export default Card;
