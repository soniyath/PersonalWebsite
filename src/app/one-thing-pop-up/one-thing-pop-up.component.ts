import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-one-thing-pop-up',
  templateUrl: './one-thing-pop-up.component.html',
  styleUrls: ['./one-thing-pop-up.component.css']
})
export class OneThingPopUpComponent {
  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpOneThingDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-one-thing',
  templateUrl: 'one-thing-pop-up.html',
})
export class PopUpOneThingDisplay {}


