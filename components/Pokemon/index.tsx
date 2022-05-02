import PokemonBase from "components/Pokemon/Base";
import H2 from "components/Typography/H2";
import Flex from "components/Flex";
import padPokemonId from "lib/pokemon/padPokemonId";
import capitalizePokemonName from "lib/pokemon/capitalizePokemonName";
import { ComponentProps, useMemo } from "react";

interface PokemonProps
  extends Omit<ComponentProps<typeof PokemonBase>, "showPokeball"> {}

const Pokemon = ({ id, name, ...props }: PokemonProps) => {
  const pokedexId = useMemo(() => padPokemonId(id), [id]);

  const capitalizedName = useMemo(() => capitalizePokemonName(name), [name]);

  return (
    <PokemonBase id={id} name={capitalizedName} showPokeball {...props}>
      <Flex>
        <H2 align="center">
          {pokedexId}
          <br />
          {capitalizedName}
        </H2>
      </Flex>
    </PokemonBase>
  );
};

export default Pokemon;
