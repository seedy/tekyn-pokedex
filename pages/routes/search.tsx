import Card from "components/Card";
import Pokeball from "components/Pokeball";
import Flex from "components/Flex";
import Button from "components/Button";
import IconButtonRandom from "components/IconButton/Random";
import { useCallback, FormEventHandler, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Autocomplete from "components/Autocomplete";
import padPokemonId from "lib/pokemon/padPokemonId";
import { UseComboboxStateChange } from "downshift";
import filterOptions from "lib/filterOptions";
import unpadPokemonId from "lib/pokemon/unpadPokemonId";

const NUMBER_REGEX = /^\d+$/;
interface SearchRouteProps {
  pokemonIdsNames: { id: number; name: string }[];
}
const SearchRoute = ({ pokemonIdsNames }: SearchRouteProps) => {
  const { push } = useRouter();
  const [options, setOptions] = useState<string[]>([]);

  const pokemonIds = useMemo(
    () => pokemonIdsNames.map(({ id }) => id),
    [pokemonIdsNames]
  );
  const paddedPokemonIds = useMemo(
    () => pokemonIds.map(padPokemonId),
    [pokemonIds]
  );
  const pokemonNames = useMemo(
    () => pokemonIdsNames.map(({ name }) => name),
    [pokemonIdsNames]
  );

  const onInputValueChange = useCallback(
    ({ inputValue }: UseComboboxStateChange<string>) => {
      const trimmedValue = inputValue?.trim() || "";
      if (NUMBER_REGEX.test(trimmedValue)) {
        setOptions(filterOptions(trimmedValue, paddedPokemonIds));
      } else {
        setOptions(filterOptions(trimmedValue, pokemonNames));
      }
    },
    [setOptions, paddedPokemonIds, pokemonNames]
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      const { search } = e.target as any;
      const searchValue = search.value as string;
      const pokemonIdName = pokemonIdsNames.find(
        ({ id, name }) =>
          id === Number(unpadPokemonId(searchValue)) || name === searchValue
      );
      if (pokemonIdName) {
        push(`/${pokemonIdName.id}`);
      }
    },
    [push, pokemonIdsNames]
  );

  return (
    <Card size="medium">
      <form role="search" onSubmit={onSubmit}>
        <Flex css={{ flexDirection: "column", alignItems: "center" }}>
          <Pokeball small />
          <Flex
            css={{ flexDirection: "column", margin: "$11 0", width: "100%" }}
          >
            <Autocomplete
              name="search"
              type="search"
              label="Pokemon name or id"
              options={options}
              onInputValueChange={onInputValueChange}
            />
          </Flex>
          <Flex css={{ justifyContent: "space-between", width: "100%" }}>
            <Button buttonType="button" type="submit">
              Search !
            </Button>
            <IconButtonRandom pokemonIds={pokemonIds} />
          </Flex>
        </Flex>
      </form>
    </Card>
  );
};

export default SearchRoute;
