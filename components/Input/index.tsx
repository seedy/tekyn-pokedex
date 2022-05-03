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
  padding: "$2 $4 $3 $4",
  "&:hover": {
    outline: "2px solid $hoverOutline",
  },
  "&:focus-visible": {
    outline: "2px solid $outline",
  },
  '&[type="search"]': {
    "&::-webkit-search-decoration,&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none",
    },
  },
});

export default Input;
