import React from 'react';

export type PhotoProps = {
  source: string
};

export const Photo: React.FunctionComponent<PhotoProps> = (props: PhotoProps) => (<div><img src={props.source} alt="Thumbnail" /></div>);
