import Button, { VARIANTS } from "components/Button";
import Flex from "components/Flex";
import { useMemo } from "react";

interface TypesProps {
  variant?: "simple" | "double";
  types:
    | [typeof VARIANTS[number]]
    | [typeof VARIANTS[number], typeof VARIANTS[number]];
}
const Types = ({ variant = "simple", types }: TypesProps) => {
  const simpleType = useMemo(() => types?.[0], [types]);
  const doubleType = useMemo(() => types?.[1], [types]);

  return (
    <Flex css={{ gap: "$12" }}>
      <Button variant={simpleType}>{simpleType}</Button>
      {variant === "double" && (
        <Button variant={doubleType}>{doubleType}</Button>
      )}
    </Flex>
  );
};

export default Types;
