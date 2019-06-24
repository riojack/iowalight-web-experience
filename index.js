// @flow

declare var document: Document;

import React from 'react';
import ReactDOM from 'react-dom';
import { Photo } from './src/components/photo';

const root: HTMLDivElement = document.createElement('div');
const body: ?HTMLBodyElement = document.querySelector('body');

if (body != null) {
  body.appendChild(root);
}

ReactDOM.render(<Photo source={'nada.jpg'} />, root);
