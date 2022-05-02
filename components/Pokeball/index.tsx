import Image from "next/image";
import { useMemo } from "react";

interface PokeballProps {
  unoptimized?: boolean;
  small?: boolean;
}
const Pokeball = ({ unoptimized, small }: PokeballProps) => {
  const sizeProps = useMemo(
    () =>
      small
        ? {
            width: 75,
            height: 75,
          }
        : {
            width: 100,
            height: 100,
          },
    [small]
  );
  return (
    <Image
      src="/pokemon/pokeball.png"
      {...sizeProps}
      alt="pokeball"
      unoptimized={unoptimized}
    />
  );
};

export default Pokeball;
