import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-time-and-space',
  templateUrl: './pop-up-time-and-space.component.html',
  styleUrls: ['./pop-up-time-and-space.component.css']
})
export class PopUpTimeAndSpaceComponent {
  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpTimeAndSpaceComponentDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'time-and-space-app',
  templateUrl: 'time-and-space-pop-up.html',
})
export class PopUpTimeAndSpaceComponentDisplay {}
