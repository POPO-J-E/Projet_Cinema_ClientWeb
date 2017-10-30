import { BrowserModule } from '@angular/platform-browser';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiService} from './service/api-service.service';
import { CategoryComponent } from './category/category.component';
import { PosterComponent } from './poster/poster.component';

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
    MDBBootstrapModule.forRoot()
  ],
  providers: [ApiService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule {}
