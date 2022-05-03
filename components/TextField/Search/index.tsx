import TextField from "components/TextField";
import { debounce } from "ts-debounce";
import {
  ChangeEventHandler,
  ComponentProps,
  useCallback,
  useMemo,
  useState,
} from "react";

interface TextFieldSearchProps extends ComponentProps<typeof TextField> {}
const TextFieldSearch = ({
  defaultValue,
  onChange,
  ...props
}: TextFieldSearchProps) => {
  const [search, setSearch] = useState(defaultValue);

  const onChangeOrNoop: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const debouncedOnChange = useMemo(
    () => debounce(onChangeOrNoop, 1000),
    [onChangeOrNoop]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearch(e.target.value);
      debouncedOnChange(e);
    },
    [setSearch, debouncedOnChange]
  );

  return (
    <TextField
      type="search"
      value={search}
      onChange={handleChange}
      {...props}
    />
  );
};

export default TextFieldSearch;
