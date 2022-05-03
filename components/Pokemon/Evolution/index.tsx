import Pokemon from "components/Pokemon";
import { useMemo } from "react";
import Flex from "components/Flex";
import PokemonEvolutionNext from "components/Pokemon/Evolution/Next";

interface EvolutionProps {
  evolutions: Evolutions;
  unoptimized?: boolean;
}

const Evolution = ({ evolutions, unoptimized }: EvolutionProps) => {
  const evolutionMap = useMemo(
    () => evolutions.chain.pokemons.map((evolution) => evolution),
    [evolutions]
  );

  const isSimpleEvolution = useMemo(
    () => evolutionMap.length < 3,
    [evolutionMap]
  );

  return (
    <Flex css={{ alignItems: "center" }}>
      {evolutionMap.map(({ name, id }, index, array) => (
        <>
          <Pokemon key={id} id={id} name={name} unoptimized={unoptimized} />
          {index !== array.length - 1 && (
            <PokemonEvolutionNext
              fill={isSimpleEvolution ? "$evolutionSimple" : "$evolutionDouble"}
            />
          )}
        </>
      ))}
    </Flex>
  );
};

export default Evolution;
