type Ability = {
  name: string
}

type Type = {
  name: string
}

type Stat = {
  base: number
  id: number
  stat: {
    name: string
  }
}

type FlavorText = {
  flavorText: string
}

type Description = {
  flavorTexts: FlavorText[]
}

type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  abilities: Ability[]
  types: Type[]
  stats: Stat[]
  description: Description
}

type PokemonSearch = {
  id: number
  name: string
}