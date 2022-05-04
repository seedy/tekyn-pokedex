# Tekyn Pokedex Challenge

Welcome, here are the instructions to review the challenge

## Running locally

### Getting Started

First, install dependencies (Note: [yarn](https://yarnpkg.com/) is this project's dependency manager):

```bash
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the project, run:

```bash
yarn build
```

Then, to serve the application from the built artifacts, run:

```bash
yarn start
```

### Test

To run unit and integration tests, run the following command:

```bash
yarn test
```

### Storybook

To launch the storybook locally, run the following command:

```bash
yarn storybook
```

## Watching Remotely

### Deployment on Vercel

You can find the latest deployment of the application on Vercel:

[Tekyn Pokedex](https://tekyn-pokedex-seedy.vercel.app/)

### CI

There is a SemaphoreCI running on the [repository](https://github.com/seedy/tekyn-pokedex)

### Storybook on github pages

The project's storybook was deployed with latest documentation of the components on Github Pages:

[Tekyn Pokedex - Storybook](https://seedy.github.io/tekyn-pokedex)

## Challenge information

### Toolchain

I used NextJs and [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app) to bootstrap this project.

### PokeApi

I used the [graphQL endpoint of the PokeApi](https://beta.pokeapi.co/graphql/v1beta), but I'm calling it with classic `fetch` requests instead of relying on a graphQL client.

Please note it was my first time consuming a graphQL api.

### SPA

NextJs is better suited for MPA (multiple pages applications) most of the time.

I used the framework to have easy data loading optimizations and server-side requests.

I clearly prefer MPA logic over SPA, as it helps building less state in an application. If it wasn't for the challenge, I would have built a MPA with a static first page.

Still, I followed the rule. I have a single page component and a custom routing layer on top of `next/router` for matching urls.

I preferred NextJs over a simpler React application for this challenge, because NextJs is a bit more opinionated and brought me some useful tools, that I didn't want to manage for the challenge.

### Styled Components

I chose [stitches](https://stitches.dev/) as my css-in-js styling library. I'm getting used to its API, which is very friendly for design systems.

It implements the concept of variants, which is very valuable to me.

They also claim to have better performances than any other "styled components" library on the market, plus they're backed by Vercel.

### Tests

I decided to work on this challenge with TDD/BDD practices. I wrote my integration tests and my stories as I was building my components.

I noticed a few bugs here and there once I started building the final application, as I didn't expect some visual constraints once I had my components layered together.

I started with real fetch calls to the pokeApi endpoints during my tests.

I then mocked the data that I copy/pasted from their [graphQL console](https://beta.pokeapi.co/graphql/console/) to MSW.

I made a few mistakes on that step, updating my queries once I had my mocks set up, which led me to a few bugs here and there.

Now that I'm done, I note that I should have started immediately with MSW to mock my data during development.

Having my queries stable as early as possible would also have been a plus. I put that on the fact I'm new to GraphQL.

### Bonus

#### Search input

I replaced the search field on the first screen by an autocomplete. I used [downshift](https://www.downshift-js.com/) to get the DOM primitives I required, then styled the component myself.

#### Responsive layout

I did just a bit of work to improve responsiveness, but there would be some work to do from the mockups to define how the "details" page should break down when it doesn't fit on screen.

#### Image optimizations

I relied on NextJs' component `next/image` to natively optimize images

I don't load sprites from the pokeApi, as they didn't match the mockup. Instead I chose to store the specific images given and display them only for the related pokemons.

### Workflow

- TDD/BDD practices
- Issues on the github repo
- Semantic commits

### Time spent

I took my time to work on this challenge and bring most of what was asked, with a medium/high level of documentation and testing.

I spent about **29 hours** working on the project, which is about **4 working days**.

I really enjoyed my working process, writing tests and stories on the go. I'm proud of the tests and the documentation I wrote.
