import Card from "components/Card";
import CardInfos from "components/Card/Infos";
import Divider from "components/Divider";
import Flex from "components/Flex";
import IconButtonBack from "components/IconButton/Back";
import Evolution from "components/Pokemon/Evolution";
import PokemonMain from "components/Pokemon/Main";
import TableStats from "components/Table/Stats";
import H1 from "components/Typography/H1";
import capitalizePokemonName from "lib/pokemon/capitalizePokemonName";
import padPokemonId from "lib/pokemon/padPokemonId";
import { useMemo } from "react";

export const Skeleton = () => <Card size="large" />;

interface DetailsRouteProps {
  pokemons: Pokemon[];
}
const DetailsRoute = ({ pokemons }: DetailsRouteProps) => {
  const {
    id,
    name,
    abilities,
    description,
    evolutions,
    height,
    weight,
    types,
    stats,
  } = useMemo(() => pokemons?.[0], [pokemons]);

  const pokedexId = useMemo(() => padPokemonId(id), [id]);
  const capitalizedName = useMemo(() => capitalizePokemonName(name), [name]);

  return (
    <Card size="large" css={{ overflow: "hidden" }}>
      <Flex
        css={{ flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <Flex
          css={{
            width: "100%",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconButtonBack css={{ position: "absolute", left: 0 }} />
          <H1>
            {capitalizedName} {pokedexId}
          </H1>
        </Flex>
        <Divider />
        <Flex css={{ justifyContent: "center", alignItems: "center" }}>
          <TableStats stats={stats} />
          <PokemonMain id={id} name={name} types={types} />
          <CardInfos
            abilities={abilities}
            description={description}
            height={height}
            weight={weight}
          />
        </Flex>
        <Evolution evolutions={evolutions} />
      </Flex>
    </Card>
  );
};

export default DetailsRoute;
