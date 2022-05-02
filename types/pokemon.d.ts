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
type PokemonStats = Stat[]

type FlavorText = {
  flavorText: string
}

type Description = {
  flavorTexts: FlavorText[]
}

type PokemonInfos = {
  weight: number
  height: number
  abilities: Ability[]
  description: Description
}


type Pokemon = {
  id: number
  name: string
  types: Type[]
  stats: PokemonStats
} & PokemonInfos

type PokemonSearch = {
  id: number
  name: string
}