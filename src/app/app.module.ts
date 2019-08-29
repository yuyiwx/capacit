import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pag1Component } from './pag1/pag1.component';
import { Routes, RouterModule } from '@angular/router';

const approute: Routes = [
  {path: 'pag1', component:Pag1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Pag1Component
  ],
  imports: [
    RouterModule.forRoot(
      approute, {enableTracing: false}
    ),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
