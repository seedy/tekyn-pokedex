import { styled } from "stitches.config";

const Input = styled("input", {
  boxSizing: "border-box",
  background: "$input",
  border: "1px solid $border",
  borderRadius: "$input",
  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: "$bold",
  fontSize: "$3",
  lineHeight: "$3",
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  color: "$loContrast",
  padding: "$1 $3 $2 $3",
  "&:focus-visible": {
    outline: "2px solid $outline",
  },
});

export default Input;
