import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meditator-pop-up',
  templateUrl: './meditator-pop-up.component.html',
  styleUrls: ['./meditator-pop-up.component.css']
})
export class MeditatorPopUpComponent {
  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpMeditatorDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-meditator',
  templateUrl: 'meditator-pop-up.html',
})
export class PopUpMeditatorDisplay {}


