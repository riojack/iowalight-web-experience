import React from 'react';
import { Photo, PhotoProps } from '../../../src/components/photo';
import { render } from '@testing-library/preact';

describe('Photo functional component', () => {
  let props: PhotoProps;

  beforeEach(() => {
    props = {
      source: 'somewhere/image.png'
    };
  });

  test('should find an element with an alt text of "Thumbnail"', () => {
    const { queryByAltText } = render(<Photo {...props} />);

    expect(queryByAltText('Thumbnail')).toBeTruthy();
  });
});
