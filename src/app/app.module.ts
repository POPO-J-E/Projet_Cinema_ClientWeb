import { BrowserModule } from '@angular/platform-browser';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { SlideComponent } from './components/home/slide/slide.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiService} from './service/api-service.service';
import { CategoryComponent } from './components/films/category/category.component';
import { PosterComponent } from './components/common/poster/poster.component';
import {RouterModule} from '@angular/router';
import { ActorComponent } from './components/actors/actor/actor.component';
import { FilmsformComponent } from './components/films/filmsform/filmsform.component';
import { FilmeditComponent } from './components/films/filmedit/filmedit.component';
import { ActoraddComponent } from './components/actors/actoradd/actoradd.component';
import { ActoreditComponent } from './components/actors/actoredit/actoredit.component';
import { CharacterComponent } from './components/character/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SlideComponent,
    CategoryComponent,
    PosterComponent,
    ActorComponent,
    FilmsformComponent,
    FilmeditComponent,
    ActoraddComponent,
    ActoreditComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: SliderComponent
      },
      {
        path: '',
        component: SliderComponent
      },
      {
        path: 'films',
        component: CategoryComponent
      },
      {
        path: 'actors',
        component: ActorComponent
      },
      {
        path: 'addactor',
        component: ActoraddComponent
      },
      {
        path: 'addfilm',
        component: FilmsformComponent
      },
      {
        path: 'editactor/:id',
        component: ActoreditComponent
      },
      {
        path: 'editfilm/:id',
        component: FilmeditComponent
      }
    ])
  ],
  providers: [ApiService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule {}
