import { useRouter } from "next/router";
import IconButton from "components/IconButton";
import getRandomPokemonId from "lib/pokemon/getRandomPokemonId";
import { useCallback, useMemo } from "react";
import RandomArrow from "components/icons/RandomArrow";

interface IconButtonRandomProps {
  pokemonIds: (string | number)[];
}
const IconButtonRandom = ({ pokemonIds }: IconButtonRandomProps) => {
  const { push } = useRouter();

  const onClick = useCallback(() => {
    const nextId = getRandomPokemonId(pokemonIds);
    push(`/${nextId}`);
  }, [push, pokemonIds]);

  return (
    <IconButton aria-label="Random" onClick={onClick}>
      <RandomArrow />
    </IconButton>
  );
};

export default IconButtonRandom;
