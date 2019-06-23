// @flow

import React from 'react';
import TestRenderer from 'react-test-renderer';
import type { ReactTestRenderJSON } from 'react-test-renderer';
import { Photo } from '../../../src/components/photo';
import type { PhotoProps } from '../../../src/components/photo';

describe('Photo functional component', () => {
  let component: ReactTestRenderJSON;
  let props: PhotoProps;

  beforeEach(() => {
    props = {
      source: 'somewhere/image.png'
    };

    component = TestRenderer
      .create(<Photo {...props} />)
      .toJSON();
  });

  test('should render as an <img /> element', () => {
    expect(component.type).toBe('img');
  });

  test('should set the <img /> src attribute to props.source', () => {
    const { src } = component.props;

    expect(src).toBe(props.source);
  });
});
