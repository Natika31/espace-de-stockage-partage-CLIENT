import { Item } from '../file-tree/Item';

export interface myUser {
  user_id: string;
  name: string;
  mail: string;
  item_type: string;
  root: Item;
}
