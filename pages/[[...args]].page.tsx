import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import getPokemonIdsNamesQuery from "lib/queries/pokeapi/getPokemonIdsNames";
import Layout from "components/Layout";
import SearchRoute from "pages/routes/search";
import Route from "components/Route";
import { globalCss } from "stitches.config";

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getPokemonIdsNamesQuery();
  const pokemonIdsNames = query.data.idsNames;
  return {
    props: {
      pokemonIdsNames,
    },
  };
};

const Home: NextPage = ({
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
      </Layout>
    </div>
  );
};

export default Home;
