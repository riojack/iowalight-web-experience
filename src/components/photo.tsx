import React, { FC, ReactElement } from 'react';

export type PhotoProps = {
  source: string
};

export const Photo: FC<PhotoProps> = (props: PhotoProps): ReactElement => {
  return (<div>
    <img src={props.source} alt="Thumbnail" />
  </div>);
};
