import details, { Result } from 'lib/queries/pokeapi/details';
import mock from 'mocks/data/details.json';

describe('pokeapi details', () => {
  it('should not throw', async () => {
    await expect(details('1')).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;
    beforeAll(async() => {
      result = await details('1');
    })

    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return details in the expected format', async () => {
      expect(result).toEqual(mock['1'])
    })
  })
})