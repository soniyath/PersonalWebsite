import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-website',
  templateUrl: './pop-up-website.component.html',
  styleUrls: ['./pop-up-website.component.css']
})
export class PopUpWebsiteComponent {
constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PopUpWebsiteDisplay);
    dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-website',
  templateUrl: 'website-pop-up.html',
})
export class PopUpWebsiteDisplay {}
