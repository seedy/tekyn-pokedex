import filterOptions from "lib/filterOptions";

describe('filterOptions', () => {
  const OPTIONS = ['1', '10', '11', '110'];
  it('should keep all options', () => {
    expect(filterOptions('1', OPTIONS)).toEqual(OPTIONS);
  })
  it('should keep options containing 0', () => {
    expect(filterOptions('0', OPTIONS)).toEqual(['10', '110']);
  })
  it('should keep options containing 11', () => {
    expect(filterOptions('11', OPTIONS)).toEqual(['11', '110']);
  })
})