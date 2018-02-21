import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AnotherOneComponent } from './pages/another-one/another-one.component';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import { AnyService } from './services/any.service';

import { KebabCasePipe } from './pipes/kebab-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    KebabCasePipe,
    AnimalCardComponent,
    AnimalListComponent,
    AnotherOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AnyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
