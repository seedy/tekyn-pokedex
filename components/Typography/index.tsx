import { styled } from "stitches.config";

const Typography = styled("span", {
  display: "inline-block",
  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: "$bold",
  fontSize: "$1",
  lineHeight: "$1",
  color: "$hiContrast",
  variants: {
    align: {
      right: {
        textAlign: "right",
      },
      center: {
        textAlign: "center",
      },
    },
    variant: {
      subtle: {
        color: "$loContrast",
      },
      info: {
        color: "$info",
      },
    },
  },
});

export default Typography;
