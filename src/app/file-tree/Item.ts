export interface Item {
  item_id: string;
  item_local_path: string;
  item_name: string;
  item_type: string;
  children: Array<Item>;
}
