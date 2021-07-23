import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroComponent } from './components/shared/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
