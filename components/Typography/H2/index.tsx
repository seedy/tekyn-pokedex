import { styled } from "stitches.config";
import Typography from "components/Typography";

const H2 = styled("h2", Typography, {
  fontSize: "$3",
  lineHeight: "$3",
  defaultVariants: {
    variant: "subtle",
  },
});

export default H2;
