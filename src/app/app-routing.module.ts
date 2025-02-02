import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecuerdosComponent } from './recuerdos/recuerdos.component';
import { TriviaComponent } from './trivia/trivia.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { CartaComponent } from './carta/carta.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a /login
  { path: 'login', component: LoginComponent },
  { path: 'recuerdos', component: RecuerdosComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'login' } // Cualquier otra ruta redirige a /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
