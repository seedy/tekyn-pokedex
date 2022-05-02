import Card from "components/Card";
import Typography from "components/Typography";
import Grid from "components/Grid";
import { useMemo } from "react";

interface CardInfosProps extends PokemonInfos {}
const CardInfos = ({
  weight,
  height,
  abilities,
  description,
}: CardInfosProps) => {
  const abilitiesText = useMemo(
    () => abilities.map(({ name }) => name).join(", "),
    [abilities]
  );
  const descriptionText = useMemo(
    () => description.flavorTexts?.[0].flavorText,
    [description]
  );

  return (
    <Card size="small" variant="inner">
      <Grid
        css={{
          padding: "1px $7 0 $1",
          gridTemplateColumns: "repeat(2, auto)",
          gap: "$11",
          marginBottom: "$11",
        }}
      >
        <Typography variant="subtle">Weight</Typography>
        <Typography variant="info" align="right">
          {weight} kg
        </Typography>

        <Typography variant="subtle">Height</Typography>
        <Typography variant="info" align="right">
          {height} m
        </Typography>

        <Typography variant="subtle">Abilities</Typography>
        <Typography variant="info" align="right">
          {abilitiesText}
        </Typography>
      </Grid>
      <Typography variant="subtle" css={{ margin: "0 0 $10 $1" }}>
        Description
      </Typography>
      <Typography variant="info" align="center">
        {descriptionText}
      </Typography>
    </Card>
  );
};

export default CardInfos;
