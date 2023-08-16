/** Example file/folder data. */
export const files = [
  {
    item_id: '5',
    item_local_path: '/home/',
    item_name: 'Home',
    item_type: 'folder',
    children: [
      {
        item_id: '2',
        item_local_path: '/home/the_beatles',
        item_name: 'The Beatles',
        item_type: 'folder',
        children: [],
      },
      {
        item_id: '4',
        item_local_path: '/home/henri_salvador',
        item_name: 'Henri Salvador',
        item_type: 'folder',
        children: [
          {
            item_id: '1',
            item_local_path: '/home/henri_salvador/dans_mon_ile.pdf',
            item_name: 'Dans mon ile',
            item_type: 'file',
            children: [],
          },
          {
            item_id: '3',
            item_local_path: '/home/henri_salvador/natacha/',
            item_name: 'Natacha',
            item_type: 'folder',
            children: [],
          },
        ],
      },
    ],
  },
];
