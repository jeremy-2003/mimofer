import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecuerdosComponent } from './recuerdos/recuerdos.component';
import { TriviaComponent } from './trivia/trivia.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { CartaComponent } from './carta/carta.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Página principal
  { path: 'recuerdos', component: RecuerdosComponent }, // Página de Recuerdos
  { path: 'trivia', component: TriviaComponent }, // Página de Trivia
  { path: 'puzzle', component: PuzzleComponent }, // Página del Puzzle
  { path: 'carta', component: CartaComponent }, // Página de la Carta Virtual
  { path: 'login', component: LoginComponent }, // Página de Login
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
