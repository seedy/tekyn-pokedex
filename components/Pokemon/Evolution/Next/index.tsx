import EvolutionArrow from "components/icons/EvolutionArrow";
import { ComponentProps } from "react";
import { styled } from "stitches.config";

const Root = styled("div", {
  position: "relative",
  width: "$6",
  height: "$6",
});

const ArrowWrapper = styled("div", {
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

const PokemonEvolutionNext = (props: ComponentProps<typeof EvolutionArrow>) => (
  <Root>
    <ArrowWrapper variant="left">
      <EvolutionArrow {...props} />
    </ArrowWrapper>
    <ArrowWrapper variant="right">
      <EvolutionArrow {...props} />
    </ArrowWrapper>
  </Root>
);

export default PokemonEvolutionNext;
