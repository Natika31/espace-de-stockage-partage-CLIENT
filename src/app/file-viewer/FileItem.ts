import { Item } from '../file-tree/Item';

export interface FileItem extends Item {
  binary_content: string;
}
