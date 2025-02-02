import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuerdosComponent } from './recuerdos/recuerdos.component';
import { TriviaComponent } from './trivia/trivia.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { CartaComponent } from './carta/carta.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RecuerdosComponent,
    TriviaComponent,
    PuzzleComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
