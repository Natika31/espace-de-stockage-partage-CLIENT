export interface myRecipient {
  recipient_id: string;
  name: string;
  item_type: string;
  completed: boolean;
  members: Array<myRecipient>;
}
