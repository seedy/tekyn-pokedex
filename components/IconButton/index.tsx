import { VariantProps } from "@stitches/react";
import Button from "components/Button";
import { forwardRef, ElementRef, ComponentProps } from "react";

const IconButton = forwardRef<
  ElementRef<typeof Button>,
  VariantProps<typeof Button> & ComponentProps<typeof Button>
>((props, forwardedRef) => (
  <Button ref={forwardedRef} type="iconButton" {...props} />
));
IconButton.displayName = "IconButton";

export default IconButton;
