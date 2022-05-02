import { styled } from "stitches.config";
import Typography from "components/Typography";

const H1 = styled("h1", Typography, {
  fontSize: "$4",
  lineHeight: "$4",
  margin: 0,
  defaultVariants: {
    variant: "subtle",
  },
});

export default H1;
