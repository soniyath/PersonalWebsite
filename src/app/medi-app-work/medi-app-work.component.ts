import {Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'medi-app-pop-up',
  templateUrl: './medi-app-work.component.html',
  styleUrls: ['./medi-app-work.component.css']
})
export class MediAppWorkComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'popUpMediApp.html',
})
export class DialogContentExampleDialog {}
