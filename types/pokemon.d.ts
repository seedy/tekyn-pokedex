type Ability = {
  name: string
}

type Types = "normal"|
"fire"|
"water"|
"grass"|
"electrique"|
"ice"|
"fight"|
"poison"|
"ground"|
"flight"|
"psychic"|
"bug"|
"rock"|
"ghost"|
"dark"|
"dragon"|
"steel"|
"fairy"

type Type = {
  name: Types
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

type PokemonSearch = {
  id: number
  name: string
}

type Evolutions = {
  chain: {
    pokemons: PokemonSearch[]
  }
}

type Pokemon = {
  id: number
  name: string
  evolutions: Evolutions
  types: Type[]
  stats: PokemonStats
} & PokemonInfos