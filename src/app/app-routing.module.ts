import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { AppComponent } from './app.component';
import { WorkComponent } from './work';  

const routes: Routes = [
  {path: '', component : AppComponent},
  {path: 'about', component : AboutComponent},
  {path: 'work', component : WorkComponent},

  // Otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const AppRoutingModule = RouterModule.forRoot(routes);