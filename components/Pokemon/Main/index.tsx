import Types from "components/Types";
import padPokemonId from "lib/pokemon/padPokemonId";
import Image from "next/image";
import { ReactNode, useMemo } from "react";
import { styled } from "stitches.config";

const Wrapper = styled("div", {
  height: "$16",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

interface PokemonMainProps extends Pick<Pokemon, "id" | "name" | "types"> {
  unoptimized?: boolean;
  children?: ReactNode;
}
const PokemonMain = ({
  id,
  name,
  types,
  unoptimized = false,
}: PokemonMainProps) => {
  const pokedexId = useMemo(() => padPokemonId(id), [id]);

  const typesVariant = useMemo(
    () => (types.length > 1 ? "double" : "simple"),
    [types]
  );
  const typeValues = useMemo(() => types.map(({ type }) => type.name), [types]);
  const image = useMemo(
    () => (id !== 6 ? `${id}.png` : `${id}-369w.png`),
    [id]
  );
  return (
    <Wrapper>
      <Image
        src={unoptimized ? `./pokemon/${image}` : `/pokemon/${image}`}
        width={id !== 6 ? 284 : 369}
        height={284}
        alt={`${pokedexId} - ${name}`}
        unoptimized={unoptimized}
      />
      <Types variant={typesVariant} types={typeValues} />
    </Wrapper>
  );
};

export default PokemonMain;
