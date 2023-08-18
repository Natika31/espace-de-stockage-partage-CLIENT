import { Item } from '../file-tree/Item';

export interface MyFile extends Item {
  binary_content: string;
}
