import { uv } from './pantones';

describe('uv pantone', () => {
  it('red color found and work', () => {
    expect(uv.red.rgb).toEqual('#ff7276');
  });
});
