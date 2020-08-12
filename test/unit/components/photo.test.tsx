import React from 'react';
import { Photo } from '../../../src/components/photo';
import { PhotoProps } from '../../../src/components/photo';
import { render } from '@testing-library/react';

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
