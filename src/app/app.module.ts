import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MediAppWorkComponent } from './medi-app-work/medi-app-work.component';
import { PopUpMediAppComponent } from './pop-up-medi-app/pop-up-medi-app.component';


@NgModule({
  declarations: [
    AppComponent,
    MediAppWorkComponent,
    PopUpMediAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogModule
  ],
  entryComponents: [PopUpMediAppComponent],
  exports: [PopUpMediAppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
