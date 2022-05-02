import { styled } from "stitches.config";
import Typography from "components/Typography";

const H2 = styled("h2", Typography, {
  fontSize: "$3",
  lineHeight: "$3",
  margin: 0,
  defaultVariants: {
    variant: "subtle",
  },
});

export default H2;
