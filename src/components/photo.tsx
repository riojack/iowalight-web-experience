import React, { FC } from 'react';

export type PhotoProps = { source: string };

export const Photo: FC<PhotoProps> = (props: PhotoProps) => (<div><img src={props.source} alt="Thumbnail" /></div>);
