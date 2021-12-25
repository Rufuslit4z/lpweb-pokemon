export interface Card {
    _id: string,
    poke_id: number,
    name: string,
    image: string,
    type: string,
    stats: {
      attack: number,
      hp: number,
      speed: number,
      defense: number
    },
    __v: number
}