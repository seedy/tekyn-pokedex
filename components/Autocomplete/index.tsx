import { styled } from "stitches.config";

import { useCombobox, UseComboboxStateChange } from "downshift";
import { ComponentProps, useId, useMemo, useState } from "react";
import Label from "components/Label";
import Input from "components/Input";
import filterOptions from "lib/filterOptions";

interface AutocompleteProps extends ComponentProps<typeof Input> {
  options: string[];
  label: string;
  onInputValueChange: (changes: UseComboboxStateChange<string>) => void;
  onSelectedItemChange?: (changes: UseComboboxStateChange<string>) => void;
}

const ComboBox = styled("div", {
  display: "flex",
  border: "1px solid $border",
  borderRadius: "$input",
});

const ListBox = styled("ul", {
  background: "$input",
  padding: 0,
  margin: "$1 0 0",
  borderRadius: "$input",
  color: "$loContrast",
  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: "$bold",
  fontSize: "$3",
  lineHeight: "$3",
  maxHeight: "$10",
  textTransform: "uppercase",
  overflow: "auto",
  "&:not(:empty)": {
    boxShadow: "$1",
    border: "1px solid $border",
  },
});

const ListItem = styled("li", {
  padding: "$4 $4",
  listStyle: "none",
  margin: 0,
  variants: {
    active: {
      true: {
        background: "$primary",
      },
    },
  },
});

const Autocomplete = ({
  label,
  options,
  id,
  onSelectedItemChange,
  onInputValueChange,
  ...props
}: AutocompleteProps) => {
  const generatedId = useId();
  const idOrGenerated = useMemo(() => id || generatedId, [id, generatedId]);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: options,
    onSelectedItemChange,
    onInputValueChange,
  });

  return (
    <div>
      <Label {...getLabelProps()} htmlFor={idOrGenerated}>
        {label}
      </Label>
      <ComboBox {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          id={idOrGenerated}
          {...props}
          css={{
            width: "100%",
          }}
        />
      </ComboBox>
      <ListBox {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <ListItem
              active={highlightedIndex === index}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </ListItem>
          ))}
      </ListBox>
    </div>
  );
};

export default Autocomplete;
