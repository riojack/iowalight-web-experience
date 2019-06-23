import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Photo } from '../../../src/components/photo';

describe('Photo functional component', () => {
  test('should render as an <img /> element', () => {
    const component = TestRenderer
      .create(<Photo />)
      .toJSON();

    expect(component.type).toBe('img');
  });
});
