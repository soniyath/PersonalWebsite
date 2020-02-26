import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-math-tutor-pop-up',
  templateUrl: './math-tutor-pop-up.component.html',
  styleUrls: ['./math-tutor-pop-up.component.css']
})
export class MathTutorPopUpComponent{
  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpMathTutorDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-math-tutor',
  templateUrl: 'math-tutor-pop-up.html',
})
export class PopUpMathTutorDisplay {}
