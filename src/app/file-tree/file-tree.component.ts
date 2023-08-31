import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { Item } from './Item';
import { FileTreeService } from './file-tree.service';
import { SearchComponent } from '../search/search.component';

/** File node data with possible child nodes. */
export interface FileNode {
  item_id: string;
  item_local_path: string;
  name: string;
  item_type: string;
  children?: FileNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  id: string;
  name: string;
  local_path: string;
  type: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css'],
  standalone: true,
  imports: [MatTreeModule, MatIconModule, SearchComponent],
})
export class FileTreeComponent implements OnInit {
  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  rootItem: Item = {
    item_id: '1',
    item_local_path: '.',
    name: 'home',
    item_type: 'folder',
    children: [],
  };

  selectedItem: Item = {
    item_id: '0',
    item_local_path: '.',
    name: 'file-tree selectedItem',
    item_type: 'item',
    children: [],
  };

  @Output() clickItem = new EventEmitter<string>();

  constructor(private fileTreeService: FileTreeService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  onSearchItem(searchedItemName: string) {
    this.rootItem.name = searchedItemName;
    this.getFileTree();
  }

  getFileTree(): void {
    this.fileTreeService.getItemByName(this.rootItem.name).subscribe((item) => {
      this.dataSource.data = [item];
    });
  }

  onClickNode(node: FlatTreeNode): void {
    this.selectedItem = {
      item_id: node.id,
      item_local_path: node.local_path,
      name: node.name,
      item_type: node.type,
      children: [],
    };
    console.log(
      'FileTreeComponent > (click)="onClickNode(node)" > this.selectedItem = node = ',
      this.selectedItem
    );
    this.clickItem.emit(this.selectedItem.item_id);
  }

  /** Transform the data to something the tree can read. */
  transformer(node: FileNode, level: number): FlatTreeNode {
    return {
      id: node.item_id,
      name: node.name,
      local_path: node.item_local_path,
      type: node.item_type,
      level,
      expandable: !!node.children,
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatTreeNode): number {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode): boolean {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatTreeNode): boolean {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }

  ngOnInit(): void {
    this.getFileTree();
  }
}
