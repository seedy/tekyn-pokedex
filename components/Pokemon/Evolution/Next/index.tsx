import EvolutionArrow from "components/icons/EvolutionArrow";
import { ComponentProps } from "react";
import { styled } from "stitches.config";

const Root = styled("div", {
  position: "relative",
  width: "$6",
  height: "$6",
});

const ArrowWrapper = styled("div", {
  color: "inherit",
  position: "absolute",
  top: "10%",
  bottom: "10%",
  variants: {
    variant: {
      left: {
        left: "0%",
        right: "46.67%",
      },
      right: {
        right: "0%",
        left: "46.67%",
      },
    },
  },
});

const PokemonEvolutionNext = ({
  fill,
}: ComponentProps<typeof EvolutionArrow>) => (
  <Root css={{ color: fill }}>
    <ArrowWrapper variant="left">
      <EvolutionArrow fill="currentColor" />
    </ArrowWrapper>
    <ArrowWrapper variant="right">
      <EvolutionArrow fill="currentColor" />
    </ArrowWrapper>
  </Root>
);

export default PokemonEvolutionNext;
