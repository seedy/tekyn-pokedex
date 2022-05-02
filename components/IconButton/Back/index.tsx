import IconButton from "components/IconButton";
import BackArrow from "components/icons/BackArrow";
import { ComponentProps, ElementRef, forwardRef } from "react";

const IconButtonBack = forwardRef<
  ElementRef<typeof IconButton>,
  Omit<ComponentProps<typeof IconButton>, "children">
>((props, ref) => (
  <IconButton
    ref={ref}
    aria-label="Back"
    {...props}
    css={{ background: "transparent" }}
  >
    <BackArrow />
  </IconButton>
));
IconButtonBack.displayName = "IconButtonBack";

export default IconButtonBack;
