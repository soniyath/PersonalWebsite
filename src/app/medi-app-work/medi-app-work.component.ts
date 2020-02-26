import * as core from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpMediAppComponent } from '../pop-up-medi-app/pop-up-medi-app.component';

@core.Component({
  selector: 'medi-app-pop-up',
  templateUrl: './medi-app-work.component.html',
  styleUrls: ['./medi-app-work.component.css']
})
export class MediAppWorkComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpMediAppComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

