import Card from "components/Card";
import Pokeball from "components/Pokeball";
import Flex from "components/Flex";
import TextFieldSearch from "components/TextField/Search";
import Button from "components/Button";
import IconButtonRandom from "components/IconButton/Random";
import { useCallback, FormEventHandler, ChangeEventHandler } from "react";
import { useRouter } from "next/router";
import searchByIdQuery from "lib/queries/pokeapi/searchById";
import searchByNameQuery from "lib/queries/pokeapi/searchByName";

interface SearchRouteProps {
  pokemonIds: string[];
}
const SearchRoute = ({ pokemonIds }: SearchRouteProps) => {
  const { push } = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const searchText = e.target.value;
    if (Number.isNaN(searchText)) {
      searchByNameQuery(searchText);
    } else {
      searchByIdQuery(searchText);
    }
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      const { search } = e.target as any;
      const id = search.value as string;
      push(id);
    },
    [push]
  );

  return (
    <Card size="medium">
      <form role="search" onSubmit={onSubmit}>
        <Flex css={{ flexDirection: "column", alignItems: "center" }}>
          <Pokeball small />
          <Flex
            css={{ flexDirection: "column", margin: "$11 0", width: "100%" }}
          >
            <TextFieldSearch
              name="search"
              label="Pokemon name or id"
              onChange={onChange}
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
