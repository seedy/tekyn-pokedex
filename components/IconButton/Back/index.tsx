import IconButton from "components/IconButton";
import BackArrow from "components/icons/BackArrow";
import { useRouter } from "next/router";
import {
  ComponentProps,
  ElementRef,
  forwardRef,
  MouseEventHandler,
  useCallback,
} from "react";

const IconButtonBack = forwardRef<
  ElementRef<typeof IconButton>,
  Omit<ComponentProps<typeof IconButton>, "children">
>(({ onClick, css, ...props }, ref) => {
  const { push } = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      if (onClick) {
        onClick(e);
      }
      push("/");
    },
    [push, onClick]
  );

  return (
    <IconButton
      ref={ref}
      aria-label="Back"
      onClick={handleClick}
      {...props}
      css={{
        background: "transparent",
        marginLeft: "calc((24px - 65px) / 2)",
        ...css,
      }}
    >
      <BackArrow />
    </IconButton>
  );
});
IconButtonBack.displayName = "IconButtonBack";

export default IconButtonBack;
