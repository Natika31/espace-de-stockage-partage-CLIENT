import { MyFile } from '../file-viewer/MyFile';

export interface Directory {
  directory_id: number;
  directory_name: string;
  directory_local_path: string;
  childrenDTO: Array<MyFile>;
}
