import { styled } from "stitches.config";
import Typography from "components/Typography";
import { useMemo } from "react";
import { makeStatsMatrix } from "lib/stats";

// COMPONENTS
const Table = styled("table", {
  tableLayout: "fixed",
  backgroundColor: "$statBackground",
  borderCollapse: "collapse",
  border: "$space$4 solid $statBackground",
});

const Tr = styled("tr", {
  borderSpacing: 0,
  height: "$1",
});

const Th = styled("th", {});

const Td = styled("td", {
  width: "$2",
  background: "$statInactive",
  boxSizing: "border-box",
  border: "1px solid $border",
  variants: {
    active: {
      true: {
        background: "$statActive",
      },
    },
  },
});

interface TableStatsProps {
  stats: PokemonStats;
}
const TableStats = ({ stats }: TableStatsProps) => {
  const matrix = useMemo(() => makeStatsMatrix(stats), [stats]);

  return (
    <Table>
      <tbody>
        {matrix.map(({ key: rowKey, cells }) => (
          <Tr key={rowKey}>
            {cells.map(({ key: cellKey, active }) => (
              <Td key={cellKey} active={active} />
            ))}
          </Tr>
        ))}
        <Tr>
          <Th>
            <Typography>HP</Typography>
          </Th>
          <Th>
            <Typography>Attack</Typography>
          </Th>
          <Th>
            <Typography>Defense</Typography>
          </Th>
          <Th>
            <Typography>Spe A</Typography>
          </Th>
          <Th>
            <Typography>Spe D</Typography>
          </Th>
          <Th>
            <Typography>Speed</Typography>
          </Th>
        </Tr>
      </tbody>
    </Table>
  );
};
export default TableStats;
