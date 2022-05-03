import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Suspense } from "react";
import Head from "next/head";
import getPokemonIdsNamesQuery from "lib/queries/pokeapi/getPokemonIdsNames";
import Layout from "components/Layout";
import SearchRoute from "pages/routes/search";
import Route from "components/Route";
import { globalCss } from "stitches.config";
import details from "lib/queries/pokeapi/details";
import dynamic from "next/dynamic";
import { Skeleton } from "pages/routes/details";

const DetailsRoute = dynamic(() => import("pages/routes/details"), {
  suspense: true,
});

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
          <Suspense fallback={<Skeleton />}>
            <DetailsRoute pokemons={pokemons} />
          </Suspense>
        </Route>
      </Layout>
    </div>
  );
};

export default Home;
