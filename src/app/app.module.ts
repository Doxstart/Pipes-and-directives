import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directive/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SpecialButtonDirective } from './directives/special-button/special-button.directive';
import { ChopDescrPipe } from './pipes/chop-description/chop-descr.pipe';
import { CurrentAgePipe } from './pipes/current-age/current-age.pipe';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { UnlessDirective } from './directives/unless/unless.directive';



@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectivesComponent,
    FirstUpperPipe,
    CurrentAgePipe,
    ChopDescrPipe,
    SpecialButtonDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
