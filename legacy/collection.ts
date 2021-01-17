import { ImageItem } from './image-item';

export interface Collection {
  collection: string;
  added: string;
  updated: string;
  time: number;
  items: ImageItem[];
}
