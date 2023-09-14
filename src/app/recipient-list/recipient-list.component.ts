import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RecipientService } from './recipient.service';
import { myGroup } from './myGroup';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css'],
  standalone: true,
  imports: [CdkAccordionModule, NgFor, MatCheckboxModule, FormsModule],
})
export class RecipientListComponent {
  groupsList: Array<myGroup> = [];
  allComplete: boolean = false;

  // selectedUser?: myRecipient;
  expandedIndex = 0;
  group: myGroup = {
    recipient_id: '',
    name: 'défaut',
    item_type: 'group',
    members: [],
    completed: false,
  };

  constructor(private recipientService: RecipientService) {}

  getRecipientList() {
    let test: string[] = [];
    this.recipientService.getGroups().subscribe((response) => {
      this.updateRecipientList(response);
    });
    return test;
  }
  updateRecipientList(response: myGroup[]) {
    this.groupsList = response;
  }

  ngOnInit() {
    this.getRecipientList();
  }
}
