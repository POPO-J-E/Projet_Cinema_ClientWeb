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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SlideComponent,
    CategoryComponent,
    PosterComponent
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
      }
    ])
  ],
  providers: [ApiService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule {}
