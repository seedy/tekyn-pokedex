import Pokeball from "components/Pokeball";
import padPokemonId from "lib/pokemon/padPokemonId";
import Image from "next/image";
import { ReactNode, useMemo } from "react";
import { styled } from "stitches.config";

const Wrapper = styled("div", {
  position: "relative",
  width: "$12",
  height: "$10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const AbsoluteWrapper = styled("div", {
  position: "absolute",
  variants: {
    front: {
      true: {
        zIndex: "$foreFront",
      },
    },
  },
});

const ImagesBlock = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$8",
  height: "$8",
});

interface PokemonBaseProps extends Pick<Pokemon, "id" | "name"> {
  unoptimized?: boolean;
  children?: ReactNode;
  showPokeball?: boolean;
}
const PokemonBase = ({
  id,
  name,
  unoptimized = false,
  showPokeball = false,
  children,
}: PokemonBaseProps) => {
  const pokedexId = useMemo(() => padPokemonId(id), [id]);
  return (
    <Wrapper>
      <ImagesBlock>
        <AbsoluteWrapper front>
          <Image
            src={unoptimized ? `./pokemon/${id}.png` : `/pokemon/${id}.png`}
            width={id !== 6 ? 150 : 195}
            height={150}
            alt={`${pokedexId} - ${name}`}
            unoptimized={unoptimized}
          />
        </AbsoluteWrapper>
        {showPokeball && (
          <AbsoluteWrapper>
            <Pokeball unoptimized={unoptimized} />
          </AbsoluteWrapper>
        )}
      </ImagesBlock>
      {children}
    </Wrapper>
  );
};

export default PokemonBase;
