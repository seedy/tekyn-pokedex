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
      },
      medium: {
        width: "$18",
        height: "$19",
      },
      large: {
        width: "$20",
        height: "$21",
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
