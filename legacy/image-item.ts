export interface Position2D {
  x: number;
  y: number;
}

export interface ImageItem {
  name: string;
  image: string;
  backgroundUrl: string;
  backgroundPosition: Position2D;
  height: number;
  width: number;
  tags: string[];
}
