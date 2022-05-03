import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import getPokemonIdsNamesQuery from "lib/queries/pokeapi/getPokemonIdsNames";
import Layout from "components/Layout";
import SearchRoute from "pages/routes/search";
import DetailsRoute from "pages/routes/details";
import Route from "components/Route";
import { globalCss } from "stitches.config";
import details from "lib/queries/pokeapi/details";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pokemonId = Array.isArray(params?.args)
    ? params?.args?.["0"]
    : params?.args;
  if (pokemonId) {
    const query = await details(pokemonId);
    const pokemons = query.data.pokemons;
    return {
      props: {
        pokemons,
      },
    };
  }
  const query = await getPokemonIdsNamesQuery();
  const pokemonIdsNames = query.data.idsNames;
  return {
    props: {
      pokemonIdsNames,
    },
  };
};

const Home: NextPage = ({
  pokemons,
  pokemonIdsNames,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const globalStyle = globalCss({
    body: {
      margin: 0,
    },
  });

  return (
    <div>
      {globalStyle()}
      <Head>
        <title>Tekyn Pokedex</title>
        <meta name="description" content="Pokedex challenge application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Route href="/">
          <SearchRoute pokemonIdsNames={pokemonIdsNames} />
        </Route>
        <Route href="!/">
          <DetailsRoute pokemons={pokemons} />
        </Route>
      </Layout>
    </div>
  );
};

export default Home;
