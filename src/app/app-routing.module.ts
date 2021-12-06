import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './component/boutique/boutique.component';
import { DeckComponent } from './component/deck/deck.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'home/login', component: LoginComponent },
  { path: 'home/deck', component: DeckComponent },
  { path: 'home/boutique', component: BoutiqueComponent },
  { path: '',
    redirectTo: 'home/login',
    pathMatch: 'full' },
  { path: '**', 
    redirectTo: 'home/login',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
