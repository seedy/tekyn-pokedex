import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import getPokemonIdsQuery from "lib/queries/pokeapi/getPokemonIds";
import IconButtonRandom from "components/IconButton/Random";

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getPokemonIdsQuery();
  const pokemonIds = query.data.ids.map(({ id }) => id);
  return {
    props: {
      pokemonIds,
    },
  };
};

const Home: NextPage = ({
  pokemonIds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Tekyn Pokedex</title>
        <meta name="description" content="Pokedex challenge application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Welcome</main>

      <IconButtonRandom pokemonIds={pokemonIds} />
    </div>
  );
};

export default Home;
