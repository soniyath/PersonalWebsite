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
import { PopUpTimeAndSpaceComponent } from './pop-up-time-and-space/pop-up-time-and-space.component';
import { PopUpTimeAndSpaceComponentDisplay } from './pop-up-time-and-space/pop-up-time-and-space.component';
import { PopUpWebsiteComponent } from './pop-up-website/pop-up-website.component';
import { PopUpWebsiteDisplay } from './pop-up-website/pop-up-website.component';
import {AboutComponent} from './about/about.component';
import { WorkComponent } from './work/work.component';
import { MathTutorPopUpComponent } from './math-tutor-pop-up/math-tutor-pop-up.component';
import {PopUpMathTutorDisplay} from './math-tutor-pop-up/math-tutor-pop-up.component';
import { PizzaChefPopUpComponent } from './pizza-chef-pop-up/pizza-chef-pop-up.component';
import { PopUpPizzaChefDisplay } from './pizza-chef-pop-up/pizza-chef-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    MediAppWorkComponent,
    PopUpMediAppComponent,
    PopUpTimeAndSpaceComponent,
    PopUpTimeAndSpaceComponentDisplay,
    PopUpWebsiteComponent,
    PopUpWebsiteDisplay,
    AboutComponent,
    WorkComponent,
    MathTutorPopUpComponent,
    PopUpMathTutorDisplay,
    PizzaChefPopUpComponent,
    PopUpPizzaChefDisplay
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
  entryComponents: [
    PopUpMediAppComponent,
    PopUpTimeAndSpaceComponentDisplay,
    PopUpWebsiteDisplay,
    PopUpMathTutorDisplay,
    PopUpPizzaChefDisplay
  ],
  exports: [
    PopUpMediAppComponent,
    PopUpTimeAndSpaceComponentDisplay,
    PopUpWebsiteDisplay, 
    PopUpMathTutorDisplay,
    PopUpPizzaChefDisplay
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
