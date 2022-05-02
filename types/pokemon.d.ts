type Ability = {
  name: string
}

type Type = {
  name: string
}

type STAT_NAMES = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'

type Stat = {
  base: number
  stat: {
    name: STAT_NAMES
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