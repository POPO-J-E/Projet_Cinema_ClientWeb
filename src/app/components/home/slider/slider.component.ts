import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
})
export class SliderComponent implements OnInit {
  films;
  constructor(private apiService: ApiService) {
    // this.films = apiService.getAllFilms();
  }
  ngOnInit() {
    this.apiService.getAllFilms()
        .subscribe((response) => {
          this.films = response._embedded.films;
        });
  }
}
