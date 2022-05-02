import {isCellActive, groupStats, makeStatsMatrix} from 'lib/stats'
const HP = 78;
const ATTACK = 84;
const DEFENSE = 78;
const SPEA = 109;
const SPED = 85;
const SPEED = 100;
const STATS: PokemonStats = [
  {
    base: HP,
    stat: {
      name: "hp",
    },
  },
  {
    base: ATTACK,
    stat: {
      name: "attack",
    },
  },
  {
    base: DEFENSE,
    stat: {
      name: "defense",
    },
  },
  {
    base: SPEA,
    stat: {
      name: "special-attack",
    },
  },
  {
    base: SPED,
    stat: {
      name: "special-defense",
    },
  },
  {
    base: SPEED,
    stat: {
      name: "speed",
    },
  },
];

describe('stats', () => {
    // NB: cells are populated in reverse order, which means index 0 is active once `base` is 150
    describe('isCellActive', () => {
    it('should return true', () => {
      expect(isCellActive(0, 150)).toBe(true)
    });
    it('should return false', () => {
      expect(isCellActive(0, 140)).toBe(false);
    })
    it('should return false', () => {
      expect(isCellActive(0, 85)).toBe(false)
    });
    it('should return true', () => {
      expect(isCellActive(7, 85)).toBe(true)
    })
    it('should return true', () => {
      expect(isCellActive(14, 10)).toBe(true)
    })
  })
  describe('groupStats', () => {
    it('should return a map of stats', () => {
      expect(groupStats(STATS)).toEqual(expect.objectContaining({
        hp: HP,
        attack: ATTACK,
        defense: DEFENSE,
        'special-attack': SPEA,
        'special-defense': SPED,
        speed: SPEED
      }))
    })
  })
  describe('makeStatsMatrix', () => {
    describe('15X6 matrix', () => {
      const matrix = makeStatsMatrix(STATS);
      it('should have length 15', () => {
        expect(matrix).toHaveLength(15);
      })
      it.each(matrix)('should have each item of length 6', ({cells}) => {
        expect(cells).toHaveLength(6);
      })
      it('should have a key for each item', () => {
        const keys = matrix.map(({key}) => key);
        expect(keys).toHaveLength(15);
        expect(keys).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
      })
      it.each(matrix)('each row should have a complex key', ({key, cells}) => {
        const keys = cells.map(({key}) => key);
        expect(keys).toHaveLength(6);
        expect(keys).toEqual(expect.arrayContaining([`${key}-0`, `${key}-1`, `${key}-2`,`${key}-3`,`${key}-4`,`${key}-5` ]))
      })
    });
    describe('order', () => {
      it('should follow default order', () => {
        const matrix = makeStatsMatrix(STATS);
        // HP
        expect(matrix[8].cells[0]).toEqual({key: '8-0', active: true});
        expect(matrix[7].cells[0]).toEqual({key: '7-0', active: false});

        // ATTACK
        expect(matrix[7].cells[1]).toEqual({key: '7-1', active: true});
        expect(matrix[6].cells[1]).toEqual({key: '6-1', active: false});
        
        // DEFENSE
        expect(matrix[8].cells[2]).toEqual({key: '8-2', active: true});
        expect(matrix[7].cells[2]).toEqual({key: '7-2', active: false});
        
        // SPEA
        expect(matrix[5].cells[3]).toEqual({key: '5-3', active: true});
        expect(matrix[4].cells[3]).toEqual({key: '4-3', active: false});
        
        // SPED
        expect(matrix[7].cells[4]).toEqual({key: '7-4', active: true});
        expect(matrix[6].cells[4]).toEqual({key: '6-4', active: false});
        
        // SPEED
        expect(matrix[5].cells[5]).toEqual({key: '5-5', active: true});
        expect(matrix[4].cells[5]).toEqual({key: '4-5', active: false});
      });
      it('should follow custom order', () => {
        const matrix = makeStatsMatrix(STATS, ['attack', 'defense', 'special-attack', 'hp', 'speed', 'special-defense']);
        // ATTACK
        expect(matrix[7].cells[0]).toEqual({key: '7-0', active: true});
        expect(matrix[6].cells[0]).toEqual({key: '6-0', active: false});

        // DEFENSE
        expect(matrix[8].cells[1]).toEqual({key: '8-1', active: true});
        expect(matrix[7].cells[1]).toEqual({key: '7-1', active: false});

        // SPEA
        expect(matrix[5].cells[2]).toEqual({key: '5-2', active: true});
        expect(matrix[4].cells[2]).toEqual({key: '4-2', active: false});

        // HP
        expect(matrix[8].cells[3]).toEqual({key: '8-3', active: true});
        expect(matrix[7].cells[3]).toEqual({key: '7-3', active: false});
        
        // SPEED
        expect(matrix[5].cells[4]).toEqual({key: '5-4', active: true});
        expect(matrix[4].cells[4]).toEqual({key: '4-4', active: false});

        // SPED
        expect(matrix[7].cells[5]).toEqual({key: '7-5', active: true});
        expect(matrix[6].cells[5]).toEqual({key: '6-5', active: false});
        
      })
    })
  })
})