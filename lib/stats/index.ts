const HP = "hp";
const ATTACK = "attack";
const DEFENSE = "defense";
const SPEA = "special-attack";
const SPED = "special-defense";
const SPEED = "speed";

const STATS_MAP = {
  [HP]: 0,
  [ATTACK]: 0,
  [DEFENSE]: 0,
  [SPEA]: 0,
  [SPED]: 0,
  [SPEED]: 0,
};
const COLS = 15;
const COLS_RANGE = Array.from(Array(COLS).keys());

export const isCellActive = (index: number, base: number) => COLS - index <= Math.floor(base / 10) ? true : false

const makeCell = (key: string, index: number, base: number) => ({key, active: isCellActive(index, base)})

export const groupStats = (stats: PokemonStats) => stats?.reduce(
  (aggr, { stat, base }) => ({
    ...aggr,
    [stat?.name]: base,
  }),
  STATS_MAP
);

export const makeStatsMatrix = (stats: PokemonStats, order = [HP, ATTACK, DEFENSE, SPEA, SPED, SPEED] as [STAT_NAMES,STAT_NAMES,STAT_NAMES,STAT_NAMES,STAT_NAMES,STAT_NAMES]) => {
  const groupedStats = groupStats(stats);
  const bases = order.map(orderKey => groupedStats[orderKey]);
  return COLS_RANGE.map((key) => ({
    key,
    cells: bases.map((base, index) =>
      makeCell(`${key}-${index}`, key, base)
    ),
  }))
}