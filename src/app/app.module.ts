import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AnotherOneComponent } from './pages/another-one/another-one.component';
import { AnimalPageComponent } from './pages/animal-page/animal-page.component';

import { AppComponent } from './app.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import { AnyService } from './services/any.service';

import { KebabCasePipe } from './pipes/kebab-case.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomepageComponent },
  { path: 'another-one', component: AnotherOneComponent },
  { path: 'animal/:id', component: AnimalPageComponent }
];

@NgModule({
  declarations: [
    HomepageComponent,
    AnotherOneComponent,
    AnimalPageComponent,
    AppComponent,
    AnimalCardComponent,
    AnimalListComponent,
    KebabCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AnyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
