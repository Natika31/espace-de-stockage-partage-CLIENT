import { Item } from '../file-tree/Item';

export interface myUser {
  recipient_id: string;
  name: string;
  mail: string;
  item_type: string;
  root: Item;
  children: Array<Item>;
}
