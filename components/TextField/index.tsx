import Label from "components/Label";
import Input from "components/Input";
import { ElementRef, ComponentProps, forwardRef, useMemo, useId } from "react";
import { VariantProps } from "@stitches/react";

interface TextFieldProps
  extends VariantProps<typeof Input>,
    ComponentProps<typeof Input> {
  label: string;
}

const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>(
  ({ id, label, ...props }, forwardedRef) => {
    const generatedId = useId();
    const idOrGenerated = useMemo(() => id || generatedId, [id, generatedId]);

    return (
      <>
        <Label htmlFor={idOrGenerated}>{label}</Label>
        <Input ref={forwardedRef} id={idOrGenerated} {...props} />
      </>
    );
  }
);
TextField.displayName = "TextField";

export default TextField;
