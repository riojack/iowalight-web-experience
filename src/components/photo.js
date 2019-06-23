// @flow

import React from 'react';

export type PhotoProps = {
  source: string
};

export const Photo = (props: PhotoProps) => <img src={props.source} />;
