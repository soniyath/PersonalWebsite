import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pizza-chef-pop-up',
  templateUrl: './pizza-chef-pop-up.component.html',
  styleUrls: ['./pizza-chef-pop-up.component.css']
})
export class PizzaChefPopUpComponent {
  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpPizzaChefDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-pizza-chef',
  templateUrl: 'pizza-chef-pop-up.html',
})
export class PopUpPizzaChefDisplay {}
