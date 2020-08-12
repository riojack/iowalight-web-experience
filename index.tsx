import React from 'react';
import ReactDOM from 'react-dom';
import { Photo } from './src/components/photo';

(function (doc: HTMLDocument) {
  const root: HTMLDivElement = doc.createElement('div');
  const body: HTMLBodyElement | null = doc.querySelector('body');

  if (body != null) {
    body.appendChild(root);
  }

  ReactDOM.render(<Photo source={'nada.jpg'} />, root);
})(document);
